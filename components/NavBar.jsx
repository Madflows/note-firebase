import React from 'react'
import Link from 'next/link'

import { FaHome, FaBolt, FaShoppingCart } from 'react-icons/fa'

const NavBar = () => {
  const menu = [
    {
      icon: FaHome,
      to: '/'
    },
    {
      icon: FaBolt,
      to: '/'
    },
    {
      icon: FaShoppingCart,
      to: '/'
    },
  ]
  return (
    <nav class="flex w-full items-center justify-between py-3 px-4">
      <Link href="/">
        <div className="flex items-center justify-center gap-1">
          <span className="font-black bg-slate-700 w-sm text-white rounded-md px-2 py-2">
            B
          </span>
          <span>Blog</span>
        </div>
      </Link>
      <div className="flex gap-2 [& > *]:p-3">
        {
          menu.map((item, index) => (
            <NavMenu key={index} icon={item.icon} to={item.to} />
          ))
        }
      </div>
    </nav>
  );
}

const NavMenu = ({icon, to}) => {
  return (
    <Link href={to}>
      <icon className="bg-slate-50 rounded-sm p-3" />
    </Link>
  );
}

export default NavBar
