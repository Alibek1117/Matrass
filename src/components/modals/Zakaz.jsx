import { useRef, useState } from "react";
import "./_Modal.scss";
import { CrossBtn } from "../../assets/style/imgs/icons/icons";
import { useFetch } from "../../hook/useFetch";

const Zakaz = ({ setOpenZakaz, setOpenZakazDone, id }) => {
  const [count, setCount] = useState(1);

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

  const userName = useRef();
  const userTel = useRef();
  const productNamee = useRef();

  const handlePostOrder = (e) => {
    e.preventDefault();
    setOpenZakaz(false);
    setOpenZakazDone(true);
    let obj = {
      name: userName.current.value,
      number: userTel.current.value,
      productName: productNamee.current.value,
      count: count,
    };

    fetch("http://localhost:1212/api/orders", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkzNzQzNDU0fQ.sFu4MYKeNEy2Q7SufqeoX4yqN4G-G8GfWVEwUGwDOGo",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className=" zakaz-modal fixed left-[10%] top-0 z-50 shadow-2xl shadow-black sm:left-[30%] sm:top-1">
      <div className="zakaz relative mx-auto w-[360px] rounded-md bg-[#F6FBFF] p-9 sm:w-[420px] ">
        <div
          className="absolute right-0 top-0"
          onClick={() => setOpenZakaz(false)}
        >
          <CrossBtn />
        </div>
        <div className="zakaz-title   text-center">
          <h1>Buyurtma Qilish</h1>
        </div>

        <form onSubmit={handlePostOrder}>
          <div className="my-2 flex justify-center">
            <input
              ref={userName}
              className="zakaz-input-one w-full p-4 "
              type="text"
              placeholder="Ismingizni yozing"
              required
            />
          </div>
          <div className=" w-full">
            <div className="zakaz-input-tel justify-left flex">
              <span className="p-4">+998</span>
              <input
                ref={userTel}
                className="w-full p-4"
                type="tel"
                placeholder="raqamingizni yozing"
                required
              />
            </div>
          </div>
          <div className="zakaz-form grid grid-cols-1 justify-center text-left">
            <label className="mt-2 text-[18px] font-[600] text-[#01384D] sm:mt-3">
              Mahsulotlarni nomini tanlang
            </label>
            <select
              className="mt-1 w-full p-3 sm:mt-0"
              name="nma"
              id=""
              ref={productNamee}
            >
              <option>
                {id
                  ? category &&
                    category.filter((item) => {
                      return item.id == id;
                    })[0].name
                  : ""}
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
            <div className="mt-2 text-[18px] font-[600] text-[#01384D] sm:mt-3">
              Miqdorni kiriting
            </div>
            <div className="zakaz-button mt-1 w-full sm:mt-2 ">
              <span className="w-[25%] p-3" onClick={handleDecrement}>
                -
              </span>
              <span className="w-[50%] p-2">{count}</span>
              <span className="w-[25%] p-2" onClick={handleIncrement}>
                +
              </span>
            </div>
          </div>
          <div className="buttons mt-4 flex justify-center">
            <button type="submit">Yuborish</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Zakaz;
