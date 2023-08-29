import { NavLink } from 'react-router-dom';

function Header() {
  return (
    < div className='flex items-center justify-between'>
      <div className="headercha ">Header</div>
      <NavLink to = '/login'>Admin</NavLink>
    </div>
  );
}

export default Header