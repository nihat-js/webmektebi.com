// components/Navbar.js

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">KodMektebi</a>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/html" className="hover:text-gray-400">HTML</a>
          <a href="/css" className="hover:text-gray-400">CSS</a>
          <a href="/php" className="hover:text-gray-400">PHP</a>
          <a href="/javascript" className="hover:text-gray-400">JavaScript</a>
          <a href="/jsx" className="hover:text-gray-400">JSX</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <a href="/html" className="block text-gray-300 hover:text-white">HTML</a>
          <a href="/css" className="block text-gray-300 hover:text-white">CSS</a>
          <a href="/php" className="block text-gray-300 hover:text-white">PHP</a>
          <a href="/javascript" className="block text-gray-300 hover:text-white">JavaScript</a>
          <a href="/jsx" className="block text-gray-300 hover:text-white">JSX</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
