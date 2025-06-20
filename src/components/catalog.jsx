import { useState, useEffect } from "react";
import { CartItem } from "./cart";


function Card({id, title, description, image, price, cartItems,setCartItems, subTotal, setSubtotal}) {


  function addToCart() {
  
   const exists = cartItems.some(item => item.id === id);

  if (exists) {
    alert("Item already in cart");
  } else {
    setCartItems(prev => [
      ...prev,
      { id, title, price, image, quantity: 1 }
    ]);
    setSubtotal(subTotal + price)
  }
}

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm p-4">
      <img className="rounded-t-lg mb-4" src={image} alt="product" />
      <h5 className="text-lg font-semibold text-gray-900 mb-2">{title}</h5>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">${price}</span>
        <button onClick={addToCart} className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600">
          Add to cart
        </button>
      </div>
    </div>
  );
}



function Catalog({cartItems, setCartItems, subTotal, setSubtotal}){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log(data);
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []); // empty dependency array = run once on mount


  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 justify-items-center">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
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


export { Card, Catalog };


