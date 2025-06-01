"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-green-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="text-green-500 font-mono text-xl font-bold mb-4 inline-block"
            >
              <span className="inline-block mr-1">{">"}</span>
              <span className="inline-block animate-pulse">_</span>
              <span className="inline-block">dev</span>
            </Link>
            <p className="text-gray-400 text-sm font-mono max-w-xs">
              Building beautiful and functional digital experiences with clean
              code and pixel-perfect design.
            </p>
          </div>

          <div>
            <h3 className="text-white font-mono text-sm font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-mono text-sm">
              {[
                ["Home", "/"],
                ["About", "/#about"],
                ["Projects", "/#projects"],
                ["Contact", "/#contact"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center"
                  >
                    <span className="text-green-500 mr-2">$</span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-mono text-sm font-bold mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AminMarayed-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/amin-marayed-62a98b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-green-500/10 text-center">
          <p className="text-gray-400 text-xs font-mono">
            <span className="text-green-500">©</span> {currentYear} Your Name.
            All rights reserved.
          </p>
          <p className="text-gray-500 text-xs font-mono mt-1">
            <span className="inline-block animate-pulse">|</span> Built with
            Next.js, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
