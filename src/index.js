import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routers, Route } from 'react-router-dom';


import Pagina1 from './pages/pagina 1/index'
import Pagina2 from './pages/pagina 2/index'
import Pagina3 from './pages/pagina 3/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routers>
        <Route path = '/pagina-1' element ={<Pagina1/>}/>
        <Route path = '/pagina-2' element ={<Pagina2/>}/>
        <Route path = '/pagina-3' element ={<Pagina3/>}/>
      </Routers>
    </BrowserRouter>
  </React.StrictMode>
);

