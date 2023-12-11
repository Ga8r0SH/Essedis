import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import ChooseHeader from './components/Header/variantsOfHeader/ChooseHeader';
import MainContent from './components/mainContent/MainContent';
import ScrollToTop from './logicComponents/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import { NewsContainer } from './components/news/NewsContainer';
import { AboutUsContainer } from './components/aboutUs/AboutContainer';
import { GalleryContainer } from './components/Gallery/GalleryContainer';
import { AdminContainer } from './components/admin/AdminContainer';
import AdminContext from './redux/adminContext';
import Cookies from "js-cookie";

// const baseUrl = document.getElementsByTagName('link')[0].getAttribute('href');

const App = () => {

  const [isAdmin, setIsAdmin] = useState(Cookies.get('isAdmin') === 'true');
  
  useEffect(() => {
    if (true) {
      setIsAdmin(true);
      Cookies.set('isAdmin', 'true', { expires: 1 }); 
    } else {
      setIsAdmin(false);
      Cookies.set('isAdmin', 'false', { expires: 1 });
    }
  }, [isAdmin]);


  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className='app-wrapper'>

        <ChooseHeader />

        <AdminContext.Provider value={isAdmin}>
          <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/news' element={<NewsContainer />} />
            <Route path='/about' element={<AboutUsContainer/>} />
            <Route path='/contacts' element={<Contacts/>} />
            <Route path='/gallery' element={<GalleryContainer/>} />
            <Route path='/admin' element={<AdminContainer/>} />
          </Routes>
        </AdminContext.Provider>

        <div className='footerBackground'>
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
