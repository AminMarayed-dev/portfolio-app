"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "I build beautiful digital experiences.";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text.length > 0) {
        const timeout = setTimeout(() => {
          setText(text.slice(0, text.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [text, isTyping, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background with grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl order-2 md:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="text-green-500 font-mono">Hello World,</span>
              <br />
              <span className="font-mono">
                I&apos;m <span className="text-green-400">Amin Marayed</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="h-12 md:h-16 mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-mono">
                {text}
                <span className="inline-block w-3 h-6 bg-green-500 ml-1 animate-blink"></span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-400 mb-8 max-w-2xl font-mono text-sm md:text-base"
            >
              Frontend developer focused on creating elegant and performant web
              applications with clean code and pixel-perfect designs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="bg-green-500 hover:bg-green-600 text-black font-mono"
              >
                <Link href="/#projects">View My Work</Link>
              </Button>

              <Button
                variant="outline"
                asChild
                className="border-green-500 text-green-500 hover:bg-green-500/10 font-mono"
              >
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>

          {/* Profile Image with effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px]">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl animate-pulse"></div>

              {/* Border effect */}
              <div className="absolute inset-0 rounded-full border-2 border-green-500/50 animate-spin-slow"></div>

              {/* Image container with mask */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-green-500/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/profile.jpg"
                    alt="Amin Marayed"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-500"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
