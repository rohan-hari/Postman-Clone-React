import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className='flex max-w-6xl min-h-screen pt-[86px] mx-auto px-5 bg-white '>
          <div className='mx-auto w-full'>{children}</div>
        </div>
      </main>
    </>
  );
}
