import { useState } from 'react';

import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

//components
import DataProvider from './context/DataProvider';
import Header from './components/header/Header';
import Home from './components/home/Home';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/details/DetailView';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/account/Login';
import Layout from './components/layout/Layout';
import PrivateRoute from './components/privateRoute/PrivateRoute';

// const PrivateRoute = ({ isAuthenticated, ...props }) => {
//   const token = sessionStorage.getItem('accessToken');
//   return isAuthenticated && token ? 
//     <>
//       {/* <Header /> */}
//       <Outlet />
//     </> : <Navigate replace to='/account' />
// };

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            
            <Route path='/' element={<Layout/>} >
              <Route path='/' element={<Home />} />
              <Route path='/details/:id' element={<DetailView />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element={<CreatePost />} />
              <Route path='/update/:id' element={<Update />} />
            </Route>

            </Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
