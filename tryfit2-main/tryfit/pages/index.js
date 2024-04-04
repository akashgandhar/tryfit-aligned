import React, { useEffect } from 'react';
import Header from "@/components/Header";
import FabricPerformance from "@/components/FabricPerformance";
import WhatWeDo from "@/components/WhatWeDo";
import OurProducts from "@/components/OurProducts";
import FaqSection from "@/components/FaqSection";
import SuccesStories from "@/components/SuccessStories";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);

  return (
    <div className="backgroundClass overflow-x-hidden">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <FabricPerformance />
      <WhatWeDo />
      <OurProducts />
      <FaqSection />
      <SuccesStories />
      <Connect />
      <Footer />
    </div>
  );
}
