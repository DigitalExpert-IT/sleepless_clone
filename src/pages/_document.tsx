import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang={"en"}>
      <Head >
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="sleepless ai world" />
        <meta property="og:description" content="Sleepless AI emerges as a groundbreaking Web3+AI gaming platform, ingeniously blending artificial intelligence and blockchain technology. At its core, Sleepless AI aims to revolutionize the gaming industry with its unique approach and the extensive expertise of its team." />
        <meta property="og:image" content="/alita-ai-logo.png" />
        <meta property="og:url" content="https://sleeplessaiworld.org" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
