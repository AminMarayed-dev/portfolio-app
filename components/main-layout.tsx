"use client";

import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simulate a loading delay for the landing animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5"></div>

      {/* Intro animation */}
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setAnimationComplete(true)}
      >
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key="loader"
          >
            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-24 h-24 border-2 border-green-500 rounded-full relative mb-6"
                initial={{ borderWidth: 2 }}
                animate={{ borderWidth: 4 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <motion.div
                  className="absolute inset-1 bg-green-500/10 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              <motion.h1
                className="text-3xl md:text-4xl font-bold text-green-500 font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Amin Marayed
              </motion.h1>

              <motion.div
                className="h-1 w-0 bg-green-500 mt-2"
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />

              <motion.p
                className="text-sm text-gray-400 mt-4 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                Developer & Designer
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence mode="wait">
        {(!isLoading || animationComplete) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Navbar />
            <main>{children}</main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
