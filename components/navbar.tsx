"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Projects", "/#projects"],
    ["Contact", "/#contact"],
  ];

  // Function to handle resume download
  const handleResumeDownload = async () => {
    try {
      // Set downloading state to true
      setIsDownloading(true);

      // Replace with your actual resume file path
      const resumeUrl = "/amin_marayed.pdf";

      // Fetch the file to check if it exists
      const response = await fetch(resumeUrl);

      if (!response.ok) {
        throw new Error("Resume file not found");
      }

      // Create a blob from the response
      const blob = await response.blob();

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "amin_marayed.pdf");

      // Append to the document, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the URL
      window.URL.revokeObjectURL(url);

      // Show success toast if available
      toast.success("Resume download started!");
    } catch (error) {
      console.error("Download error:", error);
      // Show error toast if available
      toast.error("Could not download resume. Please try again later.");
    } finally {
      // Set downloading state back to false
      setIsDownloading(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-green-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-green-500 font-mono text-xl font-bold group flex items-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-block mr-1"
          >
            {">"}
          </motion.span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.5 }}
            className="inline-block"
          >
            _
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="inline-block"
          >
            dev
          </motion.span>
          <motion.div
            className="h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300 mt-1 ml-1"
            whileHover={{ width: "100%" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(([title, url], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={url}
                className="px-3 py-2 text-sm font-mono text-gray-300 hover:text-green-400 transition-colors relative group"
              >
                <span>{title}</span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-green-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              variant="outline"
              className="ml-4 font-mono text-xs border-green-500 text-green-500 hover:bg-green-500/10 hover:scale-105 transition-all duration-300"
              onClick={handleResumeDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Downloading...
                </span>
              ) : (
                <span className="flex items-center">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Resume
                </span>
              )}
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-green-500 hover:bg-green-500/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ rotate: 90 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </motion.svg>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              ref={menuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-4/5 max-w-xs bg-black border-l border-green-500/20 p-6 z-50 overflow-y-auto"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map(([title, url], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center py-3 px-2 text-base font-mono text-gray-300 hover:text-green-400 transition-colors relative border-b border-green-500/10 group"
                    >
                      <span className="text-green-500 mr-3 opacity-60">$</span>
                      <span>{title}</span>
                      <motion.div
                        className="absolute bottom-0 left-0 h-[1px] w-0 bg-green-500/50"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Button
                    variant="outline"
                    className="w-full mt-2 font-mono text-sm border-green-500 text-green-500 hover:bg-green-500/10"
                    onClick={() => {
                      handleResumeDownload();
                      setMobileMenuOpen(false);
                    }}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Downloading...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <svg
                          className="mr-2 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Download Resume
                      </span>
                    )}
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-4 border-t border-green-500/10 text-xs text-gray-500 font-mono"
                >
                  <p className="flex items-center mb-2">
                    <span className="text-green-500 mr-2">$</span>
                    <span className="typing-animation">
                      contact@aminmarayed.com
                    </span>
                  </p>
                  <div className="flex space-x-4 mt-4 justify-center">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
