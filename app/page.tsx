import { About } from "../components/sections/About";
import { Pricing } from "../components/sections/Pricing";
import { Process } from "../components/sections/Process";
import { Services } from "../components/sections/Services";
import { Hero } from "../components/sections/Hero";
import { Contact } from "../components/sections/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}