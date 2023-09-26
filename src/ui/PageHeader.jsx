import React, { useState } from 'react';
import { BiCurrentLocation, BiSearch, BiSolidFoodMenu } from 'react-icons/bi';
import { MdMenuBook } from 'react-icons/md';
import NavMobile from '../components/NavMobile';
const PageHeader = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <section className='container mx-auto py-5 relative'>
      <nav className='flex justify-between items-center'>
        <div onClick={() => setNavMobile((prev) => !prev)}>
          <h1 className='text-xl font-semibold text-white hidden lg:flex'>
            Prayer Calender
          </h1>
          {navMobile ? (
            <MdMenuBook className='nav-icon lg:hidden text-4xl text-white' />
          ) : (
            <BiSolidFoodMenu className='nav-icon lg:hidden text-4xl text-white' />
          )}

          {navMobile && <NavMobile />}
        </div>
        <form className='flex-between main-form '>
          <button>
            <BiSearch />
          </button>
          <input className='main-input' type='text' />
          <BiCurrentLocation className='text-green-700 text-[20px] animate-pulse' />
        </form>
      </nav>
    </section>
  );
};

export default PageHeader;
