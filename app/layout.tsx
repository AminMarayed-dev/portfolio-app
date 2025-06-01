import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amin Marayed | Developer Portfolio",
  description:
    "Frontend developer focused on creating elegant and performant web applications with clean code and pixel-perfect designs.",
  keywords: [
    "developer",
    "frontend",
    "portfolio",
    "react",
    "next.js",
    "web development",
  ],
  authors: [{ name: "Amin Marayed" }],
  creator: "Amin Marayed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aminmarayed.com",
    title: "Amin Marayed | Developer Portfolio",
    description:
      "Frontend developer specialized in creating elegant and performant web applications",
    siteName: "Amin Marayed Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(0, 0, 0, 0.9)",
              color: "#4ade80",
              border: "1px solid rgba(74, 222, 128, 0.2)",
            },
          }}
        />

        {/* Custom cursor (optional) */}
        <div
          id="cursor"
          className="fixed w-6 h-6 rounded-full border border-green-500 pointer-events-none z-50 opacity-0 transition-opacity duration-300"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>

        {children}

        {/* Page transition script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', () => {
              // Custom cursor effect
              const cursor = document.getElementById('cursor');
              
              if (cursor) {
                document.addEventListener('mousemove', (e) => {
                  cursor.style.left = e.clientX + 'px';
                  cursor.style.top = e.clientY + 'px';
                  cursor.style.opacity = '1';
                });
                
                document.addEventListener('mouseleave', () => {
                  cursor.style.opacity = '0';
                });
                
                // Add pulse effect on click
                document.addEventListener('mousedown', () => {
                  cursor.classList.add('scale-150');
                  setTimeout(() => cursor.classList.remove('scale-150'), 300);
                });
              }
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
