import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = styled.div`
  /* width: 80%;
  margin-left: 10%; */
  height: 30vh;
`;

const Map = () => {
  // const Map = ({ center, level = 2 }) => {
  const mapRef = useRef();
  //   const { lat, lng } = center;

  useEffect(() => {
    const container = mapRef.current;
    // window.onload
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      {/* kakao map  */}
      <KakaoMap id="map" ref={mapRef}></KakaoMap>
      <div className="flex w-full">
        <a href="" className="w-1/4">
          <img src="/tmap.jpg" alt="tmap" />
        </a>
        <a href="" className="w-1/4">
          <img src="/kakaoNavi.jpg" alt="kakao navigation" />
        </a>
        <a href="" className="w-1/4">
          <img src="/naverMap.jpg" alt="naver map" />
        </a>
        <a href="" className="w-1/4">
          <img src="/daumMap.jpg" alt="daum map" />
        </a>
      </div>
    </>
  );
};

export default Map;
