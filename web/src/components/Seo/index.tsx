import { Head } from "next/document";
import { ISeo } from "../../utils/types";
import React from "react";

interface SeoInterface {
  seo: ISeo;
}
const SeoProvider: React.FC<SeoInterface> = ({ seo }) => {
  return (
    <Head>
      <title>
        {seo?.title} - {seo?.description}
      </title>
      <link rel="icon" type="image/svg+xml" href={seo?.og_image} />

      <link rel="canonical" href={seo?.canonical} />
      <meta property="og:image" content={seo?.og_image} />
      <meta content={seo?.og_image} property="og:image" />
      <link rel="icon" type="image/svg+xml" href={seo?.og_image} />

      <meta property="og:locale" content="pt-BR" />
      <meta property="og:title" content={seo?.title} />
      <meta property="og:description" content={seo?.description} />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="manifest" href="manifest.json" />
      <link rel="icon" href="favicon.ico" />

      <meta name="theme-color" content={seo?.themeColor} />
      <meta name="description" content={seo?.description} />

      <meta name="keywords" content={seo?.keywords} />

      <meta property="og:url" content={seo?.canonical} />
      <base href="/" />
      <link href="https://plus.google.com/+hebertsoftware" rel="publisher" />
      <meta content="index, follow" name="robots" />
      <meta content="1 days" name="revisit-after" />
      <meta content="global" name="distribution" />
      <meta content="general" name="rating" />
      <meta content="website" property="og:type" />
      <meta content={seo?.title} property="og:site_name" />
      <meta content="pt-BR" property="og:locale" />
      <meta content="en-US" property="og:locale:alternate" />
      <meta content="pt" property="og:locale:alternate" />
      <meta content="en_US" property="og:locale:alternate" />
      <meta content="id_ID" property="og:locale:alternate" />
      <meta content={seo?.title} property="og:title" />
      <meta content={seo?.canonical} property="og:url" />
      <meta content={seo?.description} property="og:description" />
      <meta content="@hebertbarros" name="twitter:site" />
      <meta content="@hebertsoftware" name="twitter:creator" />
      <meta content={seo?.domain} name="twitter:domain" />

      <meta content={seo?.og_image} property="og:image" />
      <meta content="512" property="og:image:width" />
      <meta content="512" property="og:image:height" />
      <meta content="id" name="geo.country" />
      <meta content="Brazil" name="geo.placename" />
    </Head>
  );
};
export default SeoProvider;
