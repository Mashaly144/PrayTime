import React from 'react';

const PrayCard = ({ name, time }) => {
  return (
    <section className='flex-between gap-6 flex-1 cursor-pointer pray-card_glass'>
      <section className='flex flex-col items-center gap-1 p-4  rounded-lg flex-1'>
        <h5 className='text-md font-semibold text-center'>{name}</h5>
        <p className='text-lg text-center'>{time}</p>
      </section>
    </section>
  );
};

export default PrayCard;
