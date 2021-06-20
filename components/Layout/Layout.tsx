import React from 'react';
import Head from 'next/head';

import Footer from '../shared/components/UIElements/Footer';
import Header from '../shared/components/Navigation/Header';
const KAKAOMAP_KEY = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Olin</title>
        <link rel='icon' href='/favicon.ico' />
        {/* kakao map */}
        <script
          type='text/javascript'
          src='//dapi.kakao.com/v2/maps/sdk.js?appkey=d00c50badc5a2685a0229ce581e51379'
        ></script>
        {/* <!-- services 라이브러리 불러오기 --> */}
        {/* <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2dd917823648fbc7a4deb96e6a1ecf56&libraries=services"
        ></script>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
          crossOrigin="anonymous"
        ></link> */}
        {/* <script type="text/javascript" src={KAKAOMAP_KEY}></script> */}
        {/* google map */}
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUg5GaeCRZVs7KrcOTRnPplvfojXeBUa0"></script> */}
      </Head>

      <div className='content w-full flex flex-col items-center justify-center'>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Layout;
