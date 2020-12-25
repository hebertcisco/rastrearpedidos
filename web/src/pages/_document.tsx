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

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  runFirebase() {
    return {
      __html: `
      var firebaseConfig = {
        apiKey: ${process.env.FIREBASE_API_KEY},
        authDomain: ${process.env.FIREBASE_AUTH_DOMAIN},
        databaseURL: ${process.env.FIREBASE_DATABASE_URL},
        projectId: ${process.env.FIREBASE_PROJECT_ID},
        storageBucket: ${process.env.FIREBASE_STORAGE_BUCKET},
        messagingSenderId: ${process.env.FIREBASE_MESSAGING_SENDER_ID},
        appId: ${process.env.FIREBASE_APP_ID},
        measurementId: ${process.env.FIREBASE_MEASUREMENT_ID}
      };
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
      `,
    };
  }
  public render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          {styleTags}

          <>
            <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

            <script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>
            <script dangerouslySetInnerHTML={this.runFirebase()} />
            <script
              src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"
              integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js"
              integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj"
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
              integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg=="
              crossOrigin="anonymous"
            ></script>
            <script src="https://code.jquery.com/jquery-migrate-3.3.2.js"></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"
              integrity="sha512-0QbL0ph8Tc8g5bLhfVzSqxe9GERORsKhIn1IrpxDAgUsbBGz/V7iSav2zzW325XGd1OMLdL4UiqRJj702IeqnQ=="
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
              integrity="sha512-CEiA+78TpP9KAIPzqBvxUv8hy41jyI3f2uHi7DGp/Y/Ka973qgSdybNegWFciqh6GrN2UePx2KkflnQUbUhNIA=="
              crossOrigin="anonymous"
            ></script>
            <script src="https://cdn.jsdelivr.net/npm/jquery.stellar@0.6.2/jquery.stellar.js"></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery-animateNumber/0.0.14/jquery.animateNumber.min.js"
              integrity="sha512-WY7Piz2TwYjkLlgxw9DONwf5ixUOBnL3Go+FSdqRxhKlOqx9F+ee/JsablX84YBPLQzUPJsZvV88s8YOJ4S/UA=="
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.min.js"
              integrity="sha512-T/tUfKSV1bihCnd+MxKD0Hm1uBBroVYBOYSk1knyvQ9VyZJpc/ALb4P0r6ubwVPSGB2GvjeoMAJJImBG12TiaQ=="
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.16/jquery.timepicker.min.js"
              integrity="sha512-huX0hcUeIkgR0QvTlhxNpIAcwiN2sABe3VwyzeZAYjMPn3OU71t9ZLlk6qs27Q049SPgeB/Az12jv/ayedXoAw=="
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
              integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"
              integrity="sha512-IsNh5E3eYy3tr/JiX2Yx4vsCujtkhwl7SLqgnwLNgf04Hrt9BT9SXlLlZlWx+OK4ndzAoALhsMNcCmkggjZB1w=="
              crossOrigin="anonymous"
            ></script>
            <script
              src="https://cdn.jsdelivr.net/npm/scrollax@1.0.0/scrollax.js"
              integrity="sha256-C0JRED8ZsAPncG/uuSNsaCMre27ey9IUHF08419OJp8="
              crossOrigin="anonymous"
            ></script>

            <script src="https://static.rastrearpedidos.com.br/js/bootstrap.min.js"></script>
          </>
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
