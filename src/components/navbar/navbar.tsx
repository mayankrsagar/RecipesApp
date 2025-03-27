import React from 'react';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full p-4 mb-4 bg-gray-100 shadow-md sticky top-0 z-10'>
      <Link href={"/recipe-list"}>Recipes</Link>
      <Link href={"/"}>Go Home</Link>
      </div>
  )
}

export default Navbar