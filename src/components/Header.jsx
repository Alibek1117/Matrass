import { useState } from 'react';
import './_Header.scss';
import './_Response.scss';
import { LogoIcon, TelIcon } from '../assets/style/imgs/icons/icons';
import { IconHeader } from '../assets/style/imgNurjon/Img';
import { NavLink } from 'react-router-dom';

function Header({setOpenZakaz}) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const openOrder = ()=>{
    setOpenZakaz(true);
  }

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
              <div className={`popover absolute right-0 top-14 bg-[#eabf9f] z-10 p-4 ${popoverOpen ? '' : 'hidden'} md:static md:w-auto md:border-none md:bg-transparent md:p-0`}>
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

                <button className="order__btn mt-4 bg-[#eabf9f] hover:bg-[#c98f6f] text-center py-1 px-4 rounded-full">
                  Buyurtma berish
                </button>

                <button className="order__btn mt-4" onClick={openOrder}>Buyurtma berish</button>

              </div>
              <div className={`left__bottom ${popoverOpen ? 'hidden' : ''}`}>
                <div className="tel__number flex items-center gap-6">
                   <ul className="md:flex md:items-center md:space-x-4 gap-3">
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
                  <TelIcon className="w-5 h-5 mr-2" />
                  <span className="tel">+998 90 123 45 67</span>
                </div>
                <button className="order__btn ml-4 bg-[#eabf9f] hover:bg-[#c98f6f] text-black py-1 px-4 rounded-full">
                  Buyurtma berish
                </button>
              </div>

              <button className="order__btn ml-4" onClick={openOrder}>Buyurtma berish</button>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
