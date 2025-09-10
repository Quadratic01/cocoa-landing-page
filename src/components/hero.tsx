import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const hero = () => {
  return (
    <div>
      <h1 className='text-6xl font-bold mt-10 text-primary'>
        Advanced Software that <br /> belongs to all businesses
      </h1>
      <p className='mt-6 text-1xl font-medium text-muted-foreground'>
        We've put together a list of content ideas we think
        <br /> we will be relevant to your Audience.
      </p>

      <div className='mt-6 flex gap-4 justify-center items-center'>
        <Input
          className='max-w-sm'
          type='email'
          placeholder='Enter your email address'
        />
        <Button> Start 14 days free trail </Button>
      </div>
    </div>
  );
};

export default hero;
