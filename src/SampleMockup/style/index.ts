import styled from "@emotion/styled";

export const Wrapper = styled.article`
  width: 100vw;
  max-width: 375px;
  max-height: 667px;
  height: 100vh;
  background: url("/images/m_wrap.png") no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Page = styled.article`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
export const ContentWrapper = styled.main`
  position: fixed;
  top: calc(667px * 0.12);
  left: calc(375px * 0.05);
  width: calc(375px * 0.75);
  height: calc(667px * 0.752);
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
  padding: 120px 20px 20px 20px;
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
  width: 100%;
`;

export const ContactBanner = styled.div`
  color: white;
  text-align: center;
  background-color: #cb724c;
  padding: 8px;
  margin: 24px 0 16px 0;
  font-size: 16px;
  font-weight: bold;
`;

export const ContactRow = styled.span`
  display: flex;
  justify-content: center;
  font-size: 12px;
  padding: 4px;

  span {
    margin-right: 8px;
  }
`;

export const PhoneIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 4px;
  background: grey;
  margin: 0 4px;
`;

export const MailIcon = styled(PhoneIcon)``;
