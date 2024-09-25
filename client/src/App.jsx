//import { useState } from 'react'
import './App.css'
import  Header  from './components/Header/Header.jsx'
import  Sidebar  from './components/SideBar/sidebar.jsx'
import  View  from './components/View/view.jsx'
import { Outlet } from 'react-router-dom';
import '@fontsource/walter-turncoat';
import '@fontsource/condiment';
import '@fontsource/itim';
import '@fontsource/architects-daughter';


function App() {
  return (
    <>
      <Header />
      <div className="d-flex"> 
        <Sidebar />
        <div className="d-flex flex-column w-100 h-50">
          <Outlet />
          <View />
        </div> 
      </div>
    </>
  );
}

export default App;
