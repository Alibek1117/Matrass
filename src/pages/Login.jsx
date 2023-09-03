/* eslint-disable react/prop-types */
import { useRef } from "react";
import {
  LoginLockicon,
  LoginManicon,
} from "../assets/style/imgAdmin/IconAdmin";
import { Link } from "react-router-dom";
// import { data } from "autoprefixer";
// import { useFetch } from "../hook/useFetch";
// import { useDispatch, useSelector } from "react-redux";

function Login({ token, setToken }) {
  // eslint-disable-next-line no-unused-vars
  // const [token, setToken] = useState(false);
  const userName = useRef("");
  const userParol = useRef("");

  const loginSubmit = (e) => {
    // e.preventDefault()

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
      .then((data) => {
        setToken(data.token);
        localStorage.setItem("token", JSON.stringify(data.token));
      });
    //   .then((res) => res.json())
    //   .then((data) => setToken(data.token));
    // console.log("cklicked", data.token);
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
        <div className="mx-auto mt-28 h-[332px] w-[330px] rounded border  text-center ">
          <Link to="/" className="ml-[290px] mt-2 w-[20px] font-mono">
            X
          </Link>
          <h2 className="font-Montserrat pt-5 text-[20px] font-bold">Kirish</h2>
          <form className="pt-[23px]">
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
                type="text"
                placeholder="Parol"
              />
            </div>
            <Link to={token && "/admin"}>
              <button
                onClick={() => loginSubmit()}
                type="submit"
                className="button btn mt-14 inline-block h-[50px] w-[270px] rounded bg-[#01384D] p-3 text-gray-100  opacity-70"
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
