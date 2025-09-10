import React from 'react';
import chart from '../assets/chart.png';

const productPreview = () => {
  return (
    <div className='h-max w-full relative flex flex-col items-center '>
      <img
        className='max-w-[800px] w-full mx-auto absolute bottom-10 -translate-y-[100%]'
        src={chart}
        alt='chart'
      />
      <div className='bg-primary max-w-full w-full justify-between text-white pt-64'>
        <h1 className='text-3xl font-bold mb-4'>
          Build <br /> Excusively
        </h1>
        <p className='mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default productPreview;
