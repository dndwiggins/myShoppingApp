import { useState } from "react";
import { QuantitySelector } from "./quantitySelector";

function CheckOut({subTotal}) {

  

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col gap-4">
      
      {/* subtotal */}
      <div className="flex justify-between text-gray-700">
        <span className="font-medium">Subtotal:</span>
        <span>${subTotal.toFixed(2)}</span>
      </div>

      {/* delivery */}
      <div className="flex justify-between text-gray-700">
        <span className="font-medium">Delivery:</span>
        <span>$20.00</span>
      </div>

      <hr className="my-2" />

      {/* total */}
      <div className="flex justify-between text-lg font-bold text-gray-900">
        <span>Total:</span>
        <span>${(subTotal + 20).toFixed(2)}</span>
      </div>

      {/* checkout button */}
      <button className="mt-4 bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg transition-transform hover:scale-105">
        Checkout
      </button>

    </div>
  );
}



function CartItem({title, image, price, id, setCartItems, subTotal, setSubtotal}) {
  const [count, setCount] = useState(1);

  function removeItem(id){
      setCartItems(prev => prev.filter(item => item.id !== id));
      setSubtotal(subTotal - (count * price))
  }


  return (
    <div className="flex items-center w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4 gap-4">
      
      {/* LEFT: Image */}
      <img
        className="w-20 h-20 rounded-full object-cover"
        src={image}
        alt={title}
      />

      {/* MIDDLE: Title, price + quantity */}
      <div className="flex flex-col justify-center flex-grow">
        <h5 className="text-lg font-semibold text-gray-900 mb-1">{title}</h5>
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-gray-900">${price}</span>
          <QuantitySelector subtotal={subTotal} setSubtotal={setSubtotal} price={price} count={count} setCount={setCount} />
        </div>
      </div>

      {/* RIGHT: Delete button */}
      <button onClick={() => removeItem(id)} className="text-red-500 hover:text-red-700 font-medium">
        Delete
      </button>

    </div>
  );
}

function ItemsInCart({cartItems, setCartItems, subTotal, setSubtotal}){

  if(cartItems){

    return (
    <div className="flex flex-col gap-6 p-4 justify-items-center">
      {cartItems.map((product) => (
        <CartItem
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          cartItems={cartItems}
          setCartItems={setCartItems}
          subTotal={subTotal}
          setSubtotal={setSubtotal}
          
        />

      ))}
    </div>
  );
  }


}

function CartPage({cartItems,setCartItems, subTotal, setSubtotal}){

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-4 pt-20">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl">Cart</h1>
       
    </div>
    <div className="flex flex-row gap-20 items-center">
    <ItemsInCart cartItems={cartItems} setCartItems={setCartItems} setSubtotal={setSubtotal} subTotal={subTotal}></ItemsInCart>
    <CheckOut subTotal={subTotal}></CheckOut>


    </div>

   </div>
  );
}


export { CartItem, CheckOut, CartPage };
