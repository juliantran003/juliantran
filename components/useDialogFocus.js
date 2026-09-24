import { useEffect, useRef } from "react";
export default function useDialogFocus(close) {
  const ref = useRef(null);
  const onClose = useRef(close); onClose.current = close;
  useEffect(() => {
    const previous = document.activeElement;
    const root = ref.current;
    const focusables = () => [...root.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')];
    (focusables()[0] || root).focus();
    const keydown = event => {
      if (event.key === "Escape") { event.preventDefault(); onClose.current(); }
      if (event.key === "Tab") {
        const items = focusables(); const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    root.addEventListener("keydown", keydown);
    return () => { root.removeEventListener("keydown", keydown); if (previous?.isConnected) previous.focus(); else document.querySelector('[aria-label="Home"]')?.focus(); };
  }, []);
  return ref;
}
