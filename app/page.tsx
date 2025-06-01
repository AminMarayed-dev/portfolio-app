import { MainLayout } from "@/components/main-layout";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  );
}
