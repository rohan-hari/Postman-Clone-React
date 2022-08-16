import React from 'react';
import Navbar from './Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className='max-w-6xl mx-auto pt-6 bg-white'>{children}</div>
      </main>
    </>
  );
}
