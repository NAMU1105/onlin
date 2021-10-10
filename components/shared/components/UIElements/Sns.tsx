import React, { useEffect, useState } from 'react';
import Toast from './ToastMessage';

// import * as Icon from 'react-feather';

import FacebookIcon from '../../../../public/icons/f_logo_RGB-Blue_250 1.svg';
// import IGIcon from '../../../../public/icons/Instagram_Glyph_Gradient_RGB.svg';
import KakaoIcon from '../../../../public/icons/kakao.svg';
import LinkIcon from '../../../../public/icons/link-2.svg';

declare global {
  interface Window {
    Kakao: any;
    fbAsyncInit: any;
    FB: any;
  }
}
const Sns = ({ content, themeId, extraData }) => {
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!window) return;
    setCurrentLocation(window.location.href);

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');

    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '450935912707362',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v7.0', //ex> v7.0
      });
    };
  }, []);

  function shareFacebook() {
    if (!window) return;

    window.FB.ui(
      {
        method: 'share',
        href: currentLocation,
      },
      function (data) {
        // Log.info('App Requests Response', data);
      }
    );
    // }
    // window.FB.ui(
    //   {
    //     method: 'share',
    //     href: currentLocation,
    //   },
    //   function (response) {
    //     if (response && !response.error_code) {
    //       alert('공유 완료');
    //     } else {
    //       alert('공유 실패');
    //     }
    //   }
    // );
  }

  // 복사하기 기능
  const copy = () => {
    const tempElem = document.createElement('textarea');
    tempElem.value = currentLocation;

    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);

    // show toast
    setIsToastOpen(true);

    setTimeout(() => {
      setIsToastOpen(false);
    }, 1100);
  };

  const shareKakao = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    // web으로 보는 경우 링크 복사를 해준다.
    if (!isMobile) {
      copy();
      return;
    }

    window.Kakao.init(process.env.REACT_APP_KAKAOMAP_API_KEY);

    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '저희 결혼합니다.',
        description: extraData.title,
        imageUrl: extraData.image,
        link: {
          mobileWebUrl: currentLocation,
          webUrl: currentLocation,
        },
      },

      buttons: [
        {
          title: '청첩장 보러가기',
          link: {
            mobileWebUrl: currentLocation,
            webUrl: currentLocation,
          },
        },
      ],
      serverCallbackArgs: `{"current": "${currentLocation}"}`,
    });
  };

  const useShareApi = () => {
    if (navigator.share) {
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

  const share = (p: 'facebook' | 'kakao' | 'sms') => {
    if (p === 'facebook') {
      // 개발환경에서는 확인 안 됨
      window.open(`http://www.facebook.com/sharer.php?u=${currentLocation}`);
      return;
    }

    // if (p === 'kakao') {
    //   shareKakao();
    //   return;
    // }

    // if (p === 'sms' && navigator.share) {
    //   navigator
    //     .share({
    //       title: 'WebShare API Demo',
    //       url: currentLocation,
    //     })
    //     .then(() => {
    //       // console.log('Thanks for sharing!');
    //     })
    //     .catch(console.error);
    // } else {
    //   // shareDialog.classList.add('is-open');
    // }
  };

  return (
    <>
      {isToastOpen && <Toast isOpen={isToastOpen} content='복사완료!' />}

      <section className='sns '>
        <h1 className='sr-only'>공유하기</h1>
        <ul className='sns__list'>
          {content.snsList.includes('facebook') && (
            <li className='sns__list__item' onClick={shareFacebook}>
              {/* <li className='sns__list__item' onClick={() => share('facebook')}> */}
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
              onClick={shareKakao}
            >
              <KakaoIcon
                className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
                onClick={shareKakao}
              />
            </li>
          )}
          {content.snsList.includes('sms') && (
            <li
              className='sns__list__item sns__list__item--link'
              onClick={useShareApi}
            >
              <LinkIcon
                className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
                onClick={useShareApi}
              />
            </li>
          )}
        </ul>
      </section>
    </>
  );
};

export default Sns;
