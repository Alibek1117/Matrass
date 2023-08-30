import { Memoriform } from "../assets/style/imgNurjon/Img"

const Hometwo = () => {
  return (
      <>
     
    <div>
      <div className="container mx-auto p-4">
            <div className="home-card">
                  <h1 className="home-card-title">Ishlab chiqarish texnologiyalari</h1>
                  <div className="home-boxs">
                        <div className="home-box">
                              <h1>Memoriform</h1>
                              <img src={<Memoriform />} alt="" />

                        </div>
                  </div>
            </div>

      </div>
    </div>
    </>
  )
}

export default Hometwo