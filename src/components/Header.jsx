import { useState } from 'react';
import './_Header.scss';
import './_Response.scss';
import { LogoIcon, TelIcon } from '../assets/style/imgs/icons/icons';
import { IconHeader } from '../assets/style/imgNurjon/Img';
import { NavLink } from 'react-router-dom';

function Header() {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <header>
      <div className="container mx-auto">
        <div className="header flex">
          <div className="logo">
            <LogoIcon />
          </div>
          <div className="header__right flex items-center">
            <button
              className="Icon-Header sm:hidden md:hidden"
              onClick={togglePopover}
            >
              <IconHeader />
            </button>
            <div className='flex items-center gap-9 justify-between'>
              <div className={`popover absolute left-0 top-20 bg-[#eabf9f] z-10    p-4 ${popoverOpen ? '' : 'hidden'} md:static md:w-auto md:border-none md:bg-transparent md:p-0`}>
                <ul className="md:flex md:items-center md:space-x-4">
                  <li>
                    <a href="#katalog">Katalog</a>
                  </li>
                  <li>
                    <a href="#aksiya">Aksiya</a>
                  </li>
                  <li>
                    <a href="#aboutUs">Biz haqimizda</a>
                  </li>
                  <li>
                    <a href="#address">Manzilimiz</a>
                  </li>
                  <li>
                    <a href="#aloqa">Aloqa</a>
                  </li>
                  <li>
                    <NavLink to="/login">Admin</NavLink>
                  </li>
                </ul>
                <div className="tel__number mt-4 flex items-center">
                  <TelIcon className="mr-2 h-5 w-5" />
                  <span className="tel">+998 90 123 45 67</span>
                </div>
                <button className="order__btn mt-4">Buyurtma berish</button>
              </div>
<<<<<<< HEAD
            


            )}
            <div className="left__bottom  ">
              <div className="tel__number flex items-center">
                <TelIcon className="w-5 h-5 mr-2" />
                <span className="tel">+998 90 123 45 67</span>
=======
              <div className={`left__bottom ${popoverOpen ? 'hidden' : ''}`}>
                <div className="tel__number flex items-center">
                  <TelIcon className="w-5 h-5 mr-2" />
                  <span className="tel">+998 90 123 45 67</span>
                </div>
                <button className="order__btn ml-4">Buyurtma berish</button>
>>>>>>> nurjon
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

