import { useFetch } from "../hook/useFetch";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Technologies() {
  const url = "http://localhost:1212/api/technology";
  const { data: tech, loader, error } = useFetch(url);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container">
      <div className="home-card">
        <h1 className="home-card-title">Ishlab chiqarish texnologiyalari</h1>
        <div className="home-boxs">
          {tech &&
            tech.map((item) => (
              <div className="home-box ml-12" key={item.id}>
                <div>
                  <h1>{item.name}</h1>
                </div>
                <div className="iframe overflow-hidden rounded-md ">
                  <iframe
                    width="400"
                    height="300"
                    src={item.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
