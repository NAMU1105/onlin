import React from 'react';
// import styled from '@emotion/styled';
import Image from '../../components/UIElements/Image';

// const DUMMY_IMAGES = [
//   {
//     id: 0,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 1,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 2,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 3,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 4,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 5,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 6,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 7,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
//   {
//     id: 8,
//     src: '/couple.jpg',
//     alt: 'couple',
//   },
// ];

const Gallery = ({ content, themeId }) => {
  console.log({ content });

  return (
    <section className='gallery'>
      <h1 className={`section-title--${themeId}`}>Gallery</h1>
      <div className='gallery__images--grid'>
        {content.images.map((image, idx) => {
          return (
            <Image
              key={`${image}_${idx}`}
              id={`${image}_${idx}`}
              src={image}
              images={content.images}
              alt='couple'
              totalCount={9}
            />
            // <Image
            //   key={image.id}
            //   id={image.id}
            //   src={image.src}
            //   alt='couple'
            //   totalCount={9}
            // />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
