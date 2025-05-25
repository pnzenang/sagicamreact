import { NavLink } from 'react-router-dom';
import logo from '../assets/images/sagicam.svg';
// import logo from '../assets/images/sagilogo1.png';

const Logo = () => {
  return (
    <NavLink to='/' className='flex  text-2xl items-center'>
      <img src={logo} alt='logo' className='w-28' />
    </NavLink>
  );
};
export default Logo;
