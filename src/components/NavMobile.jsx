import React from 'react';
import { Link } from 'react-router-dom';

const NavMobile = () => {
  return (
    <div className='nav-mobile absolute top-[75%] left-10 p-4 glass bg-white/80'>
      <ul className='flex-center flex-col gap-4 self-center'>
        <li className='cursor-pointer p-2 rounded-lg font-medium hover:bg-white/40 w-full text-center'>
          <Link to={'/'}>اوقات الصلاه</Link>
        </li>
        <li className='cursor-pointer p-2 rounded-lg font-medium hover:bg-white/40 w-full text-center'>
          <Link>التقويم الاسلامي</Link>
        </li>
        <li className='cursor-pointer p-2 rounded-lg font-medium hover:bg-white/40 w-full text-center'>
          <Link>استخاره القرأن</Link>
        </li>
        <li className='cursor-pointer p-2 rounded-lg font-medium hover:bg-white/40 w-full text-center'>
          <Link>خداماتنا</Link>
        </li>
        <li className='cursor-pointer p-2 rounded-lg font-medium hover:bg-white/40 w-full text-center'>
          <Link to={'/about'}>من نحن</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
