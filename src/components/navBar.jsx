import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-100">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        
        <Link to="/" className="text-2xl font-poppins font-bold text-white bg-blue-500 rounded-xl px-4 py-2 shadow-sm hover:bg-blue-400 transition-colors">
          My Shopping Cart
        </Link>

        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="text-white text-2xl font-bold bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-400 transition-colors shadow-sm"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shop"
              className="text-white text-2xl font-bold bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-400 transition-colors shadow-sm"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-white text-2xl font-bold bg-blue-500 rounded-lg px-4 py-2 hover:bg-blue-400 transition-colors shadow-sm"
            >
              Cart
            </Link>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export { NavBar };






