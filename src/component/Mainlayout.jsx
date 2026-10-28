import React from 'react';
import Navbar from '../component/Navbar';

const Mainlayout = ({ children, cart = [] }) => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Navbar cart={cart} />
      <main className="min-h-[calc(100vh-140px)]">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-3 lg:px-6">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">GadgetZone</h3>
            <p className="text-sm text-slate-300">
              Modern technology and trusted deals for everyday living.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Audio</li>
              <li>Camera</li>
              <li>Cell Phones</li>
              <li>Deals</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Contact us</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mainlayout;
