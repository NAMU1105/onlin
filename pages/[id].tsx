import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { requestTempleteData } from './api/request';

// import WithHead from "../components/shared/components/Hoc/WithHead";

import ComponentMiddleWare from "../components/shared/router/ComponentMiddleware";

import Main from "../components/shared/components/UIElements/Main";
import Greeting from "../components/shared/components/UIElements/Greeting";
import Contact from "../components/shared/components/UIElements/Contact";
import Calendar from "../components/shared/components/UIElements/Calendar";
import Address from "../components/shared/components/UIElements/Address";
import Gallery from "../components/shared/components/UIElements/Gallery";
import Video from "../components/shared/components/UIElements/Video";
import AccountInfo from "../components/shared/components/UIElements/AccountNo";
import SNS from "../components/shared/components/UIElements/Sns";

const VARIANT_MAPS: Record<string, React.FC<any>> = {
  Main,
  Greeting,
  Contact,
  Calendar,
  Map: Address,
  Gallery,
  Video,
  AccountNo: AccountInfo,
  Sns: SNS,
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
    //   TODO: 로딩 스피너 예쁜걸로 수정하기
    return <p>Loading...</p>;
  }
  

  // console.log(
  //   'props.loadedUsers!!!: ',
  //   JSON.parse(props.loadedUsers)
  //   // props.loadedUsers
  // );
  // const data = JSON.parse(props.loadedUsers.data);
  const data = JSON.parse(props.loadedUsers.data).template.templateContent;
  console.log('data!!!: ', data);
  // console.log('theme_id!!!: ', props.loadedUsers.theme_id);

  // const data = props.loadedUsers;
  // console.log('props.loadedUsers: ', data.template.templateContent);
  // return <div>test</div>;
  return (
    <>
      <Head>
        <title>{props.loadedUsers.userId}</title>
        <meta
          name='description'
          content={`${props.loadedUsers.userId}의 결혼식에 초대합니다.`}
        />
      </Head>
      {data.map((t, index) => (
        <ComponentMiddleWare
          key={index}
          themeId={props.loadedUsers.theme_id}
          component={VARIANT_MAPS[t.sectionName]}
          content={t.content}
        />
      ))}
    </>
  );
};

async function getData(id: string) {
  const data = await requestTempleteData(id);
  // console.log(data);
  // const data = mockTempleteData;
  return data;
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const userId = params.id;

  const user = await getData(userId);

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
    { params: { id: '1' } },
    { params: { id: '2' } },
    // { params: { id: "3" } },
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
