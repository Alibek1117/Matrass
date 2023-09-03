import { Link } from "react-router-dom"

import "./_Modal.scss"
import { Exit } from "../../assets/style/imgNurjon/Img"
import Zakaz from "../../assets/style/imgNurjon/Zakaz.png"

const ZakazDone = () => {
  return (
    <>
     <div className="container done-zakaz">
      <div className="flex justify-end px-4">
         <span>
          <Link to={"/"}>
            <Exit />
          </Link>

         </span>
         
        </div>
        <div className="zakaz-title text-center my-3">
          <h1>Arizangiz muvaffaqiyatli yuborildi</h1>
        </div>
        <div className="flex justify-center">
          
            <img src={Zakaz} alt="" />
          
        </div>
        <div className="flex justify-center">
          <div>
            <p className="zakaz-p">Tez orada operatorlarimiz siz bilan bog’lanishadi</p>
            <div className="flex justify-center my-3">
            <button className="zakaz-btn">
              Ok
            </button>

            </div>
          </div>
        </div>

     </div>
    
    </>
  )
}

export default ZakazDone