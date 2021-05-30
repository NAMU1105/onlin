import axios, { AxiosResponse } from "axios";

const mockTempleteData = {
  userId: "호창",
  createAt: "Sun Apr 18 2021 21:22:15 GMT+0900",
  updateAt: "Sun Apr 18 2021 21:22:15 GMT+0900",
  template: {
    templateName: "template1",
    templateContent: [
      //  ! 필수 섹션
      {
        sectionName: "Main",
        content: {
          title: "파이썬과 코틀린의 결혼식에 초대합니다",
          date: "2021-06-01T12:00:00+01:00",
          place: {
            label: "SW 컨벤션센터 웨딩홀 5층",
            address: {
              latitude: 37.571851,
              longitude: 127.015212,
            },
          },
          groom: "코틀린",
          bride: "파이썬",
        },
      },
      {
        sectionName: "Greeting",
        content: {
          title: "두 언어의 극적인 결합에 초대합니다.",
          content:
            "파이썬의 데이터 분석과\n코틀린의 안드로이드가 만났습니다.\n많은 참석과 축하 부탁드립니다.\n구글만세",
        },
      },
      {
        sectionName: "Contact",
        content: {
          groomContact: "01010203041",
          brideContact: "01010203041",
          groomFatherContact: "01010203042",
          groomMotherContact: "01010203042",
          brideFatherContact: "01010203043",
          brideMotherContact: "01010203044",
        },
      },
      {
        sectionName: "Calendar",
        content: {
          date: "2021-06-01T12:00:00+01:00",
        },
      },
      {
        sectionName: "Map",
        content: {
          place: {
            label: "SW 컨벤션센터 웨딩홀 5층",
            address: {
              latitude: 37.571851,
              longitude: 127.015212,
            },
          },
          contact: "02-2929-2929",
          subContents: [
            {
              title: "버스",
              content: "4040번, 2929번, 1919번 정류장에서 10분",
            },
            { title: "주차", content: "200대 가능" },
            { title: "지하철", content: "3호선 종로3가역 8번 출구 도보 12분" },
            {
              title: "피로연 안내",
              content: "피로하지 않으므로 피로연은 없습니다.",
            },
          ],
        },
      },
      {
        sectionName: "Gallery",
        content: {
          images: [
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
            "http://placeimg.com/200/200/any",
          ],
        },
      },
      {
        sectionName: "Video",
        content: {
          src: "https://www.youtube.com/watch?v=RNN-QApJMW0",
        },
      },
      {
        sectionName: "accountNo",
        content: {
          groom: "우리 1002 050 239718",
          bride: "카카오뱅크 333321323221092",
        },
      },
      {
        sectionName: "sns",
        content: ["kakao", "facebook", "sms", "twitter"],
      },
    ],
  },
};

export const requestTempleteData = async (templeteId: string) => {
  const url = "";
  try {
    // axios.get(url);
    const { data } = await getMockData;
    const { response } = data;
    return response as typeof mockTempleteData;
  } catch (e) {
    throw e;
  }
};

const getMockData: Promise<AxiosResponse<any>> = new Promise<AxiosResponse>(
  (resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        headers: {},
        config: {},
        statusText: "",
        data: {
          status: 200,
          response: mockTempleteData,
        },
      });
    }, 500);
  }
);
