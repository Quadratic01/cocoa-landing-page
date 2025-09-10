import React from 'react';
import { Button } from './ui/button';

const navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-6'>
      <ul className='flex gap-6 text-foreground'>
        <li>About</li>
        <li>Contacts</li>
        <li>Blog</li>
      </ul>
      <Button className='hover:bg-green-700'>Sign In</Button>
    </div>
  );
};

export default navbar;
