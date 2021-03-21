import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='dns-prefetch'
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'
          />
          <link
            rel='preconnect'
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            href='//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/styles/atom-one-dark.min.css'
          />
          <script src='//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.1/highlight.min.js' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
