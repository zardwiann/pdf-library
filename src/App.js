
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './component/landing';
import WebDevelopement from './component/Webdev';

import Clanguage from './component/cdevelopement';
import JavaProgramming from './component/javaprogramming';
import Javascript from './component/javascript';
import Linux from './component/linux';
import Docker from './component/docker';
import Algorithms from './component/algoithm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<LandingPage />}>

          <Route index element={<WebDevelopement />} />
          <Route path="web" element={<WebDevelopement />} />
          <Route path="cprogramming" element={<Clanguage />} />
          <Route path="javaprogramming" element={<JavaProgramming />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="linux" element={<Linux />} />
          <Route path="docker" element={<Docker />} />
          <Route path="algorithms" element={<Algorithms />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
