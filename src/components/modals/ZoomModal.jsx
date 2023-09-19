import React from "react";
import matrasImg from "../../assets/style/imgs/matras2.png";
import matrasOption1 from "../../assets/style/imgs/matras3.png";
import { Cross } from "../../assets/style/imgs/icons/icons";

function ZoomModal({ setZoom, zoomId, product }) {
  return product?.map(
    (item) =>
      item.id === zoomId && (
        <div className="zoom__back fixed top-0 z-50 h-full w-full bg-slate-600 bg-opacity-[0.8] shadow-2xl shadow-black ">
          //{" "}
          <div
            className="cross fixed right-0 top-0"
            onClick={() => setZoom(false)}
          >
            // <Cross />
            //{" "}
          </div>
          //{" "}
          <div className="zoom_img pt-14 ">
            {JSON.parse(item.product_images)?.length > 0 &&
              JSON.parse(item.product_images)?.map((image) => {
                return (
                  <img
                    width="900"
                    className=" mx-auto"
                    src={`http://localhost:1212/products/${image}`}
                  />
                );
              })}
            // //{" "}
          </div>
          //{" "}
        </div>
      ),
  );
}

export default ZoomModal;
