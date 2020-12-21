//import "../styles/globals.css";

import App from "next/app";
import Head from "next/head";
import React from "react";

type AppProps = {
  Component: React.ReactNode;
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
            integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
            integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
            integrity="sha512-WEQNv9d3+sqyHjrqUZobDhFARZDko2wpWdfcpv44lsypsSuMO0kHGd3MQ8rrsBn/Qa39VojphdU6CMkpJUmDVw=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker.min.css"
            integrity="sha512-mSYUmp1HYZDFaVKK//63EcZq4iFWFjxSL+Z3T/aCt4IO9Cejm03q3NKKYN6pFQzY0SBOr8h+eCIAZHPXcpZaNw=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.16/jquery.timepicker.css"
            integrity="sha512-GgUcFJ5lgRdt/8m5A0d0qEnsoi8cDoF0d6q+RirBPtL423Qsj5cI9OxQ5hWvPi5jjvTLM/YhaaFuIeWCLi6lyQ=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.3.0/css/flat-ui.min.css"
            integrity="sha512-6f7HT84a/AplPkpSRSKWqbseRTG4aRrhadjZezYQ0oVk/B+nm/US5KzQkyyOyh0Mn9cyDdChRdS9qaxJRHayww=="
            crossOrigin="anonymous"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          ></link>

          <link
            rel="stylesheet"
            href="https://rastrearpedidos.web.app/css/style.css"
          />
          <link
            rel="stylesheet"
            href="https://rastrearpedidos.web.app/css/404.css"
          />

          <title>
            Rastrear Pedidos - Rastreamento de objetos integrado aos serviços
            dos Correios
          </title>
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://rastrearpedidos.web.app/svg/mail-307328.svg"
          />

          <link rel="canonical" href="https://rastrearpedidos.com.br" />
          <meta
            property="og:image"
            content="https://rastrearpedidos.web.app/svg/mail-307328.svg"
          />
          <meta
            content="https://rastrearpedidos.web.app/svg/mail-307328.svg"
            property="og:image"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="https://rastrearpedidos.web.app/svg/mail-307328.svg"
          />

          <meta property="og:locale" content="pt-BR" />
          <meta property="og:title" content="Rastrear Pedidos" />
          <meta
            property="og:description"
            content="Rastreamento de objetos integrado aos serviços dos Correios"
          />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" href="favicon.ico" />

          <meta name="theme-color" content="#057bfd" />
          <meta
            name="description"
            content="Rastreamento de objetos integrado aos serviços dos Correios"
          />

          <meta
            name="keywords"
            content="correio, rastrear, rastreamento, rastreamento correios, rastreamento correio, rastreamento de correios, rastreamento do correios, rastreamento dos correios, rastreamento de correio, sedex rastreamento, rastreamento mercado livre, jadlog rastreamento, codigo rastreamento, rastreamento objeto, rastreamento objetos, código rastreamento, codigo de rastreamento, rastreamento de objetos, rastreamento transportadora, sequoia rastreamento, rastreamento shopee, correios rastreamento fácil"
          />

          <meta property="og:url" content="https://rastrearpedidos.com.br" />
          <base href="/" />
          <link
            href="https://plus.google.com/+hebertsoftware"
            rel="publisher"
          />
          <meta content="index, follow" name="robots" />
          <meta content="1 days" name="revisit-after" />
          <meta content="global" name="distribution" />
          <meta content="general" name="rating" />
          <meta content="website" property="og:type" />
          <meta content="Rastrear Pedidos" property="og:site_name" />
          <meta content="pt-BR" property="og:locale" />
          <meta content="en-US" property="og:locale:alternate" />
          <meta content="pt" property="og:locale:alternate" />
          <meta content="en_US" property="og:locale:alternate" />
          <meta content="id_ID" property="og:locale:alternate" />
          <meta content="Rastrear Pedidos" property="og:title" />
          <meta content="https://rastrearpedidos.com.br" property="og:url" />
          <meta
            content="Rastreamento de objetos integrado aos serviços dos Correios"
            property="og:description"
          />
          <meta content="@hebertbarros" name="twitter:site" />
          <meta content="@hebertsoftware" name="twitter:creator" />
          <meta content="rastrearpedidos.com.br" name="twitter:domain" />

          <meta
            content="https://rastrearpedidos.web.app/svg/mail-307328.svg"
            property="og:image"
          />
          <meta content="512" property="og:image:width" />
          <meta content="512" property="og:image:height" />
          <meta content="id" name="geo.country" />
          <meta content="Brazil" name="geo.placename" />
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
