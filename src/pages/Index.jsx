import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Team from "../components/Team";
import History from "../components/History";

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      className="overflow-hidden relative"
      style={{
        y: backgroundY
      }}
    >
      <Hero />
      <Mission />
      <Team />
      <History />
    </motion.main>
  );
};

export default Index;