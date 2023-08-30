import './_Header.scss'
// import { NavLink } from 'react-router-dom';
import { LogoIcon, TelIcon } from '../assets/style/imgs/icons/icons';

function Header() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="header">
          <div className="logo">
            {/* <img src={logoIcon} alt="logo" /> */}
            <LogoIcon />
          </div>
          <div className="header__right">
            <nav className="header__naw">
              <ul className="flex">
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
            {/* <img src={TelIcon} alt="telicon" /> */}
            <div className="left__bottom mt-6 flex items-center  justify-end">
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

export default Header