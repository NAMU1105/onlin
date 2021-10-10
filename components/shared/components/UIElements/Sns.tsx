import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

import * as Icon from 'react-feather';

import FacebookIcon from '../../../../public/icons/f_logo_RGB-Blue_250 1.svg';
import IGIcon from '../../../../public/icons/Instagram_Glyph_Gradient_RGB.svg';
import KakaoIcon from '../../../../public/icons/kakao.svg';
import LinkIcon from '../../../../public/icons/link-2.svg';

//  TODO: 공유하기 기능

const Sns = ({ content, themeId }) => {
  const [currentLocation, setCurrentLocation] = useState<string>('');
  useEffect(() => {
    if (!window) return;
    setCurrentLocation(window.location.href);
  }, []);

  const share = (p: 'facebook' | 'kakao' | 'sms') => {
    if (p === 'facebook') {
      window.open('http://www.facebook.com/sharer.php?u=www.naver.com');
      return;
    }

    if (navigator.share) {
      navigator
        .share({
          title: 'WebShare API Demo',
          url: currentLocation,
        })
        .then(() => {
          console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
      // shareDialog.classList.add('is-open');
    }
  };

  return (
    <section className='sns '>
      <h1 className='sr-only'>공유하기</h1>
      <ul className='sns__list'>
        {content.snsList.includes('facebook') && (
          <li className='sns__list__item' onClick={() => share('facebook')}>
            <FacebookIcon />
          </li>
        )}

        {/* {content.snsList.includes('facebook') && (
        <li className='sns__list__item sns__list__item--ig'>
          <IGIcon className='absolute w-full top-2.5' />
        </li>)} */}
        {content.snsList.includes('kakao') && (
          <li className='sns__list__item sns__list__item--kakao'>
            <KakaoIcon className='absolute w-full top-1/3' />
          </li>
        )}
        {content.snsList.includes('sms') && (
          <li className='sns__list__item sns__list__item--link'>
            <LinkIcon className='absolute w-full top-3' />
          </li>
        )}
      </ul>
    </section>
  );
};

export default Sns;
