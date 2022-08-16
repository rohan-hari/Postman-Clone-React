import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='border-t-4 border-orange-500 bg-white '>
        <div className='border-b border-gray-300'>
          <div className='flex max-w-6xl mx-auto px-8'>
            <Link to='/' className='flex py-4'>
              <span className='font-semibold text-orange-600 text-2xl'>
                POSTMAN CLONE
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
