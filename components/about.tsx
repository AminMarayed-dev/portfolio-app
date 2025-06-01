"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "HTML/CSS",
      "JavaScript",
      "Shadcn",
      "Chakra UI",
      "React Query",
      "React Hook Form",
      "Yup",
      "React Hook Form",
      "Zustand",
    ],
  },

  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Webpack", "Jest"],
  },
  {
    category: "Other",
    items: [
      "Responsive Design",
      "UI/UX",
      "Performance Optimization",
      "SEO",
      "Accessibility",
    ],
  },
];

export function About() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const totalLines = 18;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleLines < totalLines) {
        setVisibleLines((prev) => prev + 1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [visibleLines]);

  const terminalLines = [
    { prompt: "$ ", text: "whoami", output: "frontend-developer" },
    { prompt: "$ ", text: "cat about.txt", output: null },
    {
      prompt: "",
      text: "",
      output:
        "I'm a passionate front-end developer with a strong focus on creating elegant and performant web applications. With expertise in modern JavaScript frameworks like React and Next.js, I build responsive and accessible user interfaces that provide exceptional user experiences.",
    },
    {
      prompt: "",
      text: "",
      output:
        "My approach combines clean code, attention to detail, and a deep understanding of modern web technologies to create solutions that are not only visually appealing but also functionally robust.",
    },
    { prompt: "$ ", text: "ls -la experience/", output: null },
    { prompt: "", text: "", output: "total 2" },
    {
      prompt: "",
      text: "",
      output:
        "drwxr-xr-x  2 dev dev 4096 May 2024-TODAY  Frontend Developer at Asr Goyesh Pardaz",
    },
    {
      prompt: "",
      text: "",
      output:
        "drwxr-xr-x  2 dev dev 4096 Jan 2025-TODAY  Frontend Developer at Code Time Info",
    },
    { prompt: "$ ", text: "cat skills.json | jq", output: null },
    { prompt: "", text: "", output: "{" },
    { prompt: "", text: "", output: "  // Skills data is loaded below" },
    { prompt: "", text: "", output: "}" },
    {
      prompt: "$ ",
      text: "git status",
      output: "Always learning and improving...",
    },
    { prompt: "$ ", text: "", output: null },
    { prompt: "$ ", text: "", output: null },
    { prompt: "$ ", text: "", output: null },
    { prompt: "$ ", text: "_", output: null },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono text-green-500">
            <span className="text-white">&lt;</span> About Me{" "}
            <span className="text-white">/&gt;</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Card className="p-4 border border-green-500/20 bg-black/40 backdrop-blur-sm font-mono text-sm overflow-hidden">
            <div className="flex items-center space-x-2 mb-4 border-b border-green-500/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-2 text-gray-400 text-xs">
                terminal — bash — 80×24
              </div>
            </div>

            <div className="text-gray-300 space-y-1">
              {terminalLines.slice(0, visibleLines).map((line, index) => (
                <div key={index} className="flex">
                  {line.prompt && (
                    <span className="text-green-500 mr-1">{line.prompt}</span>
                  )}
                  {line.text && (
                    <span className="text-white mr-1">{line.text}</span>
                  )}
                  {line.output && (
                    <span className="text-gray-400 whitespace-pre-wrap">
                      {line.output}
                    </span>
                  )}
                </div>
              ))}

              {visibleLines === totalLines && (
                <div className="flex">
                  <span className="text-green-500 mr-1">$ </span>
                  <span className="animate-pulse">_</span>
                </div>
              )}
            </div>
          </Card>

          <div>
            <h3 className="text-xl font-bold mb-6 text-green-400 font-mono">
              Skills & Technologies
            </h3>

            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-white mb-3 font-mono">
                    <span className="text-green-500">#</span>{" "}
                    {skillGroup.category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-green-400 font-mono">
                Education
              </h3>

              <div className="border-l-2 border-green-500/50 pl-4 space-y-4">
                <div>
                  <h4 className="text-white font-mono">
                    Industrial engineering
                  </h4>
                  <p className="text-gray-400 text-sm font-mono">
                    University of Tehran • 2020-2025
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-mono">
                    Web Development Certification
                  </h4>
                  <p className="text-gray-400 text-sm font-mono">
                    Maktab Sharif Bootcamp • 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
