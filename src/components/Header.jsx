import React from 'react'
import bag from './assets/bag.svg'

function Header() {
  const menuItems = [
    {
      id: 1,
      name: 'Home',
    },
    {
      id: 2,
      name: 'Shop',
    },
    {
      id: 3,
      name: 'Contact',
    },
    {
      id: 4,
      name: 'Help',
    },
  ]
  return (
    <div className="flex flex-row justify-between items-center p-[35px] border-b border-[#dfdfdf] ">
      <div className="grid grid-flow-col items-center gap-[75px]">
        <p className="font-black text-[22px] text-black opacity-70 lg:pr-[202px] cursor-pointer">
          checkout.
        </p>
        {menuItems.map((item) => (
          <p className="lg:block hidden font-medium text-[16px] text-[#4A5568] cursor-pointer">
            {item.name}
          </p>
        ))}
      </div>

      <div className="grid grid-flow-col justify-center items-center lg:gap-[75px] gap-[25px]">
        <p className="font-medium text-[16px] text-[#4A5568] cursor-pointer">
          Account
        </p>
        <p className="grid grid-flow-col gap-2">
          <img width="24px" height="24px" className='cursor-pointer' src={bag} alt={bag} />
          <span className='lg:block hidden font-medium text-[16px] text-[#4A5568]'>3 items</span>
        </p>
      </div>
    </div>
  )
}

export default Header
