import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Footer from './components/Footer';
import App from './App';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import UserDetails from './components/UserDetails';
import Implementando from './components/Implementando';
import Produto from './components/Produto';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="cadastro" element={<Cadastro />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route path='Implementando' element = {<Implementando/>} />
            <Route path='/produtos' element = {<Produto/>}/>
        </Routes>
        <Footer />
    </BrowserRouter>
);