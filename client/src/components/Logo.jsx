import { NavLink } from 'react-router-dom';
// import logo from '../assets/images/sagicam.svg';
// import logo from '../assets/images/sagilogo1.png';

// const Logo = () => {
//   return (
//     <NavLink to='/' className='flex  text-2xl items-center'>
//       <img src={logo} alt='logo' className='w-28' />
//     </NavLink>
//   );
// };
// export default Logo;
const Logo = () => {
  return (
    <NavLink to='/' className='flex  text-2xl items-center'>
      <img
        src='https://res.cloudinary.com/dp8tkb7hq/image/upload/v1752146281/sagicam_ukmjrr.png'
        alt='logo'
        className='w-28'
      />
    </NavLink>
  );
};
export default Logo;
