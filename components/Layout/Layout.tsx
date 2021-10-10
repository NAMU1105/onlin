import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Olin</title>
        <link rel='icon' href='/favicon.ico' />
        {/* kakao map */}
        <script
          type='text/javascript'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}`}
        ></script>
        {/* src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}`} */}
        <script
          defer
          type='text/javascript'
          src='https://developers.kakao.com/sdk/js/kakao.js'
        ></script>
      </Head>

      <div className='content w-full flex flex-col items-center justify-center font-noto'>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Layout;
