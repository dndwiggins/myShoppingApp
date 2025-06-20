import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
 

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-4 pt-20">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-3xl">Welcome to my mock store!</h1>
        <h2 className="text-lg">
          This is just a mock shopping app made for practice purposes.
        </h2>
        <h3 className="text-base">
          Browse all these amazing fake products. No money required!
        </h3>
      </div>
       <Link
        to="/shop"
        className="text-white text-2xl font-bold bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-400 transition-colors shadow"
      >
        Explore Products
      </Link>

    </div>
  );
}

export { Home };
