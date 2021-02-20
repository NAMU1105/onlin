import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;

  & > img {
    width: 1.5rem;
  }
`;

const Divider = styled.span`
  border-left: 1px solid #ddd;
  font-size: 0.7em;
`;

const HeadingDivider = styled.h3`
  background-color: #65534e;
  color: #ffffff;
  padding: 10px;
`;

const Contact = (props) => (
  <section className="contact">
    <Container>
      <img src="/groom.png" alt="groom" />
      <span>신랑에게 축하인사</span>
      <a href="tel://010-1234-4567">
        <i className="fas fa-phone-alt"></i>
      </a>
      <Divider></Divider>
      <a href="">
        <i className="fas fa-envelope"></i>
      </a>
    </Container>
    <Container>
      <img src="/bride.png" alt="groom" />
      <span>신부에게 축하인사</span>
      <a href="tel://010-1234-4567">
        <i className="fas fa-phone-alt"></i>
      </a>
      <Divider></Divider>
      <a href="">
        <i className="fas fa-envelope"></i>
      </a>
    </Container>
    <HeadingDivider>혼주에게 전화하기</HeadingDivider>
    {/* <a href="tel://010-1234-4567"></a> */}
    <table>
      <thead>
        <tr>
          <th>신랑측 혼주</th>
          <th>신부측 혼주</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>아버지 이인수</td>
          <td>아버지 김희승</td>
        </tr>
        <tr>
          <td>어머니 이영희</td>
          <td>어머니 김수연</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Contact;
