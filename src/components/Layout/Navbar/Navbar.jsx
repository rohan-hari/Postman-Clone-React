import React from 'react';

// import './navbar.css'

export default function Navbar() {
  return (
    <div className='absolute w-full border-t-4 border-orange-500 bg-white '>
      <div className='border-b border-gray-300'>
        <div className='flex max-w-6xl mx-auto'>
          <span className='py-4 px-4 text-2xl font-semibold text-orange-500'>
            POSTMAN CLONE
          </span>
        </div>
      </div>
    </div>
  );
}
