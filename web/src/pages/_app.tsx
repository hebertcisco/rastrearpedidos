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
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/main.css"></link>
          <title>Rastreamento de pedidos</title>
          <link rel="icon" href="favicon.ico" />

          <link rel="canonical" href="https://rastrearpedidos.com.br/r" />
          <meta property="og:image" content="images/favicon.png" />
          <meta content="images/favicon.png" property="og:image" />

          <meta property="og:locale" content="pt-BR" />
          <meta property="og:title" content="Rastreamento de pedidos" />
          <meta
            property="og:description"
            content="Rastreamento de objetos integrado aos serviços dos Correios"
          />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" href="favicon.ico" />

          <meta name="theme-color" content="#3070c6" />
          <meta
            name="description"
            content="Rastreamento de objetos integrado aos serviços dos Correios"
          />

          <meta
            name="keywords"
            content="rastreamento, rastreamento shopee, correios rastreamento fácil"
          />

          <meta property="og:url" content="https://rastrearpedidos.com.br/r" />
          <base href="/" />
          <link
            href="https://plus.google.com/+rastrearpedidos"
            rel="publisher"
          />
          <meta content="index, follow" name="robots" />
          <meta content="1 days" name="revisit-after" />
          <meta content="global" name="distribution" />
          <meta content="general" name="rating" />
          <meta content="website" property="og:type" />
          <meta content="Rastreamento de pedidos" property="og:site_name" />
          <meta content="pt-BR" property="og:locale" />
          <meta content="en-US" property="og:locale:alternate" />
          <meta content="pt" property="og:locale:alternate" />
          <meta content="en_US" property="og:locale:alternate" />
          <meta content="id_ID" property="og:locale:alternate" />
          <meta content="Rastreamento de pedidos" property="og:title" />
          <meta content="https://rastrearpedidos.com.br/r" property="og:url" />
          <meta
            content="Rastreamento de objetos integrado aos serviços dos Correios"
            property="og:description"
          />
          <meta content="@rastrearpedidos" name="twitter:site" />
          <meta content="@rastrearpedidos" name="twitter:creator" />
          <meta content="rastrearpedidos.com.br" name="twitter:domain" />

          <meta content="images/favicon.png" property="og:image" />
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
