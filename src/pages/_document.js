import { Html, Head, Main, NextScript } from 'next/document'

function MyDocument () {

  return (
    <Html lang="en">
      <Head>
        <link
            rel="icon"
            href="/favicon.ico"
          />
          <link
            rel="stylesheet preload"
            href="https://fonts.googleapis.com/css?family=Staatliches&display=optional"
            as="style"
          />
          <link
            rel="stylesheet preload"
            href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
            as="style"
          />
          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js"
          />*/}
      <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','AW-10981293938');
      `,
    }}
  /> 
      </Head>
      <body>
        <Main />
        <NextScript />  
      </body>
    </Html>
  )
}
export default MyDocument;
