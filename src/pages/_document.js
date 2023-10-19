import { Html, Head, Main, NextScript } from 'next/document'

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link
        href="https://fonts.googleapis.com/css?family=Staatliches"
        rel="stylesheet"
        />
        <link
         href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
         rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        
      </body>
    </Html>
  )
}

