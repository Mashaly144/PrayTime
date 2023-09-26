import React from 'react';
import PrayCard from './PrayCard';

const PrayWrapper = ({ timings }) => {
  return (
    <section className='py-5 '>
      <section className='flex items-center justify-center md:justify-center lg:justify-between flex-wrap  lg:flex-row md:flex-row gap-4 md:gap-2 lg:gap-4 flex-1'>
        <PrayCard name='الفجر' time={timings.timings.Fajr} />
        <PrayCard name='الصبح' time={timings.timings.Sunrise} />
        <PrayCard name='الظهر' time={timings.timings.Dhuhr} />
        <PrayCard name='العصر' time={timings.timings.Asr} />
        <PrayCard name='المغرب' time={timings.timings.Maghrib} />
        <PrayCard name='العشاء' time={timings.timings.Isha} />
      </section>
    </section>
  );
};

export default PrayWrapper;
