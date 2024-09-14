"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  // Update currentPath whenever the route changes
  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  // Toggle mobile navigation menu
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile navigation menu
  const closeNav = () => {
    setIsMenuOpen(false);
  };

  const items = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About Us" },
    { href: "/services", title: "Services" },
    { href: "/projects", title: "Projects" },
    { href: "/technologies", title: "Technologies" },
    { href: "/contact", title: "Contact" },
  ];

  return (
    <>
      {/* Mobile Navbar */}
      <div className="lg:hidden bg-transparent shadow-md sticky top-0 z-50 p-4 flex justify-between items-center">
        <p className="text-xl font-bold text-gray-100">WeSol.</p>
        <button onClick={toggleNav} className="focus:outline-none">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-100"
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
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="fixed top-0 right-0 bg-gray-900 shadow-lg p-6 w-3/4 min-h-screen transition-transform transform translate-x-0 lg:hidden z-40">
          <div className="flex flex-col gap-4 font-semibold text-gray-300 mt-16">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`w-full px-4 py-2 rounded-md ${
                  currentPath === item.href
                    ? "bg-gray-700"
                    : "hover:bg-gray-800"
                }`}
                onClick={closeNav}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex sticky top-0 bg-gray-900 shadow-md p-6 w-full justify-between items-center z-50">
        <p className="text-2xl font-bold text-gray-100">WeSol.</p>
        <div className="flex gap-8 font-semibold text-gray-300">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${
                currentPath === item.href
                  ? "text-indigo-400"
                  : "hover:text-indigo-500"
              } transition-colors duration-300`}
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
