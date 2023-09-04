/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { useRef, useState } from "react";
=======
import { useRef } from "react";
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
import {
  LoginLockicon,
  LoginManicon,
} from "../assets/style/imgAdmin/IconAdmin";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { data } from "autoprefixer";
import { CrossBtn } from "../assets/style/imgs/icons/icons";
// import { useFetch } from "../hook/useFetch";
// import { useDispatch, useSelector } from "react-redux";

function Login() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState('');
// console.log(data);
=======
// import { data } from "autoprefixer";
// import { useFetch } from "../hook/useFetch";
// import { useDispatch, useSelector } from "react-redux";

function Login({ token, setToken }) {
  // eslint-disable-next-line no-unused-vars
  // const [token, setToken] = useState(false);
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
  const userName = useRef("");
  const userParol = useRef("");

  const loginSubmit = (e) => {
    // e.preventDefault()
<<<<<<< HEAD
    // console.log(token);
=======
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf

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
<<<<<<< HEAD
      .then((data) => setToken(data.token));
      console.log(token);
=======
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", JSON.stringify(data.token));
      });
    //   .then((res) => res.json())
    //   .then((data) => setToken(data.token));
    // console.log("cklicked", data.token);
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
  };

  // const handleLoginSumbit = () => {
  //   e.preventDefault();
  //   let obj = {
  //     userName: userName.current.value,
  //     password: userParol.current.value,
  //   };
  //   console.log(userName);
  //   console.log(obj);
  //   fetch('http://localhost:1212/admin/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(obj),
  //   })
  //     .then((res) => res.json())
  //     .then(data =>{
  //       setToken(data)
  //       localStorage.setItem('token', JSON.stringify(data));
  //     } );
  // };

  return (
    <>
      <div className="container fixed left-0 right-0 top-0 z-30 h-full w-full bg-white">
<<<<<<< HEAD
        <div className="mx-auto mt-28 h-[332px] w-[330px] rounded border  text-center relative ">
          <Link to="/" className=" right-0 rounded overflow-hidden  font-mono absolute">
            <CrossBtn/>
          </Link>
          <h2 className="font-Montserrat pt-5 text-[20px] font-bold">Kirish</h2>
          <form className="pt-[35px]">
=======
        <div className="mx-auto mt-28 h-[332px] w-[330px] rounded border  text-center ">
          <Link to="/" className="ml-[290px] mt-2 w-[20px] font-mono">
            X
          </Link>
          <h2 className="font-Montserrat pt-5 text-[20px] font-bold">Kirish</h2>
          <form className="pt-[23px]">
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
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
<<<<<<< HEAD
                className="button btn mt-14 inline-block h-[50px] w-[270px] rounded bg-[#01384D] p-3 text-gray-100  opacity-70 hover:opacity-100"
=======
                className="button btn mt-14 inline-block h-[50px] w-[270px] rounded bg-[#01384D] p-3 text-gray-100  opacity-70"
>>>>>>> 11a9e73292543a776c16f82d202a5bfbe0891cdf
              >
                {<h3>Kirish</h3>}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
