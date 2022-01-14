import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './pages/Home/home';
import * as routes from './utils/constant';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <main className="py-3">
      <Container>
        <Routes>
          <Route exact={true} path={routes.HOME} element={<Home/>}/>
        </Routes>
      </Container>
    </main>
    </BrowserRouter>
  );
}

export default App;
