import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './ui/Header';
import Footer from './ui/Footer';
import AboutPage from './pages/AboutPage';
import PageHeader from './ui/PageHeader';
// import appBackground from './assets/app2.svg'
import appBackground from './assets/app.svg';

function App() {
  return (
    <main className='app ' style={{ backgroundImage: `url(${appBackground})` }}>
      <div className='app-layout glass'>
        <aside className='sidebar hidden lg:flex'>
          <Header />
        </aside>
        <div className='main-content '>
          <PageHeader />
          <section className='page-content'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </section>
          <footer className='footer'>
            <Footer />
          </footer>
        </div>
      </div>
    </main>
  );
}

export default App;
