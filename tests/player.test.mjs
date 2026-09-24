import test from 'node:test';
import assert from 'node:assert/strict';
import { createPlayer } from '../lib/player.mjs';
class AudioDouble extends EventTarget {
  src = ''; muted = false; paused = true; loads = 0;
  play() { this.paused = false; return Promise.resolve(); }
  pause() { this.paused = true; this.dispatchEvent(new Event('pause')); }
  load() { this.loads++; }
  removeAttribute(name) { if (name === 'src') this.src = ''; }
}
const first = { title: 'First', audio: '/first.m4a' };
const second = { title: 'Second', audio: '/second.m4a' };
test('no audio is fetched until play; switching tracks reuses the same element', async () => {
  const audio = new AudioDouble(); let state;
  const player = createPlayer(audio, next => { state = next; });
  assert.equal(audio.src, ''); assert.equal(audio.preload, 'none');
  await player.play(first); assert.equal(state.status, 'playing');
  player.mute(); assert.equal(audio.muted, true); assert.equal(state.muted, true);
  player.pause(); assert.equal(audio.paused, true); assert.equal(state.status, 'paused');
  await player.play(second); assert.equal(audio.src, second.audio); assert.equal(state.track.title, 'Second');
  player.stop(); assert.equal(audio.src, ''); assert.equal(state.track, null); assert.equal(state.status, 'idle');
});
test('a rejected browser play request becomes a recoverable error', async () => {
  const audio = new AudioDouble(); let state;
  audio.play = () => Promise.reject(Object.assign(new Error('blocked'), {name:'NotAllowedError'}));
  const player = createPlayer(audio, next => { state = next; });
  await player.play(first); assert.equal(state.status, 'error'); assert.match(state.error, /Select the project/);
  audio.play = () => Promise.resolve(); await player.play(first); assert.equal(state.status, 'playing'); assert.equal(state.error, '');
});
test('closing while play is pending cannot report that audio is still playing', async () => {
  const audio = new AudioDouble(); let state, resolve;
  audio.play = () => new Promise(r => {resolve = r;});
  const player = createPlayer(audio, next => { state = next; });
  const pending = player.play(first); player.stop(); resolve(); await pending;
  assert.equal(state.status, 'idle'); assert.equal(audio.src, '');
});
test('stale failures cannot overwrite a newer successful track', async () => {
  const audio = new AudioDouble(); let state, reject;
  audio.play = () => new Promise((_, r) => {reject = r;});
  const player = createPlayer(audio, next => { state = next; });
  const pending = player.play(first); audio.play = () => Promise.resolve(); await player.play(second);
  reject(new Error('aborted')); await pending; assert.equal(state.status, 'playing'); assert.equal(state.track.title, 'Second');
});
test('destroy stops media and removes event listeners', async () => {
  const audio = new AudioDouble(); let updates = 0;
  const player = createPlayer(audio, () => updates++); await player.play(first);
  player.destroy(); const count = updates; audio.dispatchEvent(new Event('playing'));
  assert.equal(updates, count); assert.equal(audio.paused, true); assert.equal(audio.src, '');
});
