import React from 'react';
import styled from '@emotion/styled';
import Image from '../../components/UIElements/Image';

const DUMMY_IMAGES = [
  {
    id: 0,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 1,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 2,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 3,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 4,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 5,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 6,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 7,
    src: '/couple.jpg',
    alt: 'couple',
  },
  {
    id: 8,
    src: '/couple.jpg',
    alt: 'couple',
  },
];

const Container = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
`;

const Gallery = ({ content, themeId }) => {
  return (
    <section className='gallery'>
      <h1 className={`section-title--${themeId}`}>Gallery</h1>
      <div className='gallery__images--grid'>
        {DUMMY_IMAGES.map((image) => {
          return (
            <Image
              key={image.id}
              id={image.id}
              src={image.src}
              alt='couple'
              totalCount={9}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
