import React, { useState, useEffect } from 'react';
import PrayWrapper from '../components/PrayWrapper';
import Loader from '../ui/Loader';
import axios from 'axios';
import moment from 'moment/moment';
import Banner from '../components/Banner';
const HomePage = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Months are 1-based
  const [day, setDay] = useState(new Date().getDay()); // Months are 1-based
  const [city, setCity] = useState('cairo'); // Default city
  const [country, setCountry] = useState('egy'); // Default city

  const [calendarData, setCalendarData] = useState(null);
  const [timings, setTimings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // // fetch data
  useEffect(() => {
    setLoading(true);
    const url = `https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=${country}&method=5`;

    axios
      .get(url)
      .then((res) => {
        setTimeout(() => {
          setCalendarData(res.data);
          setTimings(res.data.data[day]);
          setLoading(false);

          console.log(calendarData);
          console.log(timings);
        }, 1500);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err);
      });
    console.log(timings);
  }, [year, month, city]);

  // error message
  useEffect(() => {
    return () => {
      const timer = setTimeout(() => {
        setErrorMsg('failed to fetch data');
      }, 1500);
      return () => clearTimeout(timer);
    };
    // clear
  }, [errorMsg]);

  // if data is false
  if (!calendarData) {
    return (
      <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
        <div>
          <Loader />
        </div>
      </div>
    );
  }
  return (
    <section className='container mx-auto '>
      <section className=' rounded-xl flex-between flex-col '>
        <Banner />
        <PrayWrapper timings={timings} />
      </section>
    </section>
  );
};

export default HomePage;
