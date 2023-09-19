import { useRef, useState } from "react";
import {
  LoginLockicon,
  LoginManicon,
} from "../assets/style/imgAdmin/IconAdmin";
import { Link } from "react-router-dom";

import { CrossBtn } from "../assets/style/imgs/icons/icons";

function Login() {
  const [token, setToken] = useState("");

  const userName = useRef("");
  const userParol = useRef("");

  const loginSubmit = (e) => {
    const obj = {
      userName: userName.current.value,
      password: userParol.current.value,
    };
    fetch("http://localhost:1212/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token));
    console.log(token);
  };

  return (
    <>
      <div className="container  fixed left-0 right-0 top-0 z-30 h-full w-full bg-white">
        <div className="relative mx-auto mt-28  w-[330px] rounded border   text-center ">
          <Link
            to="/"
            className=" absolute right-0 overflow-hidden  rounded font-mono"
          >
            <CrossBtn />
          </Link>
          <h2 className="font-Montserrat pt-5 text-[20px] font-bold">Kirish</h2>
          <form className="pt-[35px]">
            <div className="relative">
              <span className="absolute left-9 top-3">
                <LoginManicon />
              </span>
              <input
                ref={userName}
                className="h-[50px] w-[270px] rounded border pl-8"
                type="text"
                placeholder="Login"
              />
            </div>
            <div className="relative">
              <span className="absolute left-9 top-8">
                <LoginLockicon />
              </span>
              <input
                ref={userParol}
                className="mt-4 h-[50px] w-[270px] rounded border pl-8"
                type="password"
                placeholder="Parol"
              />
            </div>
            <Link to={token && "/admin"}>
              <button
                onClick={() => loginSubmit()}
                type="submit"
                className="button btn mb-10 mt-14 inline-block h-[50px] w-[270px] rounded bg-[#01384D] p-3 text-gray-100  opacity-70 hover:opacity-100"
              >
                <h3 className="italic">Kirish</h3>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
