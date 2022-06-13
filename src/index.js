import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Pagina1 from './pages/landingpage/index.js'
import Pagina2 from './pages/menu/menu.js'
import Pagina3 from './pages/paginaadm/loginadm.js'
import Pagina4 from './pages/paginacadastrar/cadastrar.js'
import Pagina5 from './pages/paginaconsulta/consultarinformacoes.js'
import Pagina6 from './pages/paginaconsulta/editar.js'
import Pagina7 from './pages/paginaproximasconsultas/edicao.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = '/pagina-1' element ={<Pagina1/>}/>
        <Route path = '/pagina-2' element ={<Pagina2/>}/>
        <Route path = '/pagina-3' element ={<Pagina3/>}/>
        <Route path = '/pagina-4' element ={<Pagina4/>}/>
        <Route path = '/pagina-5' element ={<Pagina5/>}/>
        <Route path = '/pagina-6' element ={<Pagina6/>}/>
        <Route path = '/pagina-7' element ={<Pagina7/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

