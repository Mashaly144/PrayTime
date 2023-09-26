import React from 'react';
import { Link } from 'react-router-dom';
import { FaQuran } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='  lg:flex'>
      <ul className='flex-center flex-col gap-4'>
        <li className='cursor-pointer  text-xl font-medium  nav-link-content'>
          <Link to={'/'} className='nav-link'>
            <FaQuran className='nav-link-icon' />
            <p> اوقات الصلاه</p>
          </Link>
        </li>
        <li className='cursor-pointer text-xl font-medium  nav-link-content'>
          <Link className='nav-link'>
            <FaQuran className='nav-link-icon' />
            <p> التقويم الاسلامي</p>
          </Link>
        </li>
        <li className='cursor-pointer text-xl font-medium  nav-link-content'>
          <Link className='nav-link'>
            <FaQuran className='nav-link-icon' />
            <p> استخاره القرأن</p>
          </Link>
        </li>
        <li className='cursor-pointer text-xl font-medium  nav-link-content'>
          <Link className='nav-link'>
            <FaQuran className='nav-link-icon' />
            <p> خداماتنا</p>
          </Link>
        </li>
        <li className='cursor-pointer text-xl font-medium  nav-link-content'>
          <Link to={'/about'} className='nav-link'>
            <FaQuran className='nav-link-icon' />
            <p> من نحن</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
