import React from "react";
import Head from "next/head";

const Seo = ({
  title = "Khushdeep Jain",
  description = "Hey! I am Khushdeep Jain, a full-stack developer from India.",
  OGImage = "",
  OGType = "website",
  canonicalUrl = "https://www.linkedin.com/in/khushdeep-jain-203783203/",
  publishedDate = new Date(),
  children,
}) => {
  return (
    <React.Fragment>
      <Head>
        {/* basic metadata */}
        <title>{`${title} | Khushdeep Jain`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Khushdeep Jain" />
        <meta name="author" content="KhushdeepJain" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* twitter metadata */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@KhuhsdeepJain" />
        <meta name="twitter:creator" content="@KhuhsdeepJain" />
        <meta name="twitter:title" content="Khuhsdeep Jain" />
        <meta
          name="twitter:description"
          content="Hey! I am Khuhsdeep Jain, a full-stack developer from India."
        />
        <meta
          name="twitter:image"
          content="https://www.linkedin.com/in/khushdeep-jain-203783203/"
        />

        {/* canonical link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* open graph metadata */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={OGType} />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OGImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:section" content={title} />
        <meta property="article:published_time" content={publishedDate} />
        {children}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
