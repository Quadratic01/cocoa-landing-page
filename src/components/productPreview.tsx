import chart from '../assets/chart.png';
import chart_2 from '../assets/chart_2.png';

const productPreview = () => {
  return (
    <div className='mt-[250px] py-20 h-max w-full relative flex flex-col items-center '>
      <img
        className='max-w-[800px] w-full mx-auto absolute bottom-10 -translate-y-[100%]'
        src={chart}
        alt='chart'
      />
      <img
        className='max-w-[800px] w-full mx-auto absolute'
        src={chart_2}
        alt='chart 2'
      />

      <div className='bg-primary max-w-full w-full px-30 flex flex-col text-white pt-64'>
        <div className='flex gap-4 items-end text-left max-w-600px w-full'>
          {' '}
          <h1 className='text-4xl text-left font-bold'>
            Build
            <br />
            Excusively
          </h1>
          <p className='mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus id
            deserunt aperiam aspernatur sequi omnis, non necessitatibus, neque
            repellendus at vitae. Repudiandae laudantium nihil inventore hic
            deserunt, earum soluta dolore!
          </p>{' '}
        </div>
        <div className='text-white  mt-16 mb-10 flex w-full gap-x-6 md:gap-x-20'>
          <h3>3OO+</h3>
          <p>Products</p>

          <h3>85</h3>
          <p>Web Templates</p>

          <h3>215</h3>
          <p>Mobile Template</p>
        </div>
      </div>
    </div>
  );
};

export default productPreview;
