
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ParticlesComponent from './particles';


import { loadSlim } from '@tsparticles/slim';
import { useCallback } from 'react';
import Banner from './Page1/banner';
import NavigationBar from './Page1/Navigationbar';
import About from './Page1/aboutus';

import LibraryCategory from './Page2/LibraryNavigationBar';
import Technology from './Page2/Technology';
import OnlineClass from './Page2/onlineclass';

function App() {

  return (

    <BrowserRouter>
      <ParticlesComponent id="particles" />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/online" element={<OnlineClass />} />
        <Route path="/home" element={<Banner />}>
          <Route index element={<Banner />} />
        </Route>

        <Route path="/library" element={<LibraryCategory />}>
          <Route index element={<Technology />} />
          <Route path="technology" element={<Technology />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
