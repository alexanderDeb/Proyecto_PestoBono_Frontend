import React from "react";
import Navbar from "../components/navbar";
import ListView from "../components/listView";

export default function DashBoard() {
  
  return (
    <div>
      <Navbar />
      <div className="flex justify-center content-center items-center pt-96 lg:pt-0 h-screen">
        <div className="w-full">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Customers also purchased
            </h2>
            <ListView/>
          </div>
        </div>
      </div>
    </div>
  );
}
