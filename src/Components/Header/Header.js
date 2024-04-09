import './Header.scss'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Nav'>
            <div className='leftNav'>
                <NavLink to='/' className="logo" >NamVo</NavLink>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/admins'>Admin</NavLink>
            </div>
            <div className='rightNav'>
                <button className='loginBtn Btn'>Log in</button>
                <button className='signupBtn Btn'>Sign up</button>
                {/* <div className='dropdown'>
                    <span>Settings</span>
                    <div className='dropdown-content'>
                        <div>
                            <Link to='/'>Profile</Link>
                        </div>
                        <div>
                            <Link to='/'>Login</Link>
                        </div>
                        <div>
                            <Link to='/'>Logout</Link>
                        </div>
                        <div>
                            <Link to='/'>Register</Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div >
    );
}
export default Header;