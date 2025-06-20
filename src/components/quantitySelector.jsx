import { useState } from "react";

function QuantitySelector({count, setCount, subtotal, setSubtotal, price}) {
  

  function incrementCount() {
    setCount(count + 1);
    setSubtotal(subtotal + price)
  }

  function decrementCount() {
    if(count > 1){
        setCount(count - 1);
        setSubtotal(subtotal - price)
    }
  }

  return (
    <div className="w-20 h-10 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
      <button
        className="bg-gray-200 text-gray-700 rounded-md px-3 py-1 hover:bg-gray-300"
        onClick={decrementCount}
      >
        -
      </button>
      <div className="w-10 text-center text-lg font-semibold text-gray-700">{count}</div>
      

      <button
        className="bg-gray-200 text-gray-700 rounded-md px-3 py-1 hover:bg-gray-300"
        onClick={incrementCount}
      >
        +
      </button>
      
    </div>
  );
}

export { QuantitySelector };
