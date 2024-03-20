import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  //El uso del custom hook es const {Data, Error} = useFetch(url)

  let navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handlerSubmit = () => {
    sessionStorage.setItem("email", Email);
    sessionStorage.setItem("password", Password);
    navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    document.title = "Login - pesto bono";
  }, []);

  return (
    <div className="flex md:flex-row h-screen w-full">
      <div
        className=" w-0 md:w-1/2 hidden md:flex"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/4011981/pexels-photo-4011981.jpeg?auto=compress&cs=tinysrgb&w=5000&h=750&dpr=3)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
      </div>
      <div className="flex justify-center content-center items-center w-full md:w-1/2 px-10 xl:px-20">
        <form
          className="md:h-3/4 xl:h-1/2 card-body bg-neutral shadow-xl rounded-md"
          onSubmit={handlerSubmit}
        >
          <h1 className="text-4xl text-center pb-10 font-bold">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="mt-1 block w-full px-3 py-2 bg-none border border-black rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control space-y-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="mt-1 block w-full px-3 py-2 bg-none border border-black rounded-md text-sm shadow-sm placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex flex-row justify-between pt-1">
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Olvidaste tu contraseña?
                </a>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Ya tienes una cuenta
                </a>
              </label>
            </div>
          </div>
          <div className="form-control mt-4">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
