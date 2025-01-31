import React, { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Lazy Load Components
const Html = lazy(() => import("./documentation/Html"));
const CssDucument = lazy(() => import("./documentation/CssDucument"));
const TailwindCSS = lazy(() => import("./documentation/TailwindCSS"));
const BotStrap = lazy(() => import("./documentation/BotStrap"));
const JavaScript = lazy(() => import("./documentation/JavaScript"));
const AdvanceJavaScript = lazy(() => import("./documentation/AdvanceJavaScript"));
const ReactJs = lazy(() => import("./documentation/ReactJs"));

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // State for search bar visibility

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const elements = Array.from(document.querySelectorAll("body *"));
      let found = false;

      elements.forEach((el) => {
        el.style.backgroundColor = ""; // Reset previous highlights
      });

      elements.forEach((el) => {
        if (el.textContent?.toLowerCase().includes(searchQuery.trim().toLowerCase())) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.backgroundColor = ""; // Highlight with yellow color
          found = true;
        }
      });

      if (!found) {
        alert(`No results found for: ${searchQuery}`);
      }
      setSearchQuery("");
    } else {
      alert("Please enter a search term.");
    }
  }, [searchQuery]);

  // Scroll to top on route change
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 px-8 sm:px-16 md:px-24 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo - Left Side */}
          <div className="text-2xl font-bold italic text-green-200">FARHAD</div>

          {/* Search Icon - Center (Mobile Only) */}
          <button
            className="md:hidden"
            onClick={() => setSearchOpen(!searchOpen)}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Menu Icon - Right Side (Mobile Only) */}
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

          {/* Desktop Menu and Search Bar */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-400">HTML</Link>
            <Link to="/css" className="hover:text-gray-400">CSS</Link>
            <Link to="/tailwind" className="hover:text-gray-400">TAILWIND CSS</Link>
            <Link to="/bootstrap" className="hover:text-gray-400">BOOTSTRAP</Link>
            <Link to="/javascript" className="hover:text-gray-400">JAVASCRIPT</Link>
            <Link to="/advance-js" className="hover:text-gray-400">ADVANCE JAVASCRIPT</Link>
            <Link to="/react" className="hover:text-gray-400">REACT JS</Link>

            {/* Search Option */}
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-l-md bg-gray-700 focus:outline-none"
              />
              <button type="submit" className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-500">Go</button>
            </form>
          </div>
        </div>

        {/* Mobile Search Bar (Visible when searchOpen is true) */}
        {searchOpen && (
          <div className="md:hidden mt-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-l-md bg-gray-700 flex-grow focus:outline-none"
              />
              <button type="submit" className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-500">Go</button>
            </form>
          </div>
        )}

        {/* Mobile Menu (Visible when menuOpen is true) */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-gray-900 p-4 rounded">
            <Link to="/" className="block w-full px-4 py-2 hover:bg-gray-700">HTML</Link>
            <Link to="/css" className="block w-full px-4 py-2 hover:bg-gray-700">CSS</Link>
            <Link to="/tailwind" className="block w-full px-4 py-2 hover:bg-gray-700">TAILWIND CSS</Link>
            <Link to="/bootstrap" className="block w-full px-4 py-2 hover:bg-gray-700">BOOTSTRAP</Link>
            <Link to="/javascript" className="block w-full px-4 py-2 hover:bg-gray-700">JAVASCRIPT</Link>
            <Link to="/advance-js" className="block w-full px-4 py-2 hover:bg-gray-700">ADVANCE JAVASCRIPT</Link>
            <Link to="/react" className="block w-full px-4 py-2 hover:bg-gray-700">REACT JS</Link>
          </div>
        )}
      </nav>

      {/* Content Section */}
      <div className="mt-20 p-4">
        <Suspense fallback={<div className="text-center text-xl text-gray-600">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Html />} />
            <Route path="/css" element={<CssDucument />} />
            <Route path="/tailwind" element={<TailwindCSS />} />
            <Route path="/bootstrap" element={<BotStrap />} />
            <Route path="/javascript" element={<JavaScript />} />
            <Route path="/advance-js" element={<AdvanceJavaScript />} />
            <Route path="/react" element={<ReactJs />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <Navbar />
  </Router>
);

export default App;