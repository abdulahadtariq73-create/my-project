import React, { useContext } from 'react';
import Mainlayout from '../component/Mainlayout';
import Authcontext from '../context/Authcontext';

const Cart = () => {
  const { cart } = useContext(Authcontext);

  return (
    <Mainlayout>
      <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Your cart</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Shopping bag</h1>
        </div>

        {cart && cart.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cart.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img src={item.image} alt={item.name} className="h-56 w-full object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-slate-900">{item.name}</h2>
                  <p className="mt-2 text-red-500">PKR {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
            <p className="mt-2 text-slate-600">Add some products to see them here.</p>
          </div>
        )}
      </div>
    </Mainlayout>
  );
};

export default Cart;
