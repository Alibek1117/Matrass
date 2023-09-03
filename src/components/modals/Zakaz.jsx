import { useState } from "react"; 

import { Exit } from "../../assets/style/imgNurjon/Img";
import "./_Modal.scss";
import { Link } from "react-router-dom";
import ZakazDone from "./ZakazDone";



const Zakaz = () => {
  const [count, setCount] = useState(1); // count o'zgaruvchini va uning setCount funktsiyasini yaratamiz

  const handleIncrement = () => {
    
    setCount(count + 1);
  };

  const handleDecrement = () => {
    
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="container zakaz">
        <div className="flex justify-end px-4">
         <span>
          <Link to={"/"}>
            <Exit />
          </Link>

         </span>
         
        </div>
        <div className="zakaz-title text-center my-3">
          <h1>Buyurtma Qilish</h1>
        </div>

        <form>
          <div className="flex justify-center my-3">
            <input className="zakaz-input-one" type="text" placeholder="Ismingizni yozing" />
          </div>
          <div className="flex justify-center my-3"> 
              <div className="zakaz-input-tel flex justify-center ">
            <span>+998</span> <input type="tel" placeholder="raqamingizni yozing" />
          </div>
          </div>
        </form>
      <div className="flex justify-center">
            <form className="grid-cols-1 grid justify-center zakaz-form">
          <label>Mahsulotlarni toifasini tanlang</label>
          <select  name="nma" id="">
            <option value="ortopedik shifobaxsh matras">Ortopedik Shifobaxsh Matras</option>
            
          </select>
        </form>
      </div>
        <div className="zakaz-buttons mt-8">
          <div className="zakaz-button">
            
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className="buttons flex justify-center mt-5">
            <button type="submit">Yuborish</button>
        </div>
      <ZakazDone />
      </div>
    </>
  );
};

export default Zakaz;
