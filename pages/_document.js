// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add your font imports here */}
        <link rel="stylesheet" href="https://path-to-font" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
