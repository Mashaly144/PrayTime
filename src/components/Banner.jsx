import React, { useEffect } from 'react';
import { SlCalender } from 'react-icons/sl';
import moment from 'moment/moment';

const Banner = () => {
  return (
    <section>
      <section className='banner flex-between flex-col lg:flex-row w-full '>
        <aside className='banner-aside flex-1/2 hidden md:flex lg:flex'>
          <ul>
            <li className='font-bold text-2xl'>اليوم</li>
            <li className='text-3xl'>
              <SlCalender />
            </li>
          </ul>
          <ul className='flex-between'>
            <li>{moment().format('d')}</li>
            <li>رمضان</li>
            <li>1441</li>
          </ul>
          <ul className='flex-between'>
            <li>{moment().format('d')}</li>
            <li>{moment().format('MMM')}</li>
            <li>{moment().format('y')}</li>
          </ul>
        </aside>
        <article className='banner-article text-center flex-1 lg:text-right'>
          <h1>اوقات الصلاه في دبي</h1>
          <p> رابطه العالم الالسلامي يتغيرون</p>
          <span>الفجر 18 درجه العشاء 17 درجه مالكي حنبه الشافعي</span>
        </article>
      </section>
    </section>
  );
};

export default Banner;
