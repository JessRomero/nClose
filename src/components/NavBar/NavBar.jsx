import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div className='logo-container'>
      <Link to="/">
        <img src="https://i.imgur.com/uB0e2tH.png" alt=""/>
      </Link>
      </div>
      <div className='nav-bar'>
      <Link to="/" className='home nav-link'>Home</Link>
      <span className='line'>&nbsp; | &nbsp;</span>
      <Link to="/about" className='about nav-link'>About</Link>
      <span className='line'>&nbsp; | &nbsp;</span>
      <Link to="/products"className='products nav-link'>Products</Link>
      <span className='line'>&nbsp; | &nbsp;</span>
      <Link to="/contact" className='contact nav-link'>Contact Us</Link>
      <span className='line'>&nbsp; | &nbsp;</span>
      <Link to="" onClick={handleLogOut} className='logout nav-link'>Log Out</Link>
      </div>
    </nav>
  );
}


