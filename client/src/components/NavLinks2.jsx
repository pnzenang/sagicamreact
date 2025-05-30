import { NavLink } from 'react-router-dom';
import links from '../utils/links2';
import { useDashboardContext } from '../pages/DashboardLayout';

const NavLinks2 = () => {
  const { user } = useDashboardContext();
  return (
    <ul className='nav-links text-lg '>
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        {
          if (
            role === 'user' &&
            (path === 'admin' ||
              path === 'all-members-admin' ||
              path === 'all-deceased-admin' ||
              path === 'register')
          )
            return;
        }
        return (
          <NavLink
            to={path}
            key={text}
            className='hover:text-primary nav-link my-4 active:text-cyan-500 '
          >
            <span className='icon w-7 mx-5 '>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </ul>
  );
};
export default NavLinks2;
