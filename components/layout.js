import Head from "next/head";
import { AudioProvider } from "./audioContext";
import { MediaPreloadProvider } from "./mediaPreload";
export default function Layout({ children }) {
  const description = "Julian Tran is a composer and music producer exploring songwriting, soundscapes and image through physical and digital instruments.";
  return <><Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Julian Tran — Composer &amp; Music Producer</title>
    <meta name="description" content={description} />
    <link rel="canonical" href="https://www.juliantran.co/" />
    <meta property="og:type" content="website" /><meta property="og:url" content="https://www.juliantran.co/" />
    <meta property="og:title" content="Julian Tran — Composer & Music Producer" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="https://www.juliantran.co/og-image.jpg" />
    <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" href="/favicon.ico" /><link rel="apple-touch-icon" href="/apple-icon.ico" />
  </Head><MediaPreloadProvider><AudioProvider>{children}</AudioProvider></MediaPreloadProvider></>;
}
