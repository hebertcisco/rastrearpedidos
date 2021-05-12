import * as React from "react";

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

type DocumentProps = {
  styleTags: Array<React.ReactElement<{}>>;
};

export default class CustomDocument extends Document<DocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(
      (App) => (props) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-F610TZ8SNX');
      `,
    };
  }
  public render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          {styleTags}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-153085951-1"
          />
          {/* We call the function above to inject the contents of the script tag */}
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <script
            data-ad-client="ca-pub-3410052543265646"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <></>
        </Head>
        <body>
          <div className="root">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
