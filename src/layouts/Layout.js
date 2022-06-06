import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { activeNavMenu, animation, aTagClick, dataPoggress } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

const Layout = ({
  children,
  transparentTop,
  transparentHeader,
  topSecondaryBg,
  footerSolidBg,
}) => {
  const router = useRouter();
  useEffect(() => {
    activeNavMenu(router.pathname);
    animation();
    aTagClick();
    dataPoggress();
  });
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
        <title>Hubswitch Africa</title>
        <link rel="shortcut icon" href="assets/img/logo2-trans.png" type="image/png" />
        <meta name="title" content="Hubswitch Africa" />
        <link rel="canonical" href="https://hubswitch.netlify.app" />

        {/*     Social tags    */}
        <meta name="keywords" content="html css js, web design, web development, web, web dev, bootstrap, bootstrap 4, bootstrap 5, css3, html, html5, frontend, backend, mobile, computer basics, computer literacy, android, ios, react-native, react, reactjs, react.js, javascript, php, nodejs, laravel, express, expressjs, responsive web design, academy, learn coding, code, coding web3, blockchain, uiux, ui, ux" />
        <meta name="description" content="Kick-Start Your IT career with an Awesome learning System carefully designed for your success." />

        {/* Schema.org markup for Google+ */}
        <meta itemprop="name" content="Hubswitch Africa" />
        <meta itemprop="description" content="Kick-Start Your IT career with an Awesome learning System carefully designed for your success." />

        <meta itemprop="image" content="https://hubswitch.netlify.app/assets/img/logo2-trans.png" />

        {/* Twitter Card data  */}
        <meta name="twitter:card" content="academy"/>
        <meta name="twitter:site" content="@codemaniac2"/>
        <meta name="twitter:title" content="Hubswitch Africa"/>

        <meta name="twitter:description" content="Kick-Start Your IT career with an Awesome learning System carefully designed for your success."/>
        <meta name="twitter:creator" content="@codemaniac2"/>
        <meta name="twitter:image" content="https://hubswitch.netlify.app/assets/img/logo2-trans.png"/>


        {/* Open Graph data  */}
        
        <meta property="og:title" content="Hubswitch Africa" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hubswitch.netlify.app" />
        <meta property="og:image" content="https://hubswitch.netlify.app/assets/img/logo2-trans.png"/>
        <meta property="og:description" content="Kick-Start Your IT career with an Awesome learning System carefully designed for your success." />
        <meta property="og:site_name" content="Hubswitch Africa" />

      </Head>
      <Header
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
      />
      <MobileHeader
        transparentTop={transparentTop}
        transparentHeader={transparentHeader}
        topSecondaryBg={topSecondaryBg}
      />
      {children}
      <Footer footerSolidBg={footerSolidBg} />
    </Fragment>
  );
};

export default Layout;
