import 'antd/dist/antd.css';
import { useSelector } from 'react-redux'
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './HOC/ProtectedRoutes';



const selectLogin = state => state.user;


function App() {

  const user =  useSelector(selectLogin);
  return (
    <div className="App h-full   sm:h-screen">
      <Routes>
         <Route path='/'   element={<Auth />}  />
         <Route path='/dashboard' element={<ProtectedRoutes children={<Dashboard />} />} />
      </Routes>
    </div>
  );
}

export default App;
