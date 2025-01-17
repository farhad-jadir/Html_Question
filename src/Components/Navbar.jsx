import React, { useState } from 'react';
import Html from './documentation/Html';
import CssDucument from './documentation/CssDucument';

const Navbar = () => {
  const [currentContent, setCurrentContent] = useState(<Html />);
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (component) => {
    setCurrentContent(component);
    setMenuOpen(false); // Close the menu on item click (for small devices)
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const elements = Array.from(document.querySelectorAll('body *'));
      let found = false;

      elements.forEach((el) => {
        el.style.backgroundColor = ''; // Reset previous highlights
      });

      elements.forEach((el) => {
        if (el.textContent?.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.backgroundColor = ''; // Highlight with orange color
          found = true;
        }
      });

      if (!found) {
        alert(`No results found for: ${searchQuery}`);
      }
      setSearchQuery('');
    } else {
      alert('Please enter a search term.');
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 px-8 sm:px-16 md:px-24 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold italic text-green-200">FARHAD</div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Menu for Desktop */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => handleMenuClick(<Html />)} className="hover:text-gray-400">HTML</button>
            <button onClick={() => handleMenuClick(<CssDucument />)} className="hover:text-gray-400">CSS</button>
            <button onClick={() => handleMenuClick(<Html />)} className="hover:text-gray-400">BOOTSTRAP</button>
            <button onClick={() => handleMenuClick(<Elements />)} className="hover:text-gray-400">TAILWIND</button>
            <button onClick={() => handleMenuClick(<Html />)} className="hover:text-gray-400">JAVASCRIPT</button>
            <button onClick={() => handleMenuClick('React Documentation')} className="hover:text-gray-400">REACT</button>

            {/* Search Option */}
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-l-md bg-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-500"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-gray-900 p-4 rounded">
            <button onClick={() => handleMenuClick(<Html />)} className="block w-full px-4 py-2 hover:bg-gray-700">HTML</button>
            <button onClick={() => handleMenuClick(<CssDucument />)} className="block w-full px-4 py-2 hover:bg-gray-700">CSS</button>
            <button onClick={() => handleMenuClick(<Html />)} className="block w-full px-4 py-2 hover:bg-gray-700">BOOTSTRAP</button>
            <button onClick={() => handleMenuClick('Tailwind Documentation')} className="block w-full px-4 py-2 hover:bg-gray-700">TAILWIND</button>
            <button onClick={() => handleMenuClick('JavaScript Documentation')} className="block w-full px-4 py-2 hover:bg-gray-700">JAVASCRIPT</button>
            <button onClick={() => handleMenuClick('React Documentation')} className="block w-full px-4 py-2 hover:bg-gray-700">REACT</button>

            {/* Search Option for Mobile */}
            <form onSubmit={handleSearch} className="flex mt-4">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-l-md bg-gray-700 flex-grow focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-500"
              >
                Go
              </button>
            </form>
          </div>
        )}
      </nav>

      {/* Content Section */}
      <div className="mt-20 p-4">
        {currentContent}
      </div>
    </div>
  );
};

export default Navbar;
