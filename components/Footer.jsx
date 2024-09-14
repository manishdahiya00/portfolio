import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300">
        <hr />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <p className="mt-4 text-base leading-6">
                WeSol is dedicated to providing exceptional web and mobile
                development solutions. Our mission is to drive success through
                innovative technology and customer satisfaction.
              </p>
              <p className="mt-4 text-base leading-6">
                <strong>Address:</strong>
                <br />
                1234 Web Dev Lane
                <br />
                Tech City, TC 56789
              </p>
              <p className="mt-2 text-base leading-6">
                <strong>Email:</strong>
                <br />
                <a
                  href="mailto:contact@wesol.com"
                  className="text-indigo-400 hover:underline"
                >
                  contact@wesol.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/projects"
                    className="text-gray-400 hover:text-white"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="mt-4 flex space-x-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.016 8.294c.014.2.014.4.014.601 0 6.12-4.662 13.188-13.188 13.188a4.4 4.4 0 0 0 3.237-1.229c-1.632-.036-3.016-.572-4.204-1.511-.795.063-1.548.059-2.33-.153a4.388 4.388 0 0 0 3.558-4.35v-.056a4.451 4.451 0 0 0 1.972-.54 4.489 4.489 0 0 1-1.193 1.134 4.473 4.473 0 0 1-1.92.555 4.453 4.453 0 0 0-4.497-4.472 4.473 4.473 0 0 0-2.673.918 4.507 4.507 0 0 1-.184-1.128A4.49 4.49 0 0 1 12.368 0a4.469 4.469 0 0 1 4.317 3.417 8.957 8.957 0 0 0 6.207-2.039 4.456 4.456 0 0 1-1.979 2.47 8.937 8.937 0 0 0 2.583-.705 8.95 8.95 0 0 1-2.23 2.328z"
                    />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2.25c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2.25 12 2.25zm0-1.5C5.37.75 0 6.12 0 12s5.37 11.25 11.25 11.25S22.5 17.88 22.5 12 17.13.75 12 .75zm0 1.5c5.14 0 9.25 4.11 9.25 9.25S17.14 19.75 12 19.75 2.75 15.64 2.75 10.5 6.86 2.25 12 2.25zm0 4.5a2.75 2.75 0 0 0-2.75 2.75v1.5h-1.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 .75.75h1.5v4.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 .75-.75v-4.5h1.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-1.5v-1.5a2.75 2.75 0 0 0-2.75-2.75z"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3v6H9v-6zm0-3.75h3v2.5H9v-2.5zm-4.5 8.25h3V9h-3v8.25zM3.75 9.75c.75 0 1.5-.75 1.5-1.5s-.75-1.5-1.5-1.5-1.5.75-1.5 1.5.75 1.5 1.5 1.5zM21 21h-3V13.5c0-1.5-1.5-1.5-1.5-1.5h-3v8.25h3v6h-3v-6h-1.5v6H3v-6H0v6h21v-1.5h0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-base leading-6 text-gray-400">
              © 2024 WeSol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
