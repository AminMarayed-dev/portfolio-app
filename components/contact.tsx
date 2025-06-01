"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    isSubmitting: false,
    isSubmitted: false,
    error: null as string | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }));

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSubmitted: true,
        name: "",
        email: "",
        message: "",
      }));
    } catch {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: "There was an error sending your message. Please try again.",
      }));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-green-500">
            <span className="text-white">&lt;</span> Contact{" "}
            <span className="text-white">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Interested in working together? Send me a message and let&apos;s
            discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <Card className="p-6 border border-green-500/20 bg-black/40 backdrop-blur-sm font-mono">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  &gt; Connect with me
                </h3>

                <div className="space-y-4">
                  <a
                    href="mailto:aminmarayed4@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    aminmarayed4@example.com
                  </a>

                  <a
                    href="https://github.com/AminMarayed-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
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
                    github.com/AminMarayed-dev
                  </a>

                  <a
                    href="https://www.linkedin.com/in/amin-marayed-62a98b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
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
                    linkedin.com/in/amin-marayed
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">
                  &gt; Location
                </h3>
                <p className="text-gray-300">Iran • Tehran</p>
              </div>
            </div>
          </Card>

          <div>
            {formState.isSubmitted ? (
              <Card className="p-6 border border-green-500/20 bg-black/40 backdrop-blur-sm text-center">
                <div className="mb-4 text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">
                  Message Sent!
                </h3>
                <p className="text-gray-300 font-mono">
                  Thanks for reaching out. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <Button
                  className="mt-4 bg-green-500 hover:bg-green-600 text-black font-mono"
                  onClick={() =>
                    setFormState((prev) => ({ ...prev, isSubmitted: false }))
                  }
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1 font-mono"
                  >
                    &gt; Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-black/40 border border-green-500/20 rounded-md text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1 font-mono"
                  >
                    &gt; Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-black/40 border border-green-500/20 rounded-md text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500"
                      placeholder=""
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1 font-mono"
                  >
                    &gt; Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full p-3 bg-black/40 border border-green-500/20 rounded-md text-white font-mono focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500"
                      placeholder="Hello, I'd like to talk about..."
                    />
                  </div>
                </div>

                {formState.error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 font-mono text-sm">
                    {formState.error}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-black font-mono relative overflow-hidden group"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
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
                      Sending...
                    </span>
                  ) : (
                    <span>Send Message</span>
                  )}
                  <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
