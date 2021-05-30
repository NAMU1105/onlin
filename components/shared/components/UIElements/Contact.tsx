import React from "react";
import styled from "@emotion/styled";
import * as Icon from "react-feather";

// TODO: 이름도 프롭스로 전달받아서 뿌리기
// TODO: 번호 010-000 이런식으로 하이픈 넣어야하는지 확인하기

const Divider = styled.span`
  margin: 0 0.5rem;
  border-left: 1px solid #9d858b;
  font-size: 0.7em;
`;

const HeadingDivider = styled.h3`
  background-color: #9d858b;
  color: #fff;
  padding: 10px;
`;

const Contact = ({ content }) => {
  console.log("contact: ", content);

  return (
    <section className="contact intro-y">
      <div className="flex items-center ">
        <img className="w-6" src="/groom.png" alt="groom" />
        <span>신랑에게 축하인사</span>
        <Divider></Divider>
        <a href={`tel://${content.groomContact}`}>
          {/* <a href="tel://010-1234-4567"> */}
          <Icon.Phone />
        </a>
        <a href={`sms://${content.groomContact}`}>
          <Icon.MessageSquare />
        </a>
        <a href="">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="flex items-center ">
        <img className="w-6" src="/bride.png" alt="groom" />
        <span>신부에게 축하인사</span>
        <Divider></Divider>
        <a href={`tel://${content.brideContact}`}>
          <Icon.Phone />
        </a>
        <a href={`sms://${content.brideContact}`}>
          <Icon.MessageSquare />
        </a>
      </div>
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
            <td>
              아버지 이인수
              <a href={`tel://${content.groomFatherContact}`}></a>
            </td>
            <td>
              아버지 김희승
              <a href={`tel://${content.brideFatherContact}`}></a>
            </td>
          </tr>
          <tr>
            <td>
              어머니 이영희
              <a href={`tel://${content.groomMotherContact}`}></a>
            </td>
            <td>
              어머니 김수연
              <a href={`tel://${content.brideMotherContact}`}></a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Contact;
