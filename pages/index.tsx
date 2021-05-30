import React from "react";
import Head from "next/head";
// import Image from "next/image";

import styled from "@emotion/styled";
import Header from "../components/shared/components/Navigation/Header";
import Invitation from "./invitation";

const KAKAOMAP_KEY = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}`;

const Container = styled.div`
  width: 30vw;
  height: 50vh;
  position: relative;

  .preview_wrapper {
    position: absolute;
    top: 3rem;
    height: 300px;
    overflow-y: scroll;
    width: 12rem;

    & .preiview_wrapper__content {
      background-color: red;
      height: 1000px;
    }
  }
`;

const IndexPage = () => (
  <>
    <Head>
      {/* facebook 공유를 위한 메타테그들 */}
      {/* TODO: 나중에 내용에 알맞게 수정할 것 */}
      <meta property="og:url" content="http://localhost:3000" />
      <meta property="og:type" content="invitation" />
      <meta
        property="og:title"
        content="Olin's wedding invitation card service"
      />
      <meta property="og:description" content="결혼식 초대장" />
      <meta
        property="og:image"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
      />
      <meta property="fb:app_id" content="450935912707362" />

      <title>Olin project</title>
      {/* kakao map */}
      {/* <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=2dd917823648fbc7a4deb96e6a1ecf56"
      ></script> */}
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
    {/* <Header /> */}
    <main>
      {/* <Preview /> */}
      <Invitation />
    </main>
    {/* <Container>
      <div className="preview_wrapper">
        <div className="preiview_wrapper__content">test</div>
      </div>
      <img src="/m_wrap.png" alt="phone" />
    </Container> */}
  </>
);

export default IndexPage;
