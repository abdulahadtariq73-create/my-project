import React from 'react';
import Mainlayout from '../component/Mainlayout';
import deal from '../data/deal/deal';

const Deals = () => {
  return (
    <Mainlayout>
      <div className="section-shell py-12">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Offers</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900">Big savings this week</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Handpicked deals on premium electronics and smart devices, all selected for performance and value.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {deal.map((item) => (
            <div key={item.id} className="deal-card overflow-hidden p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-red-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  {item.h3}
                </span>
                <span className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                  Save 20%
                </span>
              </div>

              <img src={item.image1} alt={item.Paragraph} className="h-64 w-full rounded-2xl object-cover" />

              <div className="mt-4">
                <h2 className="text-lg font-bold text-slate-900">{item.Paragraph}</h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-sm text-slate-400 line-through">{item.pkr1}</span>
                  <span className="text-sm font-bold text-red-600">{item.pkr2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Mainlayout>
  );
};

export default Deals;
