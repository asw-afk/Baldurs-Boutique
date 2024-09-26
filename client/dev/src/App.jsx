import './App.css'
import  Header  from './components/Header/Header.jsx'
import  Sidebar  from './components/SideBar/sidebar.jsx'
import  View  from './components/View/view.jsx'
import { Outlet } from 'react-router-dom';
import { ViewProvider } from './components/util/viewContext.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="d-flex"> 
        <Sidebar />
        <ViewProvider>
        <div className="d-flex flex-column w-100 h-50">
          <Outlet />
          
            <View />
          
        </div> 
        </ViewProvider>
      </div>
    </>
  );
}

export default App;
