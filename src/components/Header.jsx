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
        <div className="header">
          <div className="logo">
            <LogoIcon />
          </div>
          <div className="header__right flex items-center">
            <button className="Icon-Header   xl:hidden lg:hidden" onClick={togglePopover}>
              <IconHeader />
            </button>
              <nav className="header__naw  ">
               <ul className="flex ">
                 <li>
                   <a href="#">Katalog</a>
                 </li>
                 <li>
                   <a href="#">Aksiya</a>
                 </li>
                 <li>
                   <a href="#">Biz haqimizda</a>
                 </li>
                 <li>
                   <a href="#">Manzilimiz</a>
                 </li>
                 <li>
                   <a href="#">Aloqa</a>
                </li>
                 <li>
                   <a href="#">Admin</a>
                 </li>
               </ul>
             </nav>
            {popoverOpen && (
              <div className="popover absolute top-14 right-0 bg-white border border-gray-300 shadow-md p-4 z-10 md:static md:w-auto md:bg-transparent md:border-none md:p-0">
                <ul className=" md:space-x-4 md:items-center">
                  <li><a href="#katalog">Katalog</a></li>
                  <li><a href="#aksiya">Aksiya</a></li>
                  <li><a href="#aboutUs">Biz haqimizda</a></li>
                  <li><a href="#address">Manzilimiz</a></li>
                  <li><a href="#aloqa">Aloqa</a></li>
                  <li><NavLink to="login">Admin</NavLink></li>
                </ul>
                <div className="tel__number flex items-center mt-4  md:hidden">
                  <TelIcon className="w-5 h-5 mr-2" />
                  <span className="tel ">+998 90 123 45 67</span>
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
    </header>
  );
}

export default Header;
