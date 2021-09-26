import React from 'react';
import * as Icon from 'react-feather';

const addHiphen = (num) => {
  const numArray = num.split('');
  numArray.splice(7, 0, '-');
  numArray.splice(3, 0, '-');

  const widthHipen = numArray.join('');
  // console.log(widthHipen);
  return widthHipen;
};

const Contact = ({ content, themeId }) => {
  // console.log('contact: ', content);

  return (
    <section
      id='contact'
      className={`contact icon--${themeId}  bg-contact--${themeId}`}
    >
      <div id='groom-contact' className='flex items-center justify-between'>
        <div className='flex items-center'>
          {/* <img className="w-6 mr-8" src="/groom.png" alt="groom" /> */}
          <span className={`text-primary--${themeId}`}>신랑</span>
        </div>
        <div className='flex items-center'>
          <a className='mr-5' href={`tel://${addHiphen(content.groomContact)}`}>
            <Icon.Phone />
          </a>
          <a href={`sms://${addHiphen(content.groomContact)}`}>
            <Icon.Mail />
          </a>
        </div>
      </div>

      {/* 신부 */}
      <div
        id='bride-contact'
        className='flex items-center justify-between mt-4'
      >
        <div className='flex items-center'>
          {/* <img className="w-6 mr-8" src="/bride.png" alt="groom" /> */}
          <span className='text-primary--theme1'>신부</span>
        </div>
        <div className='flex items-center'>
          <a className='mr-5' href={`tel://${addHiphen(content.brideContact)}`}>
            <Icon.Phone />
          </a>
          <a href={`sms://${addHiphen(content.brideContact)}`}>
            <Icon.Mail />
          </a>
        </div>
      </div>
      {/* 혼주 정보 */}
      <table className='mt-4 w-full'>
        <thead className='leading-loose	'>
          <tr className='text-primary--theme1'>
            <th>신랑 측 혼주</th>
            <th>신부 측 혼주</th>
          </tr>
        </thead>
        <tbody className=''>
          <tr>
            <td>
              <div className='flex justify-between'>
                <span className='text-primary--theme1'>아버지</span>
                <span className='font-base font-medium mr-2'>
                  {content.groomFatherName}
                </span>
              </div>
              <div className='flex items-center justify-center'>
                <a
                  className='mr-4'
                  href={`tel://${addHiphen(content.groomFatherContact)}`}
                >
                  <Icon.Phone />
                </a>
                <a href={`sms://${addHiphen(content.groomFatherContact)}`}>
                  <Icon.Mail />
                </a>
              </div>
            </td>
            <td>
              <span className='text-primary--theme1'>아버지</span>
              <span className='font-bold mr-2'>{content.brideFatherName}</span>
              <div className='flex items-center justify-center'>
                <a
                  className='mr-4'
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
            <td>
              <span className='text-primary--theme1'>어머니</span>
              <span className='font-bold mr-2'>{content.groomMotherName}</span>
              <div className='flex items-center justify-center'>
                <a
                  className='mr-4'
                  href={`tel://${addHiphen(content.groomMotherContact)}`}
                >
                  <Icon.Phone />
                </a>
                <a href={`sms://${addHiphen(content.groomMotherContact)}`}>
                  <Icon.Mail />
                </a>
              </div>
            </td>
            <td>
              <span className='text-primary--theme1'>어머니</span>
              <span className='font-bold mr-2'>{content.brideMotherName}</span>
              <div className='flex items-center justify-center'>
                <a
                  className='mr-4'
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
