import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Authcontext from "../context/Authcontext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/deals", label: "Deals" },
  { to: "/featured", label: "Featured" },
  { to: "/audioproducts", label: "Audio" },
  { to: "/cameras", label: "Cameras" },
  { to: "/cellphone", label: "Cell Phones" },
];

export default function Navbar() {
  const { cart } = useContext(Authcontext);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 text-lg font-black text-white shadow-lg">
            G
          </span>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">GadgetZone</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-slate-500">Smart tech</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? "bg-slate-900 text-white shadow" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-100 p-3 text-slate-800 transition hover:border-slate-300 hover:bg-white"
          >
            <FaCartShopping size={18} />
            <span className="absolute -right-2 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {cart?.length ?? 0}
            </span>
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileMenu((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-3 text-slate-800 lg:hidden"
        >
          {mobileMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex items-center justify-between gap-3 pt-2">
              <Link to="/cart" onClick={() => setMobileMenu(false)} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <FaCartShopping size={16} /> Cart ({cart?.length ?? 0})
              </Link>
              <Link to="/login" onClick={() => setMobileMenu(false)} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
