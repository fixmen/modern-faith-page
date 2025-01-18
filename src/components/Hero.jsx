import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/church-background.jpg"
          alt="Church background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Iglesia de Cristo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
        >
          Un lugar donde encontrarás amor, comunidad y propósito
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;