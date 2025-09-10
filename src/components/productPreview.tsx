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

        <div className=' text-4xl flex justify-center mt-10 max-w-600px w-full'>
          <div className='mr-20'>
            <h1 className='font-semibold text-3xl mb-2'>3OO+</h1>
            <p>Products</p>{' '}
          </div>
          <div className='mr-20'>
            <h1 className='font-semibold text-3xl mb-2'>85</h1>
            <p>Web Templates</p>{' '}
          </div>

          <div className='mr-20'>
            <h1 className='font-semibold text-3xl mb-2'>215</h1>
            <p>Mobile Templates</p>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPreview;
