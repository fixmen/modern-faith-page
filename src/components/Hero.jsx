import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-church-primary via-church-secondary to-church-accent overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Iglesia de Cristo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed"
          >
            Un cuerpo que busca mantenerse fiel al modelo bíblico establecido por nuestro Señor Jesucristo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center gap-4 pt-8"
          >
            <a href="#about" className="px-8 py-3 bg-white text-church-primary rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Conócenos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;