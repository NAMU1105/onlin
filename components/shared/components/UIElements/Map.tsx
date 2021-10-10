import React, { useRef, useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = ({ content, themeId }) => {
  // const Map = ({ center, level = 2 }) => {
  const mapRef = useRef();
  //   const { lat, lng } = center;

  useEffect(() => {
    const container = mapRef.current;
    // window.onload
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(
        content.place.address.latitude,
        content.place.address.longitude
      ), //지도의 중심좌표.
      // center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);

  const openKakaoLink = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    window.open(
      !isMobile
        ? `https://map.kakao.com/link/map/${content.place.address.latitude},${content.place.address.longitude}`
        : `kakaomap://look?p=${content.place.address.latitude},${content.place.address.longitude}`
    );
  };

  return (
    <>
      {/* kakao map  */}
      <div className='kakao-map' id='map' ref={mapRef}></div>
      <div
        className={`kakao-map__connect kakao-map__connect--${themeId}`}
        onClick={openKakaoLink}
      >
        <span className='ml-auto'>카카오맵으로 보기</span>
        <span className='kakao-map__connect__arrow'>▶</span>
      </div>
    </>
  );
};

export default Map;
