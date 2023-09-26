import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='footer'>
      <div className='container mx-auto'>
        <section className='flex-between flex-col lg:flex-row gap-2'>
          <p>&copy; {currentYear} Prayer Calender. All Rights Reserved.</p>
          <p>
            Frond-end Developer By :
            <span className='text-ellipsis'> Abdallah Mashaly</span>
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
