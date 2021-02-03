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
} from "./style";

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
          <CallSection>
            <div> 신랑에게 축하인사</div>
            <div> 신부에게 축하인사</div>
            <div>혼주에게 전화하기</div>
            <div>
              <div>신랑측 혼주</div>
              <div>신부측 혼주</div>
            </div>
          </CallSection>
        </Page>
      </ContentWrapper>
    </Wrapper>
  );
};

export default SampleMockUp;
