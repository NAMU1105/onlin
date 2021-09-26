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

  // TODO: vercel 배포 시 에러나서 우선 주석 처리
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
      <div className='kakao-map' id='map' ref={mapRef}></div>
      {/* <div className='flex w-full'>
        <a href='' className='flex-1'>
          <img src='/tmap.jpg' className='map__icon' alt='tmap' />
        </a>
        <a href='' className='flex-1'>
          <img
            src='/kakaoNavi.jpg'
            className='map__icon'
            alt='kakao navigation'
          />
        </a>
        <a href='' className='flex-1'>
          <img src='/naverMap.jpg' className='map__icon' alt='naver map' />
        </a>
        <a href='' className='flex-1'>
          <img src='/daumMap.jpg' className='map__icon' alt='daum map' />
        </a>
      </div> */}
      <div className={`kakao-map__connect kakao-map__connect--${themeId}`}>
        <span className='ml-auto '>카카오맵으로 보기</span>
        <span className='kakao-map__connect__arrow'>▶</span>
      </div>
    </>
  );
};

export default Map;
