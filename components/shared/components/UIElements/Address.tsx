import React from "react";
import Map from "../UIElements/Map";

const address = "DEAR HOTEL 그랜드홀 서울 강남구 압구정로 120";

const Address = (props) => (
  <section id="address" className="address w-full intro-y mt-12 text-center">
    <article>
      <h1 className="mb-4 sub-title">오시는 길</h1>
      <h3>{address}</h3>
      <h5>버스 / 지하철</h5>
      <p>
        버스 - 지선 7017, 7018 / 간선 5025, 5028, 5029, 2030 신사역 하차 지하철
        - 7호선 학동역 하차
      </p>
      <h5>자가용 / 주차안내</h5>
      <p>
        자가용 - 학동역 8번 출구에서 100M 직진 주차 - 7호선 학동역 8번 출구에서
        을지병원 방향으로 100M (2시간 무료 주차)
      </p>
    </article>

    {/* 피로연 안내 */}
    <article>
      <h5 className="my-4 sub-title">피로연안내</h5>
      <p>지상 2층 뷔페 (300석)</p>
    </article>

    {/* 지도 */}
    <article>
      <h1 className="sr-only">map</h1>
      <Map />
    </article>
  </section>
);

export default Address;
