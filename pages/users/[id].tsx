import path from "path";
import fs from "fs/promises";
import React from "react";
import { useRouter } from "next/router";
// import axios from 'axios';
import Head from "next/head";

import { requestTempleteData } from "../api/request";

// import WithHead from "../../components/shared/components/Hoc/WithHead";

import ComponentMiddleWare from "../../components/shared/router/ComponentMiddleware";

import Main from "../../components/shared/components/UIElements/Main";
import Greeting from "../../components/shared/components/UIElements/Greeting";
import Contact from "../../components/shared/components/UIElements/Contact";
import Calendar from "../../components/shared/components/UIElements/Calendar";
import Address from "../../components/shared/components/UIElements/Address";
import Gallery from "../../components/shared/components/UIElements/Gallery";
import Video from "../../components/shared/components/UIElements/Video";
import AccountInfo from "../../components/shared/components/UIElements/AccountNo";
import SNS from "../../components/shared/components/UIElements/Sns";

import { sampleData } from "../../data/sampleData";

const VARIANT_MAPS: Record<string, React.FC<any>> = {
  Main,
  Greeting,
  Contact,
  Calendar,
  Map: Address,
  Gallery,
  Video,
  accountNo: AccountInfo,
  sns: SNS,
};

const Detail = (props) => {
  const router = useRouter();
  // console.log(props);
  // console.log(sampleData);
  // console.log(
  //   sampleData.template.templateContent.map((t) => console.log(t.sectionName))
  // );

  //   console.log(router.pathname);
  //   console.log(router.query);
  //   console.log(router.query.id);

  if (!props.loadedUsers) {
    return <p>Loading...</p>;
  }

  console.log(props.loadedUsers);

  return (
    <>
      <Head>
        <title>{props.loadedUsers.userId}</title>
        <meta
          name="description"
          content={`${props.loadedUsers.userId}의 결혼식에 초대합니다.`}
        />
      </Head>
      {props.loadedUsers.template.templateContent.map((t, index) => (
        <ComponentMiddleWare
          key={index}
          component={VARIANT_MAPS[t.sectionName]}
          content={t.content}
        />
      ))}
      {/* {sampleData.template.templateContent.map(
        (t) => VARIANT_MAPS[t.sectionName]
      )} */}
    </>
  );
};

// 간이 data fetching code
async function getData2() {
  const data = await requestTempleteData("test");
  // console.log(data);

  return data;
}
// async function getData() {
//   const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
//   const jsonData = await fs.readFile(filePath);
//   const data = JSON.parse(jsonData.toString());

//   return data;
// }

export const getStaticProps = async (context) => {
  const { params } = context;
  const userId = params.id;

  //   TODO: 나중에 진짜 백엔드 데이터 요청 코드로 바꾸기
  // const data = await getData();
  // const user = data.users.find((u) => u.id === userId);

  const user = await getData2();

  //   invalid한 url일 경우 404페이지 띄움
  if (!user) {
    return { notFound: true };
  }

  return {
    props: {
      loadedUsers: user,
    },
  };
};

export const getStaticPaths = async () => {
  // const data = await getData();
  // const ids = data.users.map((u) => u.id);
  // const pathsWithParams = ids.map((id) => ({ params: { id: id } }));
  // console.log(pathsWithParams);

  const DUMMY_PATH = [
    { params: { id: "1" } },
    { params: { id: "1" } },
    { params: { id: "1" } },
  ];

  return {
    paths: DUMMY_PATH,
    // paths: pathsWithParams,
    fallback: true,
  };
};

export default Detail;
// export default WithHead(
//   Detail,
//   `${sampleData.userId}'s wedding day`,
//   `${sampleData.userId}님의 소중한 결혼식 초대장`
// );
