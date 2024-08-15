
import { AppBar, Toolbar, styled, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: end;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`
const Header = ({ isAuthenticated, ...props }) => {

    const navigate = useNavigate();

    const logoutHandle=(e)=>{
        sessionStorage.clear()
        navigate('/account')
    }

    const token = sessionStorage.getItem('accessToken');
    const name = sessionStorage.getItem('name');
    // 
console.log(name, "hello")

    return (
        <Component>
            <Container>
                <Link to='/'><h1>My Blog</h1></Link>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>

                {
                         token ? 
                         <>
                        <span>WELCOME {name}</span>
                        <span onClick={logoutHandle}>LOGOUT</span>
                         </>
                        : 
                        <Link to='/account'>LOGIN</Link>
                }

            </Container>
        </Component>
    )
}
export default Header;