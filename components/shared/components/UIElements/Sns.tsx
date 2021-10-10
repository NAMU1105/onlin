import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

import * as Icon from 'react-feather';

import FacebookIcon from '../../../../public/icons/f_logo_RGB-Blue_250 1.svg';
import IGIcon from '../../../../public/icons/Instagram_Glyph_Gradient_RGB.svg';
import KakaoIcon from '../../../../public/icons/kakao.svg';
import LinkIcon from '../../../../public/icons/link-2.svg';

declare global {
  interface Window {
    Kakao: any;
  }
}
const Sns = ({ content, themeId }) => {
  const [currentLocation, setCurrentLocation] = useState<string>('');
  useEffect(() => {
    if (!window) return;
    setCurrentLocation(window.location.href);
  }, []);

  function shareKakao() {
    // window.Kakao.Link.sendScrap({
    //   requestUrl: currentLocation,
    // });

    window.Kakao.init('d00c50badc5a2685a0229ce581e51379');
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '',
        description: '',
        imageUrl: '',
        link: {
          mobileWebUrl: currentLocation,
          webUrl: currentLocation,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '게시글확인',
          link: {
            mobileWebUrl: currentLocation,
            webUrl: currentLocation,
          },
        },
      ],
      serverCallbackArgs: `{"current": "${currentLocation}"}`,
    });
  }

  const share = (p: 'facebook' | 'kakao' | 'sms') => {
    if (p === 'facebook') {
      // 개발환경에서는 확인 안 됨
      window.open(`http://www.facebook.com/sharer.php?u=${currentLocation}`);
      return;
    }

    if (p === 'kakao') {
      shareKakao();
      return;
    }

    if (p === 'sms' && navigator.share) {
      navigator
        .share({
          title: 'WebShare API Demo',
          url: currentLocation,
        })
        .then(() => {
          // console.log('Thanks for sharing!');
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
          <li
            className='sns__list__item sns__list__item--kakao'
            onClick={() => share('kakao')}
          >
            <KakaoIcon className='absolute w-full top-1/3' />
          </li>
        )}
        {content.snsList.includes('sms') && (
          <li
            className='sns__list__item sns__list__item--link'
            onClick={() => share('sms')}
          >
            <LinkIcon className='absolute w-full top-3' />
          </li>
        )}
      </ul>
    </section>
  );
};

export default Sns;
