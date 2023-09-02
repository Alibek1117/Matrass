// import './_Header.scss'
// import "./_Response.scss"
// // import { NavLink } from 'react-router-dom';
// import { LogoIcon, TelIcon } from '../assets/style/imgs/icons/icons';
// import { IconHeader } from '../assets/style/imgNurjon/Img';

// function Header() {
//   return (
//     <header>
//       <div className="container mx-auto">
//         <div className="header">
//           <div className="logo">
//             <LogoIcon />
//           </div>
//           <div className="header__right">
//             <button className='Icon-Header'>
//               <IconHeader />
//             </button>
//             <nav className="header__naw">
//               <ul className="flex">
//                 <li>
//                   <a href="#">Katalog</a>
//                 </li>
//                 <li>
//                   <a href="#">Aksiya</a>
//                 </li>
//                 <li>
//                   <a href="#">Biz haqimizda</a>
//                 </li>
//                 <li>
//                   <a href="#">Manzilimiz</a>
//                 </li>
//                 <li>
//                   <a href="#">Aloqa</a>
//                 </li>
//                 <li>
//                   <a href="#">Admin</a>
//                 </li>
//               </ul>
//             </nav>
//             {/* <img src={TelIcon} alt="telicon" /> */}
//             <div className="left__bottom mt-6 flex items-center  justify-end">
//               <div className="tel__number flex">
//                 <TelIcon />
//                 <span className="tel ms-2">+998 90 123 45 67</span>
//               </div>
//               <button className="order__btn  ms-9">Buyurtma berish</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header


import { useState } from 'react';
import './_Header.scss';
import './_Response.scss';
import { LogoIcon, TelIcon } from '../assets/style/imgs/icons/icons';
import { IconHeader } from '../assets/style/imgNurjon/Img';
import {NavLink } from 'react-router-dom';

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
            <div className='flex'>
              <div className="popover absolute right-0 top-14 z-10 border border-gray-300  bg-white p-4 md:static md:w-auto md:border-none md:bg-transparent md:p-0">
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
                  <NavLink to="login">Admin</NavLink>
                </li>
              </ul>
            
            </div>
            {popoverOpen && (
              <div className="popover absolute right-0 top-14 z-10 border border-gray-300  bg-white p-4 md:static md:w-auto md:border-none md:bg-transparent md:p-0">
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
                    <NavLink to="login">Admin</NavLink>
                  </li>
                </ul>
                <div className="tel__number mt-4 flex items-center">
                  <TelIcon className="mr-2 h-5 w-5" />
                  <span className="tel">+998 90 123 45 67</span>
                </div>
                <button className="order__btn mt-4">Buyurtma berish</button>
              </div>


            )}
            <div className="left__bottom  ">
              <div className="tel__number flex items-center">
                <TelIcon className="w-5 h-5 mr-2" />
                <span className="tel">+998 90 123 45 67</span>
              </div>
              <button className="order__btn ml-4">Buyurtma berish</button>
            </div>


            



            

          </div>
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
