import React, { useState } from 'react'
import Authcontext from './Authcontext'


const Authcontextprovider = ({children}) => {

    const [islogin,setIslogin] = useState(false)

     const [cart, setCart] = useState([]);

  const addCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };
  return (
    <div>
        <Authcontext.Provider value={{login:islogin,setIslogin , cart,
        addCart,
        removeCart,}}>
               {children}
        </Authcontext.Provider>
        
      
    </div>
  )
}

export default Authcontextprovider
