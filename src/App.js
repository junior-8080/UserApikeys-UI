import 'antd/dist/antd.min.css';
// import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './HOC/ProtectedRoutes';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';



// const selectLogin = state => state.user;


function App() {

  // const user =  useSelector(selectLogin);
  return (
    <div>
      <Routes>
         <Route path='/'   element={<Auth />}  />
         <Route path='/dashboard' element={<ProtectedRoutes children={<Dashboard />} />} />
      </Routes>
    </div>
  );
}

export default App;
