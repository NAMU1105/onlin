import React from "react";
// import { css, jsx } from '@emotion/core'
import styled from "@emotion/styled";

// TODO: 나중에 멘트는 모두 props로 넘겨서 받기
const invitation = "초대합니다.";
const invitationParagraph =
  "모두가 어려운 시기를 보내는 요즘, 많은 고민 끝에 서로에 대한 믿음으로 결혼식을 올리고자 합니다. 결혼식 참석에 대한 부담은 갖지 마시고 저희 두 사람의 앞날을 축복해 주시고 격려해 주시는 마음으로 참석해주시면 감사하겠습니다.";

const Container = styled.section`
  margin: 3rem 0;
  font-family: "KoPub Batang", serif;
  font-size: 1.7rem;
  font-weight: 500;
  color: #4e4e4e;
  line-height: 2;

  & h3 {
    color: #d88e2d;
    font-size: 2.5rem;
  }
`;

const Invitation = (props) => (
  <Container className="invitation">
    <h3>{invitation}</h3>
    <p>{invitationParagraph}</p>
  </Container>
);

export default Invitation;
