import { Navigate, Outlet } from 'react-router-dom';
//  const PrivateRoute = ({ isAuthenticated, ...props }) => {
    

  
  export default function PrivateRoute({ isAuthenticated, ...props }) {
    const token = sessionStorage.getItem('accessToken');
    
    return isAuthenticated && token ? 
      <>
        {/* <Header /> */}
        <Outlet />
      </> : <Navigate replace to='/account' />
  };
  
  
  
  