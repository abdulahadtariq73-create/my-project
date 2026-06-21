import React from 'react'
 import Sidebar from "../component/Sidebar"
import { Outlet } from 'react-router-dom'
const Dashboardlayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-5">
        <Sidebar/>
      </aside>

      {/* Main Content */}
    
      <main className="flex-1 p-6 bg-gradient-to-l from-black to-gray-500">
        <Outlet/>
      </main>
    </div>
  )
}

export default Dashboardlayout
