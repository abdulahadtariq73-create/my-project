import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Authcontext from "../context/Authcontext";


export default function Navbar() {
  const {cart} = useContext(Authcontext)
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);


  return (
    <nav className="bg-slate-700 text-white relative py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-20 ">

        

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-14 ">
            <li className="hover:bg-blue-600 transition px-6 py-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-blue-600 transition px-6 py-2">
              <Link to="/deals">Deals</Link>
            </li>
            <li className="hover:bg-blue-600 transition px-6 py-2">
              <Link to="/featured">Featured</Link>
            </li>
             <li className="hover:bg-blue-600 transition px-2 py-2">
              <Link to="/featured">New Arrivals</Link>
            </li>
             <li className="hover:bg-blue-600 transition px-6 py-2">
              <Link to="/featured">Best Saller</Link>
            </li>


              <li className="hover:bg-blue-600 transition px-6 py-2">
              <Link to="/featured">Most Viewed </Link>
            </li>

            <li className="flex items-center relative">
              <FaCartShopping size={24}/>
      <span className="absolute top-0 left-full -translate-x-1/4 -translate-y-1/2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
  {cart?.length}
</span>
            </li>


             <li className="hover:bg-blue-600 transition px-6 py-2">
              <Link to="/Login">Login </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            <FaBars size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden pb-4">
            <ul className="space-y-3">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/deals">Deals</Link>
              </li>

              <li>
                <Link to="/featured">Featured</Link>
              </li>

           
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}