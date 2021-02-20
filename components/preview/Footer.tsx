import React from "react";
import styled from "@emotion/styled";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Container = styled.div`
  display: flex;
`;

const Footer = (props) => {
  //   function sendLink() {
  //     window.Kakao.Link.sendDefault({
  //       objectType: "feed",
  //       content: {
  //         title: "딸기 치즈 케익",
  //         description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
  //         imageUrl:
  //           "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
  //         link: {
  //           mobileWebUrl: "https://developers.kakao.com",
  //           webUrl: "https://developers.kakao.com",
  //         },
  //       },
  //       social: {
  //         likeCount: 286,
  //         commentCount: 45,
  //         sharedCount: 845,
  //       },
  //       buttons: [
  //         {
  //           title: "웹으로 보기",
  //           link: {
  //             mobileWebUrl: "https://developers.kakao.com",
  //             webUrl: "https://developers.kakao.com",
  //           },
  //         },
  //         {
  //           title: "앱으로 보기",
  //           link: {
  //             mobileWebUrl: "https://developers.kakao.com",
  //             webUrl: "https://developers.kakao.com",
  //           },
  //         },
  //       ],
  //     });
  //   }

  return (
    <footer>
      <h1></h1>
      <Container>
        {/* <a href=""> */}
        <img src="/kakaoBtn.gif" alt="kakao share" />
        {/* </a> */}
        <img src="/facebookBtn.gif" alt="facebook share" />
      </Container>
      <h1>Olin</h1>
    </footer>
  );
};
export default Footer;
