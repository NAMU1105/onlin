import React from 'react';
// import styled from '@emotion/styled';
// import { css, jsx } from '@emotion/core'
// import Image from "next/image";
// import Deco from "../../../../public/mainSectionDeco.svg"

const Main = ({ content, themeId }) => {
  const date = new Date(content.date).toLocaleTimeString('en', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  switch (themeId) {
    case 'template1':
      return (
        <section className='main'>
          <div className='relative'>
            <img
              // src='/mainImage.png'
              src={content.image}
              alt='Main wedding image'
              className={`main__image--${themeId}`}
            />
            <div className={`main__deco--${themeId} invitation`}>
              {mainDeco}
              <div className={`main__title__names--${themeId}`}>
                <span className='text-big mr-2' id='groom'>
                  {content.groom}
                </span>
                <span className='text-big' id='bride'>
                  {content.bride}
                </span>
              </div>
              <span className='mr-4'>{date}</span>
              <span className='mr-4'>{content.place.label}</span>
            </div>
          </div>
        </section>
      );
    case 'template2':
      return (
        <section className='main--template2'>
          <div className='main__text_wrapper'>
            <div className='main__title__names--template2'>
              <span className='' id='groom'>
                {content.groom}
              </span>
              <span className='' id='bride'>
                {content.bride}
              </span>
            </div>
            <span className='main__date--template--2'>{date}</span>
          </div>

          <img
            src='/mainImage.png'
            // src={content.image}
            alt='Main wedding image'
            className='main__image--template2'
          />
          <span className='main__place'>{content.place.label}</span>
        </section>
      );

    // template 3
    default:
      return (
        <section className='main'>
          <div className='relative'>
            <img
              src='/mainImage.png'
              alt='Main wedding image'
              className={`main__image--${themeId}`}
            />
            <div className='main__text-wrapper--3'>
              {mainDeco}
              <div className=''>
                <span className='text-big mr-2' id='groom'>
                  {content.groom}
                </span>
                <span className='text-big' id='bride'>
                  {content.bride}
                </span>
              </div>
              <span className='mr-4'>{date}</span>
              <span className='mr-4'>{content.place.label}</span>
            </div>
          </div>
        </section>
      );
  }
};

const mainDeco = (
  <svg
    width='32'
    height='30'
    viewBox='0 0 32 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g filter='url(#filter0_d)'>
      <path
        d='M7.00004 16.266L9.7203 14.165C9.7203 14.165 14.0611 14.596 15.3345 23C15.3923 23 13.3087 16.1583 7.00004 16.266Z'
        fill='white'
      />
      <path
        d='M25 16.266L22.2797 14.165C22.2797 14.165 17.9389 14.596 16.6656 23C16.6656 23 18.7492 16.1583 25 16.266Z'
        fill='white'
      />
      <path
        d='M16.029 7L14.1769 10.5555L16.029 18.9595L17.8232 10.5555L16.029 7Z'
        fill='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d'
        x='6.10352e-05'
        y='0'
        width='32'
        height='30'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset />
        <feGaussianBlur stdDeviation='3.5' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default Main;
