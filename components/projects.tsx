"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Terminal } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lexeme AI Landing Page",
    description:
      "A landing page for Lexeme AI, a platform that provides AI-powered language learning tools. This project is for Asr Goyesh company.",
    codeSnippet: `import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useTranslation();
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="hero-container"
    >
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </motion.section>
  );
}`,
    language: "jsx",
    color: "#61dafb", // React blue
    tags: [
      "React",
      "TypeScript",
      "React Query",
      "React Hook Form",
      "Tailwind CSS",
      "Framer Motion",
      "Hero UI",
      "i18next",
      "Swiper.js",
    ],
    demo: "https://lexemeai.com",
    featured: true,
  },
  {
    id: 2,
    title: "Panel Lexeme AI",
    description:
      "Panel for Lexeme AI, a platform that provides AI-powered language learning tools. This project is for Asr Goyesh company.",
    codeSnippet: `import { useState } from 'react';
import { useQuery } from 'swr';
import { Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { fetchUsers } from '../api';

export default function UsersPanel() {
  const { data, error, isLoading } = useQuery('users', fetchUsers);
  
  if (isLoading) return <Loading />;
  if (error) return <ErrorState error={error} />;
  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        autoHeight
      />
    </Box>
  );
}`,
    language: "jsx",
    color: "#7C3AED", // Purple for MUI
    tags: [
      "React",
      "TypeScript",
      "SWR",
      "MUI",
      "React Hook Form",
      "Zod",
      "i18next",
      "Framer Motion",
      "Context API",
      "React Router",
    ],
    demo: "https://app.lexemeai.com",
    featured: true,
  },
  {
    id: 3,
    title: "Flight Booking",
    description:
      "Flight booking website with a focus on user experience and design. This project is for Code Time info company.",
    codeSnippet: `import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  departure: yup.string().required(),
  arrival: yup.string().required(),
  date: yup.date().required(),
  passengers: yup.number().min(1).max(8).required(),
}).required();

export function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>
  );
}`,
    language: "jsx",
    color: "#06B6D4", // Cyan for Tailwind
    tags: [
      "React",
      "Shadcn",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "Framer Motion",
      "Yup",
      "React Hook Form",
      "i18next",
      "jest",
      "react-testing-library",
    ],
    demo: "https://flyexquisite.com/",
    featured: false,
  },
  {
    id: 4,
    title: "Coffee Shop",
    description:
      "Coffee shop website with a focus on user experience and design. This project is a part of the Maktab109 course.",
    codeSnippet: `import { useQuery } from 'react-query';
    import { useState } from 'react';
    import { useStore } from '../store';

    export default function ProductsPage() {
      const [filter, setFilter] = useState('all');
      const addToCart = useStore(state => state.addToCart);
      
      const { data, isLoading } = useQuery(['products', filter], 
        () => fetchProducts(filter)
      );
      
      if (isLoading) return <Spinner />;
      
      return (
        <div className="products-grid">
          {data.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>
      );
    }`,
    language: "jsx",
    color: "#0284C7", // Sky for Next.js
    tags: [
      "Next.js",
      "TypeScript",
      "React Hook Form",
      "React Query",
      "React Hook Form",
      "Yup",
      "Zustand",
    ],
    demo: "https://marayedcoffee.vercel.app/",
    source:
      "https://github.com/AminMarayed-dev/maktab109-coffee-shop-amin-marayed/tree/main",
    featured: true,
  },
  {
    id: 5,
    title: "Booking System",
    description:
      "Booking system website with a focus on user experience and design. This project is a part of the Maktab109 course and A group has been hit.",
    codeSnippet: `import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
    import { AppProps } from 'next/app';
    import { QueryClient, QueryClientProvider } from 'react-query';

    const queryClient = new QueryClient();

    function MyApp({ Component, pageProps }: AppProps) {
      return (
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <Box maxWidth="1200px" mx="auto" p={4}>
              <Component {...pageProps} />
            </Box>
          </ChakraProvider>
        </QueryClientProvider>
      );
    }

    export default MyApp;`,
    language: "tsx",
    color: "#3182CE", // Blue for Chakra UI
    tags: [
      "Next.js",
      "TypeScript",
      "React Hook Form",
      "React Query",
      "React Hook Form",
      "Yup",
      "Chakra UI",
    ],
    source: "https://github.com/AminMarayed-dev/book-shopping-appRouter",
    featured: true,
  },
];

export function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const terminalRefs = useRef<HTMLDivElement[]>([]);

  const filteredProjects = filter
    ? projects.filter((project) => project.tags.includes(filter))
    : projects;

  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-green-500">
            <span className="text-white">&lt;</span> Projects{" "}
            <span className="text-white">/&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            A curated collection of my recent work. Each project represents my
            passion for creating elegant, performant, and user-friendly
            applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={filter === null ? "default" : "outline"}
            className={`font-mono text-xs ${
              filter === null
                ? "bg-green-500 text-black"
                : "border-green-500/50 text-green-500"
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </Button>

          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              className={`font-mono text-xs ${
                filter === tag
                  ? "bg-green-500 text-black"
                  : "border-green-500/50 text-green-500"
              }`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(project.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="absolute inset-0 rounded-lg opacity-20"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.color}22 0%, transparent 75%)`,
                  filter: "blur(2px)",
                  zIndex: -1,
                }}
              ></div>

              <div className="bg-black border border-green-500/20 rounded-lg overflow-hidden">
                {/* Terminal Header */}
                <div
                  className="flex items-center px-4 py-2 border-b border-green-500/20 font-mono text-sm"
                  style={{
                    background: `linear-gradient(to right, ${project.color}22, transparent)`,
                  }}
                >
                  <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="flex-1 text-center text-green-500 truncate">
                    {project.title}.{project.language}
                  </div>
                  <div className="flex items-center">
                    {project.featured && (
                      <Badge className="ml-2 bg-green-500 text-black font-mono text-[10px]">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <Terminal className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-mono text-xl text-green-400 mb-2">
                        {project.title}
                      </h3>
                      <p className="font-mono text-gray-400 text-sm">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Code Snippet */}
                  <div
                    className="mt-2 mb-4 bg-black/50 border border-green-500/10 rounded p-3 font-mono text-xs overflow-auto relative flex-1"
                    style={{ maxHeight: "200px" }}
                    ref={(el) => {
                      if (el) terminalRefs.current[index] = el;
                    }}
                  >
                    <pre>
                      <code className="text-gray-300">
                        {project.codeSnippet.split("\n").map((line, i) => (
                          <div key={i} className="line">
                            <span className="text-gray-500 mr-2">{i + 1}</span>
                            <span className="text-gray-300">{line}</span>
                          </div>
                        ))}
                      </code>
                    </pre>

                    <motion.div
                      className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredCard === project.id ? 0.1 : 0,
                      }}
                      style={{
                        background: `linear-gradient(45deg, ${project.color}22, transparent, ${project.color}11)`,
                      }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 5).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-green-500/50 text-green-400 font-mono text-[10px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 5 && (
                      <Badge
                        variant="outline"
                        className="border-green-500/50 text-green-400 font-mono text-[10px]"
                      >
                        +{project.tags.length - 5} more
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between mt-auto">
                    {project.source && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs font-mono border-green-500/50 text-green-500 hover:bg-green-500/10"
                      >
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="w-3.5 h-3.5 mr-2" />
                          Source
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        size="sm"
                        className="text-xs font-mono bg-green-500 hover:bg-green-600 text-black ml-auto"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="font-mono border-green-500 text-green-500 hover:bg-green-500/10"
          >
            <a
              href="https://github.com/AminMarayed-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
