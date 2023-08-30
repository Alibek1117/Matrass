import Memoriform from "../assets/style/imgNurjon/Memoriform.jpg"
import Lateks from "../assets/style/imgNurjon/lateks.jpg"
import Prujina from "../assets/style/imgNurjon/prujina.jpg"

const Hometwo = () => {
  return (
      <>
     
    <div>
      <div className="container mx-auto p-4 px-8">
            <div className="home-card">
                  <h1 className="home-card-title">Ishlab chiqarish texnologiyalari</h1>
                  <div className="home-boxs">
                        <div className="home-box">
                              <h1>Memoriform</h1>
                              <img src={Memoriform} alt="" />
                              <p>Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.</p>

                        </div>
                        <div className="home-box">
                              <h1>Tabiiy lateks</h1>
                              <img src={Lateks} alt="" />
                              <p>Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus quis bibendum. Euismod diam eu sem tristique aenean rhoncus.</p>

                        </div>
                        <div className="home-box">
                              <h1>Mustaqil prujina</h1>
                              <img src={Prujina} alt="" />
                              <p>Enim urna consequat, justo, cras tincidunt imperdiet orci sodales. Dui purus feugiat morbi quam orci, vel. Elementum tincidunt blandit ultricies venenatis rhoncus.</p>

                        </div>
                  </div>
            </div>
            <div className="hometwo-hero">
                  <div>
                        
                  </div>
            </div>

      </div>
    </div>
    </>
  )
}

export default Hometwo