import React from "react";
import Map from "../shared/components/UIElements/Map";

const address = "DEAR HOTEL 그랜드홀 서울 강남구 압구정로 120";

const Address = (props) => (
  <section className="address">
    <h1>오시는 길</h1>
    {/* <article> */}
    <h3>{address}</h3>
    <h5>버스 / 지하철</h5>
    <p>
      버스 - 지선 7017, 7018 / 간선 5025, 5028, 5029, 2030 신사역 하차 지하철 -
      7호선 학동역 하차
    </p>
    <h5>자가용 / 주차안내</h5>
    <p>
      자가용 - 학동역 8번 출구에서 100M 직진 주차 - 7호선 학동역 8번 출구에서
      을지병원 방향으로 100M (2시간 무료 주차)
    </p>
    <h5>피로연안내</h5>
    <p>지상 2층 뷔페 (300석)</p>
    <h5>신랑에게 마음전하실 곳</h5>
    <p>000-00-000000 (00은행) 이준서</p>
    <h5>신부에게 마음전하실 곳</h5>
    <p>000-00-000000 (00은행) 이준서</p>
    {/* </article> */}
    <Map />
  </section>
);

export default Address;
