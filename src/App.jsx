
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP,ScrollTrigger);

import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill";
import Work from "./component/Work";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start:'-200 bottom',
          end:'bottom 80%',
          scrub: true,
          
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      });
    });
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
