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
          <div className="header__right">
            <button className="Icon-Header" onClick={togglePopover}>
              <IconHeader />
            </button>
            <nav className="header__naw">
               <ul className="flex">
                 <li>
                   <a href="#">Katalog</a>
                 </li>                 <li>
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
              <div className="popover">
                {/* Ikonning pastidagi menyuni yaratish */}
                <ul>
                  <li>Katalog</li>
                  <li>Aksiya</li>
                  <li>Biz haqimizda</li>
                  <li>Manzilimiz</li>
                  <li>Aloqa</li>
                  <li>Admin</li>
                </ul>
                {/* Telefon raqamlari chiqadigan qism */}
                <div className="tel__number">
                  <TelIcon />
                  <span className="tel">+998 90 123 45 67</span>
                </div>
                <button className="order__btn">Buyurtma berish</button>
              </div>
            )}
            <div className="left__bottom mt-6 flex items-center justify-end md:hidden sm:hidden">
               <div className="tel__number flex">
                 <TelIcon />
                 <span className="tel ms-2">+998 90 123 45 67</span>
               </div>
               <button className="order__btn  ms-9">Buyurtma berish</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
