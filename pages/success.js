import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Your order is successfully placed!</h2>
        <p className="email-msg">Thank you for shopping with us!</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:orders@seed-store.com">
            orders@seed-store.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Shop More!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success