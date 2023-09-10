import { useRef, useState } from "react";


import "./_Modal.scss";
import { CrossBtn } from "../../assets/style/imgs/icons/icons";
import { useFetch } from "../../hook/useFetch";

// import { options } from "prettier-plugin-tailwindcss";

const Zakaz = ({ setOpenZakaz, setOpenZakazDone, id }) => {
  const [count, setCount] = useState(1); // count o'zgaruvchini va uning setCount funktsiyasini yaratamiz

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const url = "http://localhost:1212/api/products";
  const { data, loader, error } = useFetch(url);
  const category = data && data.products;
  // 

  const userName = useRef()
  const userTel = useRef()
  const productNamee = useRef()


  //POST request
  const handlePostOrder = (e) => {
    e.preventDefault();
    setOpenZakaz(false)
    setOpenZakazDone(true)
    let obj = {
      name: userName.current.value,
      number: userTel.current.value,
      productName: productNamee.current.value,
      count: count,
    };
    // console.log(obj);

    fetch("http://localhost:1212/api/orders", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
        // "Authorization":
        //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzOTExMzExfQ.EKV2yelCebB4nkGIT0t4-gBVUMEUPdQKUEgj5Hh2Cgo",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

  };

  return (
    <div className="fixed left-[30%] top-1 z-50 shadow-2xl shadow-black">
      <div className="zakaz relative mx-auto w-[420px] rounded-md bg-[#F6FBFF] p-10 ">
        <div
          className="absolute right-0 top-0"
          onClick={() => setOpenZakaz(false)}
        >
          <CrossBtn />
        </div>
        <div className="zakaz-title   text-center">
          <h1>Buyurtma Qilish</h1>
        </div>

        <form onSubmit={ handlePostOrder}>
          <div className="my-3 flex justify-center">
            <input
              ref={userName}
              className="zakaz-input-one w-full p-4 "
              type="text"
              placeholder="Ismingizni yozing"
              required
            />
          </div>
          <div className=" w-full">
            <div className="zakaz-input-tel flex justify-left">
              <span className="p-4">+998</span>
              <input
                ref={userTel}
                className="p-4"
                type="tel"
                placeholder="raqamingizni yozing"
                required
              />
            </div>
          </div>
          <div className="zakaz-form grid grid-cols-1 justify-center text-left">
            <label className="mt-8 text-[18px] font-[600] text-[#01384D]">
              Mahsulotlarni nomini tanlang
            </label>
            <select
              className="mt-2 w-full p-4"
              name="nma"
              id=""
              ref={productNamee}
            >
              <option>
                {id ? category && category.filter((item)=>{return item.id == id })[0].name:''}
              </option>
              {loader && <option>Loading...</option>}
              {category &&
                category.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          <div className=" mt-4">
            <div className="mt-6 text-[18px] font-[600] text-[#01384D]">
              Miqdorni kiriting
            </div>
            <div className="zakaz-button mt-2 w-full ">
              <span className="w-[25%] p-3" onClick={handleDecrement}>
                -
              </span>
              <span className="w-[50%] p-3">{count}</span>
              <span className="w-[25%] p-3" onClick={handleIncrement}>
                +
              </span>
            </div>
          </div>
          <div className="buttons mt-12 flex justify-center">
            <button type="submit">Yuborish</button>
          </div>
        </form>
        {/* <ZakazDone /> */}
      </div>
    </div>
  );
};

export default Zakaz;
