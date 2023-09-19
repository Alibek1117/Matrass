/* eslint-disable react/prop-types */
import { useState } from "react";
import "./_Header.scss";
import "./_Response.scss";
import { LogoIcon, TelIcon } from "../assets/style/imgs/icons/icons";
import { IconHeader } from "../assets/style/images/Img";
import { NavLink } from "react-router-dom";

function Header({ setOpenZakaz }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const openOrder = () => {
    setOpenZakaz(true);
  };

  return (
    <header>
      <div className="container mx-auto">
        <div className="header flex">
          <div className="logo mt-12">
            <LogoIcon />
          </div>
          <div className="header__right flex items-center">
            <button
              className="Icon-Header sm:hidden md:hidden"
              onClick={togglePopover}
            >
              <IconHeader />
            </button>
            <div className="flex items-center justify-between gap-9">
              <div
                className={`popover absolute right-0 top-14 z-10 bg-[#eabf9f] p-4 ${
                  popoverOpen ? "" : "hidden"
                } md:static md:w-auto md:border-none md:bg-transparent md:p-0`}
              >
                <ul className=" md:flex md:items-center  md:space-x-4">
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

                <button
                  onClick={openOrder}
                  className="order__btn mt-4 rounded-full bg-[#eabf9f] px-4 py-1 text-center hover:bg-[#c98f6f]"
                >
                  Buyurtma berish
                </button>
              </div>
              <div className={`left__bottom  ${popoverOpen ? "hidden" : ""}`}>
                <div className="tel__number flex flex-col items-end gap-6">
                  <ul className="gap-3 md:flex md:items-center md:space-x-4">
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
                  <div className="flex items-center">
                    <div className="flex gap-1">
                      <TelIcon className="mr-2 h-5 w-5" />
                      <span className="tel">+998 90 123 45 67</span>
                    </div>
                    <button
                      onClick={openOrder}
                      className="order__btn ml-4 rounded-full bg-[#eabf9f] px-4 py-1 text-black hover:bg-[#c98f6f]"
                    >
                      Buyurtma berish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
