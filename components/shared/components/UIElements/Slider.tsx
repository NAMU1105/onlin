import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../UIElements/Image';

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

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const SliderImage = (props) => {
  return (
    <div id='slider' className='w-screen h-screen flex flex-col'>
      {/* <h2 className="z-50 text-white">Single Item</h2> */}
      <button
        className='w-10 m-5 z-50 text-white fixed right-0'
        onClick={props.onClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <Slider
        {...settings}
        id='slider'
        className='w-1/4 fixed z-50 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'
      >
        {props.images.map((image, idx) => {
          return (
            <Image
              key={`slider_${image}_${idx}`}
              id={`${image}_${idx}`}
              src={image}
              images={props.images}
              alt='couple'
              totalCount={9}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderImage;
