import  { useRef, useState } from "react";
import { ImageICons } from "../../../assets/style/imgAdmin/IconAdmin";
import { CrossBtn } from "../../../assets/style/imgs/icons/icons";
import { useFetch } from "../../../hook/useFetch";

function ProductEdite({ setOpenProductEdite, idEdite }) {
  const name = useRef();
  const category = useRef();
  const weight = useRef();
  // const images = useRef();
  const warranty = useRef();
  const size = useRef();
  const capacity = useRef();
  const body = useRef();
  const cost = useRef();
  const newCost = useRef();

  const [img, setImg] = useState("");
  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };

  const [isNew, setIsNew] = useState(true);
  const [isActive, setIsActive] = useState(true);

  const cheekNew = () => {
    setIsNew(!isNew);
  };
  const cheekActive = () => {
    setIsActive(!isActive);
  };

  const handlePost = (e) => {
    e.preventDefault();
    setOpenProductEdite(false);

    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
    );

    var formdata = new FormData();
    formdata.append("name", name.current.value);
    formdata.append("category", category.current.value);
    formdata.append("weight", weight.current.value);
    formdata.append("images", img);
    formdata.append("isActive", isActive);
    formdata.append("warranty", warranty.current.value);
    formdata.append("size", size.current.value);
    formdata.append("capacity", capacity.current.value);
    formdata.append("body", body.current.value);
    formdata.append("cost", cost.current.value);
    formdata.append("newCost", newCost.current.value);
    formdata.append("discount", newCost.current.value ? true : false);
    formdata.append("new", isNew);

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`http://localhost:1212/admin/products/${idEdite}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const url = "http://localhost:1212/api/products";
  const { data, loader, error } = useFetch(url);
  const categories = data && data.categories;

  return (
    <div
      className="font-Montserrat     fixed left-[120px]
    top-16 flex w-[1130px] justify-evenly rounded-lg  border bg-white p-6 shadow-2xl shadow-black "
    >
      <form className="flex gap-8" onSubmit={handlePost}>
        <div>
          <h3 className="mb-2 text-[18px] font-semibold">O'zgartirish</h3>
          <input
            type="file"
            className="flex  h-[230px] w-[230px] items-center justify-center  rounded bg-[#013d4d2c]"
            onChange={handleImg}
            required
            name="fileInput"
          />
        </div>
        <div className="flex justify-between gap-4">
          <div>
            <label className="block pt-8" htmlFor="Toifalar">
              Toifalar
            </label>
            <select
              className="mt-2 h-[40px] w-[220px] rounded border pl-3 "
              ref={category}
              required
              name="Toifalar border-none"
              id="Toifalar"
            >
              {categories ? (
                categories.map((item) => (
                  <option className=" p-5" value={item.category} key={item.id}>
                    {item.category}
                  </option>
                ))
              ) : (
                <option>Loding...</option>
              )}
            </select>
            <label className="mt-4 block" htmlFor="Tovarnomi">
              Tovar nomi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={name}
              required
              type="text"
              placeholder="masalan: Lux Soft Memory"
              id="Tovarnomi"
            />
            <label className="mt-4 block" htmlFor="Narxi">
              Narxi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={cost}
              required
              type="text"
              id="Narxi"
              placeholder="masalan: 20 000"
            />
            <label className="mt-4 block" htmlFor="Yuklama">
              Yuklama
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={weight}
              required
              type="text"
              id="Yuklama"
              placeholder="masalan: 200 kg"
            />
          </div>
          <div>
            <label className="mt-8 block " htmlFor="Razmeri">
              Razmeri
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={size}
              required
              type="text"
              id="Razmeri"
              placeholder="masalan: 200 x 140 x 40"
            />
            <label
              className="mt-4 block
            "
              htmlFor="Kafolat"
            >
              Kafolat
            </label>
            <input
              className=" mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={warranty}
              required
              type="text"
              placeholder="masalan: 1 yil"
              id="Kafolat"
            />
            <label
              className="mt-4
            block"
              htmlFor="Sig’m"
            >
              Sig’m
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={capacity}
              required
              type="text"
              id="Sig’m"
              placeholder="masalan:2"
            />
            <label className="mt-4 block" htmlFor="Aksiya Narxi">
              Aksiya Narxi
            </label>
            <input
              className="mt-2 h-[40px] w-[220px] rounded border pl-3"
              ref={newCost}
              type="Text"
              id="Aksiya Narxi"
              placeholder="masalan: 1 200 000"
            />
          </div>
          <div>
            <label className="mt-8 block" htmlFor="Ma'lumot">
              Ma'lumot
            </label>
            <textarea
              className="mt-2 h-[127px] w-[220px] rounded border p-3"
              ref={body}
              required
              placeholder="info..."
              id="Ma'lumot"
            ></textarea>
            <div className="mt-4 flex items-center">
              <p>New</p>
              <div
                className="relative mx-auto flex  h-[17px] w-[38px] items-center rounded-[50px] bg-green-200 p-[0px]"
                onClick={cheekNew}
              >
                <span
                  className={
                    isNew
                      ? "absolute right-0 m-[2px]  h-[13px] w-[13px] rounded-[50px] bg-green-700"
                      : "absolute left-0 m-[2px]  h-[13px] w-[13px] rounded-[50px] bg-white"
                  }
                ></span>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <p>Active</p>
              <div
                className="relative mx-auto flex h-[17px] w-[38px] items-center rounded-[50px] bg-green-200 p-[1px]"
                onClick={cheekActive}
              >
                <span
                  className={
                    isActive
                      ? "absolute right-0 m-[2px]  h-[13px] w-[13px] rounded-[50px] bg-green-700"
                      : "absolute left-0 m-[2px]  h-[13px] w-[13px] rounded-[50px] bg-green-400"
                  }
                ></span>
              </div>
            </div>
            <button className="mt-[45px] h-[45px] w-[220px] rounded bg-[#01384D] text-white">
              Qo'shish
            </button>
          </div>
        </div>
      </form>
      <div onClick={() => setOpenProductEdite(false)}>
        <CrossBtn />
      </div>
    </div>
  );
}

export default ProductEdite;
