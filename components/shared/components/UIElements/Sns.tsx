import React from 'react';
// import Image from 'next/image';

import * as Icon from 'react-feather';

import FacebookIcon from '../../../../public/icons/f_logo_RGB-Blue_250 1.svg';
import IGIcon from '../../../../public/icons/Instagram_Glyph_Gradient_RGB.svg';
import KakaoIcon from '../../../../public/icons/kakao.svg';
import LinkIcon from '../../../../public/icons/link-2.svg';

//  TODO: 공유하기 기능 추가
const Sns = ({ content }) => {
  // console.log('sns: ', content);

  return (
    <section className='sns '>
      <h1 className='sr-only'>공유하기</h1>
      <ul className='sns__list'>
        {/* <Image
          src={'/icons/f_logo_RGB-Blue_250 1.svg'}
          alt='facebook icon'
          width='48'
          height='48'
        /> */}
        <li className='sns__list__item'>
          <FacebookIcon />
        </li>

        <li className='sns__list__item sns__list__item--ig'>
          <IGIcon className='absolute w-full top-2.5' />
        </li>
        <li className='sns__list__item sns__list__item--kakao'>
          <KakaoIcon className='absolute w-full top-1/4' />
        </li>
        <li className='sns__list__item sns__list__item--link'>
          <LinkIcon className='absolute w-full top-2.5' />
        </li>
      </ul>

      {/* <article className='grid grid-cols-4 gap-4'>
        {content.snsList.map((sns) => (
          <div key={sns}>{returnIcon(sns)}</div>
        ))}
      </article> */}
    </section>
  );
};

export default Sns;
