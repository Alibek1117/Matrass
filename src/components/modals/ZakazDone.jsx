import { Link } from "react-router-dom";
import "./_Modal.scss";
import { Exit } from "../../assets/style/images/Img";
import Zakaz from "../../assets/style/images/Zakaz.png";
import { CrossBtn } from "../../assets/style/imgs/icons/icons";

const ZakazDone = ({ setOpenZakazDone }) => {
  const closeSuccesModal = () => {
    setOpenZakazDone(false);
  };

  return (
    <div className="zakaz-done-modal fixed left-[10%] top-1 z-50 shadow-2xl shadow-black sm:left-[30%]">
      <div className=" done-zakaz relative mx-auto w-[360px] bg-[#F6FBFF]  sm:w-[420px]">
        <div
          className=" absolute right-0 top-0"
          onClick={() => closeSuccesModal()}
        >
          <CrossBtn />
        </div>
        <div className="zakaz-title my-2 mt-0 text-center">
          <h1>Arizangiz muvaffaqiyatli yuborildi</h1>
        </div>
        <div className="flex justify-center">
          <img src={Zakaz} alt="" />
        </div>
        <div className="flex justify-center">
          <div>
            <p className="zakaz-p">
              Tez orada operatorlarimiz siz bilan bog’lanishadi
            </p>
            <div className="my-2 flex justify-center">
              <button className="zakaz-btn" onClick={() => closeSuccesModal()}>
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZakazDone;
