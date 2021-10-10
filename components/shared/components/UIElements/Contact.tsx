import React from 'react';
import { Phone } from 'react-feather';

const addHiphen = (num) => {
  const numArray = num.split('');
  numArray.splice(7, 0, '-');
  numArray.splice(3, 0, '-');

  const widthHipen = numArray.join('');
  // console.log(widthHipen);
  return widthHipen;
};

const Contact = ({ content, themeId }) => {
  console.log('contact: ', content);

  return (
    <section
      id='contact'
      className={`contact icon--${themeId}  bg-contact--${themeId}`}
    >
      <div id='groom-contact' className='flex items-center justify-between'>
        <div className='flex items-center'>
          {/* <img className="w-6 mr-8" src="/groom.png" alt="groom" /> */}
          <span className={`text-primary--${themeId}`}>신랑</span>
          {/* <span className={`text-primary-bold--${themeId}`}>신랑이름</span> */}
          {/* 신랑, 신부 이름 서버에서 안 받음 */}
        </div>
        <div className={`flex items-center  color-primary--${themeId}`}>
          <a
            className={`mr-5`}
            href={`tel://${addHiphen(content.groomContact)}`}
          >
            <Phone className='fill-current' />
          </a>
          <a href={`sms://${addHiphen(content.groomContact)}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
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
          <span className={`text-primary--${themeId}`}>신부</span>
        </div>
        <div className={`flex items-center color-primary--${themeId}`}>
          <a
            className={`mr-5 `}
            href={`tel://${addHiphen(content.brideContact)}`}
          >
            <Phone className='fill-current' />
          </a>
          <a href={`sms://${addHiphen(content.brideContact)}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
          </a>
        </div>
      </div>
      {/* 혼주 정보 */}
      <table className='mt-6 w-full'>
        <thead className='leading-loose'>
          <tr className={`text-primary--${themeId}`}>
            <th className='text-left pl-4 font-normal'>신랑 측 혼주</th>
            <th className='text-right pr-4 font-normal'>신부 측 혼주</th>
          </tr>
        </thead>
        <tbody className={`text-primary--${themeId}`}>
          <tr>
            <td>
              <div className='flex'>
                <span className={`text-primary--${themeId} mr-5`}>아버지</span>
                <span className={`mr-2 text-primary-bold--${themeId}`}>
                  {content.groomFatherName}
                </span>
              </div>
              <div
                className={`flex items-center pl-4 mt-4 color-primary--${themeId}`}
              >
                <a
                  className='mr-4'
                  href={`tel://${addHiphen(content.groomFatherContact)}`}
                >
                  <Phone className='fill-current' />
                </a>
                <a href={`sms://${addHiphen(content.groomFatherContact)}`}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </a>
              </div>
            </td>
            <td>
              <div className='flex justify-end'>
                <span className={`text-primary--${themeId} mr-5`}>아버지</span>
                <span className={`mr-2 text-primary-bold--${themeId}`}>
                  {content.brideFatherName}
                </span>
              </div>
              <div
                className={`flex items-center justify-end mr-5 mt-4  color-primary--${themeId}`}
              >
                <a
                  className='mr-4'
                  href={`tel://${addHiphen(content.brideFatherContact)}`}
                >
                  <Phone className='fill-current' />
                </a>
                <a href={`sms://${addHiphen(content.brideFatherContact)}`}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='flex mt-4'>
                <span className={`text-primary--${themeId} mr-5`}>어머니</span>
                <span className={`mr-2 text-primary-bold--${themeId}`}>
                  {content.groomMotherName}
                </span>
              </div>
              <div
                className={`flex items-center ml-5 mt-4  color-primary--${themeId}`}
              >
                <a
                  className='mr-4'
                  href={`tel://${addHiphen(content.groomMotherContact)}`}
                >
                  <Phone className='fill-current' />
                </a>
                <a href={`sms://${addHiphen(content.groomMotherContact)}`}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                </a>
              </div>
            </td>
            <td>
              <div className='flex justify-end mt-4'>
                <span className={`text-primary--${themeId} mr-5`}>어머니</span>
                <span className={`mr-2 text-primary-bold--${themeId}`}>
                  {content.brideMotherName}
                </span>
              </div>
              <div
                className={`flex items-center justify-end  mr-5 mt-4  color-primary--${themeId}`}
              >
                <a
                  className='mr-4'
                  href={`tel://${addHiphen(content.brideMotherContact)}`}
                >
                  <Phone className='fill-current' />
                </a>
                <a href={`sms://${addHiphen(content.brideMotherContact)}`}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-7 w-7'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
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
