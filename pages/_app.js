
import React, { useState } from 'react';
import { TabsContext } from "contexts/TabContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import App from 'next/app'

function SoonApp({ Component, pageProps }) {

    const [ selectedTab, setSelectedTab ] = useState('사장님');

    return (
        <TabsContext.Provider
            value={{selectedTab, setSelectedTab}}
        >
            <Component {...pageProps} />
        </TabsContext.Provider>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default SoonApp