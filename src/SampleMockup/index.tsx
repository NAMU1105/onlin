import React from "react";
import {
  ContentWrapper,
  IntroSection,
  IntroInfo,
  IntroName,
  MessageSection,
  Page,
  Wrapper,
  CallSection,
  ContactRow,
  PhoneIcon,
  MailIcon,
  ContactBanner,
} from "./style";
import FlexDiv from "../components/utils/FlexDiv";

const SampleMockUp: React.FC = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Page>
          <IntroSection>
            <IntroName>홍길동</IntroName>
            <IntroName>동길홍</IntroName>
            <IntroInfo>{`2021년 10월 21일 토요일 \n오후 1시 30분\nTEAM HOHO Grand Hall`}</IntroInfo>
          </IntroSection>
          <MessageSection>
            {`모든 것이 새로워지는 봄날,
사랑하는 두 사람이
새 인생을 시작하려 합니다.
바쁘시더라도 와 주셔서
두 사람의 결혼을 축복해 주시고
따뜻한 마음으로 격려해 주신다면
큰 힘이 되겠습니다.`}
          </MessageSection>
          <ContactRow>
            <span>신랑에게 축하인사</span>
            <PhoneIcon />
            <MailIcon />
          </ContactRow>
          <ContactRow>
            <span>신부에게 축하인사</span>
            <PhoneIcon />
            <MailIcon />
          </ContactRow>
          <ContactBanner>혼주에게 전화하기</ContactBanner>
          <CallSection>
            <FlexDiv jc="center" wFull>
              <FlexDiv fd="column" p="8px 20px">
                <div style={{ marginBottom: "16px" }}>신랑측 혼주</div>
                <FlexDiv fd="column" p="8px 0">
                  <span>아버지 아무개</span>
                  <FlexDiv jc="center" p={8}>
                    <PhoneIcon />
                    <MailIcon />
                  </FlexDiv>
                  <span>어머니 아무개</span>
                  <FlexDiv jc="center" p={8}>
                    <PhoneIcon />
                    <MailIcon />
                  </FlexDiv>
                </FlexDiv>
              </FlexDiv>
              <FlexDiv fd="column" p="8px 20px">
                <div style={{ marginBottom: "16px" }}>신부측 혼주</div>
                <FlexDiv fd="column" p="8px 0">
                  <span>아버지 아무개</span>
                  <FlexDiv jc="center" p={8}>
                    <PhoneIcon />
                    <MailIcon />
                  </FlexDiv>
                  <span>어머니 아무개</span>
                  <FlexDiv jc="center" p={8}>
                    <PhoneIcon />
                    <MailIcon />
                  </FlexDiv>
                </FlexDiv>
              </FlexDiv>
            </FlexDiv>
          </CallSection>
          <FlexDiv wFull>
            <img src="/images/path.jpg" width="100%" />
          </FlexDiv>
          <FlexDiv p={8} style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
            {`
DEAR HOTEL 그랜드홀
서울 강남구 압구정로 120
02-0445-6402
버스 / 지하철
버스 - 지선 7017, 7018 / 간선 5025, 5028, 5029, 2030 신사역 하차
지하철 -  7호선 학동역 하차
자가용 / 주차안내
자가용 - 학동역 8번 출구에서 100M 직진
주차 - 7호선 학동역 8번 출구에서 을지병원 방향으로 100M (2시간 무료 주차)
피로연안내
지상 2층 뷔페 (300석)
신랑에게 마음전하실 곳
000-00-000000 (00은행) 이준서
신부에게 마음전하실 곳
000-00-000000 (00은행) 김은재
`}
          </FlexDiv>
          <FlexDiv
            m="24px 0 0 0"
            wFull
            style={{ height: "200px", backgroundColor: "grey" }}
          >
            지도영역
          </FlexDiv>
          <FlexDiv wFull>
            <img src="/images/photo.jpg" width="100%" />
          </FlexDiv>
          <FlexDiv wFull>
            <img src="/images/photogrid.jpg" width="100%" />
          </FlexDiv>
          <FlexDiv wFull>
            <img src="/images/video.jpg" width="100%" />
          </FlexDiv>
          <FlexDiv wFull>
            <img src="/images/cele.jpg" width="100%" />
          </FlexDiv>
        </Page>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SampleMockUp;
