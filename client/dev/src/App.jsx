//import { useState } from 'react'
import './App.css'
import  Header  from './components/Header/Header.jsx'
import  Sidebar  from './components/SideBar/sidebar.jsx'
import  Sandbox  from './components/SandBox/sandbox.jsx'
import  View  from './components/View/view.jsx'
// import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="d-flex flex-row">
        <Sidebar />
        <div className="d-flex flex-column w-100 h-auto">
          <Sandbox />
          <View />
        </div> 
      </div>
    </>
  );
}

export default App;
