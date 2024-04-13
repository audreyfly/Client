import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Post from './Post';
import IndexPage from './IndexPage';
import RegisterPage from './RegisterPage';
import Loginpage from './Loginpage';
import { BrowserRouter } from 'react-router-dom'; // Added import statement

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route element={<Loginpage />} /> // Removed duplicate 'index' attribute
        <Route element={<RegisterPage />} /> // Removed duplicate 'index' attribute
        <Route element={<Post />} /> // Removed duplicate 'index' attribute
        <Route element={<Layout />} /> // Removed duplicate 'index' attribute

        <Route path={'/login'} element={<div>Loginpage</div>} />
      </Routes>
    </BrowserRouter>
  );
}



