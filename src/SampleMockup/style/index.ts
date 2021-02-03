import styled from "@emotion/styled";

export const Wrapper = styled.article`
  width: 100vw;
  height: 100vh;
  background: url("/images/m_wrap.png") no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Page = styled.article`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
export const ContentWrapper = styled.main`
  position: fixed;
  top: 12vh;
  left: 5vw;
  width: 75vw;
  height: 75.2vh;
  overflow: hidden;
  //background: grey;
`;

export const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35%;
  width: 100%;
  height: 100%;
  background: url("/images/intro.jpg");
  background-size: cover;
`;

export const IntroName = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 1;
  color: #90583f;
  margin-bottom: 30px;
`;

export const IntroInfo = styled.span`
  white-space: pre-wrap;
  display: flex;
  font-weight: bold;
  text-align: center;
  margin-top: auto;
  //font-family: sans-serif;
  font-size: 16px;
  color: #6f432f;
  padding-bottom: 24px;
`;

export const MessageSection = styled.section`
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 120px 20px 60px 20px;
  justify-content: center;
  background: url("/images/messege.jpg");
  background-size: cover;
  white-space: pre;
`;

export const CallSection = styled.section`
  display: flex;
  text-align: center;
  font-size: 14px;
  justify-content: center;
`;
