import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import Button from "../components/button";
import GridFood from "../components/gridFood";

export default function HomePage() {
  let navigate = useNavigate();

  const handlerButton = () => {
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    document.title = "Home - pesto bono";
  }, []);

  

  return (
    <div className="flex justify-center content-center h-screen">
      <Navbar />
      <GridFood/>
    </div>
  );
}
