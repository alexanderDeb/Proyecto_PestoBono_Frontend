import React from "react";
import {useNavigate} from "react-router-dom"

export default function Navbar() {

  let navigate = useNavigate();


  return (
    <div className="flex navbar justify-between absolute p-10">
      <a className="btn btn-ghost text-xl">Pesto Bono</a>
      {sessionStorage.getItem("email") ? (
        <div className="avatar px-4">
          <div className="w-16 rounded-xl">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      ) : (
        <div className="flex space-x-4 p-2">
          <button className="btn text-neutral-950 hover:text-neutral-50 bg-BTN" onClick={()=>{navigate()}}>Sing in</button>
          <button className="btn text-neutral-950 hover:text-neutral-50 bg-BTN" onClick={()=>{navigate("/login", { replace: true })}}>Login</button>
        </div>
      )}
    </div>
  );
}
