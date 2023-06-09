import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={<AiFillHome className='text-2*1 sm:hidden mx-4' />} />
        <MenuItem title="ABOUT" address="/about" Icon={<BsFillInfoCircleFill className='text-2*1 sm:hidden mx-4' />} />
      </div>
      <div className="flex item-center space-x-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>movie</span>
            <span className='text-xl hidden sm:inline'>clone</span>
          </h2>
        </Link>
      </div>
    </div>
  )
}
