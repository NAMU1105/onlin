import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { requestTempleteData } from './api/request';

// import WithHead from "../components/shared/components/Hoc/WithHead";

import ComponentMiddleWare from '../components/shared/router/ComponentMiddleware';

import Main from '../components/shared/components/UIElements/Main';
import Greeting from '../components/shared/components/UIElements/Greeting';
import Contact from '../components/shared/components/UIElements/Contact';
import Calendar from '../components/shared/components/UIElements/Calendar';
import Address from '../components/shared/components/UIElements/Address';
import Gallery from '../components/shared/components/UIElements/Gallery';
import Video from '../components/shared/components/UIElements/Video';
import AccountInfo from '../components/shared/components/UIElements/AccountNo';
import SNS from '../components/shared/components/UIElements/Sns';
import Footer from '../components/shared/components/UIElements/Footer';

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

  if (!props.loadedUsers) {
    //   TODO: 로딩 스피너 예쁜걸로 수정하기
    return <p>Loading...</p>;
  }

  const data = JSON.parse(props.loadedUsers.data).template.templateContent;
  const userData = JSON.parse(props.loadedUsers.data);
  const templateId = JSON.parse(props.loadedUsers.data).template.templateName;

  return (
    <>
      <Head>
        <title>{userData.template.templateContent[0].content.title}</title>
        <script
          defer
          type='text/javascript'
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}`}
        ></script>
        <meta
          name='description'
          content={userData.template.templateContent[0].content.title}
        />
        <meta
          name='description'
          content={userData.template.templateContent[0].content.title}
        />
        <meta
          property='og: title'
          content={userData.template.templateContent[0].content.title}
        />
        <meta property='og: url' content='url' />
        <meta
          property='og: description'
          content={userData.template.templateContent[0].content.title}
        />
        <meta
          property='og: image'
          content={userData.template.templateContent[0].content.image}
        />
      </Head>
      {data.map((t, index) => {
        return (
          <ComponentMiddleWare
            key={index}
            themeId={templateId}
            component={VARIANT_MAPS[t.sectionName]}
            content={t.content}
            extraData={userData.template.templateContent[0].content}
          />
        );
        // }
      })}
      <Footer />
    </>
  );
};

async function getData(id: string) {
  const data = await requestTempleteData(id);
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
    // { params: { id: '1' } },
    // { params: { id: '2' } },
    { params: { id: '3' } },
  ];

  return {
    paths: DUMMY_PATH,
    // paths: pathsWithParams,
    fallback: true,
  };
};

export default Detail;
