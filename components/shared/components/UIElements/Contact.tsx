import React from "react";
import styled from "@emotion/styled";
import * as Icon from "react-feather";

// TODO: 이름도 프롭스로 전달받아서 뿌리기
// TODO: 번호 010-000 이런식으로 하이픈 넣어야하는지 확인하기

const Contact = ({ content }) => {
  console.log("contact: ", content);

  const addHiphen = (num) => {
    const numArray = num.split("");
    numArray.splice(7, 0, "-");
    numArray.splice(3, 0, "-");

    const widthHipen = numArray.join("");
    // console.log(widthHipen);

    return widthHipen;
  };

  return (
    <section
      id="contact"
      className="contact intro-y w-full mt-12 py-12 bg-contact px-8"
    >
      <div id="groom-contact" className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="w-6 mr-8" src="/groom.png" alt="groom" />
          <span>신랑에게 축하인사</span>
        </div>
        <div className="flex items-center">
          <a className="mr-8" href={`tel://${addHiphen(content.groomContact)}`}>
            <Icon.Phone />
          </a>
          <a href={`sms://${addHiphen(content.groomContact)}`}>
            <Icon.Mail />
          </a>
        </div>
      </div>

      {/* 신부 */}
      <div
        id="bride-contact"
        className="flex items-center justify-between mt-4"
      >
        <div className="flex items-center">
          <img className="w-6 mr-8" src="/bride.png" alt="groom" />
          <span>신부에게 축하인사</span>
        </div>
        <div className="flex items-center">
          <a className="mr-8" href={`tel://${addHiphen(content.brideContact)}`}>
            <Icon.Phone />
          </a>
          <a href={`sms://${addHiphen(content.brideContact)}`}>
            <Icon.Mail />
          </a>
        </div>
      </div>
      {/* 혼주 정보 */}
      <table className="mt-4 w-full">
        <thead className="leading-loose	">
          <tr>
            <th>신랑측 혼주</th>
            <th>신부측 혼주</th>
          </tr>
        </thead>
        <tbody className="">
          <tr>
            <td className="text-center">
              아버지
              <span className="font-bold mr-2">{content.groomFatherName}</span>
              <div className="flex items-center justify-center">
                <a
                  className="mr-4"
                  href={`tel://${addHiphen(content.groomFatherContact)}`}
                >
                  <Icon.Phone />
                </a>
                <a href={`sms://${addHiphen(content.groomFatherContact)}`}>
                  <Icon.Mail />
                </a>
              </div>
            </td>
            <td className="text-center">
              아버지
              <span className="font-bold mr-2">{content.brideFatherName}</span>
              <div className="flex items-center justify-center">
                <a
                  className="mr-4"
                  href={`tel://${addHiphen(content.brideFatherContact)}`}
                >
                  <Icon.Phone />
                </a>
                <a href={`sms://${addHiphen(content.brideFatherContact)}`}>
                  <Icon.Mail />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">
              어머니
              <span className="font-bold mr-2">{content.groomMotherName}</span>
              <div className="flex items-center justify-center">
                <a
                  className="mr-4"
                  href={`tel://${addHiphen(content.groomMotherContact)}`}
                >
                  <Icon.Phone />
                </a>
                <a href={`sms://${addHiphen(content.groomMotherContact)}`}>
                  <Icon.Mail />
                </a>
              </div>
            </td>
            <td className="text-center">
              어머니
              <span className="font-bold mr-2">{content.brideMotherName}</span>
              <div className="flex items-center justify-center">
                <a
                  className="mr-4"
                  href={`tel://${addHiphen(content.brideMotherContact)}`}
                >
                  <Icon.Phone />
                </a>
                <a href={`sms://${addHiphen(content.brideMotherContact)}`}>
                  <Icon.Mail />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Contact;
