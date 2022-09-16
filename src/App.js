import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import Review from './Pages/Dashboard/Review';
import Search from './Pages/Dashboard/Search';
import Home from './Pages/Home/Home';
import Login from './Pages/LoginReg/Login';
import Reg from './Pages/LoginReg/Reg';
import NotFound from './Pages/NotFound';
import RequireAuh from './Requireauth/RequireAuh';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App text-4xl text-secondary">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/dashboard" element={
          <RequireAuh>
            <Dashboard></Dashboard>
          </RequireAuh>
        } >

          <Route index element={<Profile></Profile>}></Route>
          <Route path='/dashboard/addreview' element={<Review></Review>}></Route>
          <Route path='/dashboard/search' element={<Search></Search>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Reg></Reg>}></Route>
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
