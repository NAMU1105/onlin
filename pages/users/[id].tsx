import path from "path";
import fs from "fs/promises";
import React from "react";
import { useRouter } from "next/router";
import Gallery from "../../components/Gallery/Gallery";

const Detail = (props) => {
  const router = useRouter();

  //   console.log(router.pathname);
  //   console.log(router.query);
  //   console.log(router.query.id);

  if (!props.loadedUsers) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>
        유저별 페이지 입니다.
        <p>유저 아이디 : {router.query.id}</p>
        {/* <p>유저 아이디 : {props.loadedUsers.id}</p> */}
      </h1>
      <Gallery />
    </>
  );
};

// 간이 data fetching code
async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export const getStaticProps = async (context) => {
  const { params } = context;
  const userId = params.id;

  //   TODO: 나중에 진짜 백엔드 데이터 요청 코드로 바꾸기
  const data = await getData();
  const user = data.users.find((u) => u.id === userId);

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
  const data = await getData();

  const ids = data.users.map((u) => u.id);
  const pathsWithParams = ids.map((id) => ({ params: { id: id } }));

  return {
    paths: pathsWithParams,
    fallback: true,
  };
};

export default Detail;
