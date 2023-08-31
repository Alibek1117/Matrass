import { LoginLockicon, LoginManicon } from "../assets/style/imgAdmin/IconAdmin";

function Login() {
  return (
    <>
      <div className="container">
        <div className="mx-auto mt-28 h-[332px] w-[330px] border  text-center ">
          <h2 className="font-Montserrat pt-5 text-[20px] font-bold">Kirish</h2>
          <form className="pt-[35px]">
            <div className="relative">
              <span className="absolute left-9 top-4">
                <LoginManicon />
              </span>
              <input
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
                className="mt-4 h-[50px] w-[270px] rounded border pl-8"
                type="text"
                placeholder="Parol"
              />
            </div>
            <button className=" btn mt-14 inline-block h-[50px] w-[270px] rounded bg-[#01384D] p-3 text-gray-100  opacity-70">
              Kirish
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login