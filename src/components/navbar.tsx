import { Button } from './ui/button';

const navbar = () => {
  return (
    <div className='w-full flex items-center justify-between p-6 max-w-5xl'>
      <ul className='flex gap-6 text-foreground'>
        <li>About</li>
        <li>Contacts</li>
        <li>Blog</li>
      </ul>
      <Button className='hover:bg-green-700 py-6 px-8 rounded-2xl'>
        Sign In
      </Button>
    </div>
  );
};

export default navbar;
