import Image from "next/image";
import Hero from "./components/Hero";
import Skill from "./Skills/page"
import Contact from "./Contact/page"
export default function Home() {
  return (
   <>
  
   <Hero/>
   <Skill/>
   <Contact/>
   </>
  );
}
