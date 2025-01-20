import { motion } from "framer-motion";
import { MapPin, Clock, Users, Heart } from "lucide-react";

const Mission = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section className="py-20 bg-church-accent overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">¿Quiénes Somos?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Somos una comunidad de fe comprometida con la verdad bíblica y el amor fraternal. 
            Nuestro camino comenzó hace más de dos décadas, y desde entonces nos dedicamos a 
            servir a Dios y a nuestra comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Clock className="w-12 h-12 text-church-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Nuestros Orígenes</h3>
            <p className="text-gray-600">
              Fundada en el compromiso con la verdad bíblica, nuestra iglesia ha crecido 
              gracias a la fidelidad de Dios y la dedicación de nuestra comunidad.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Heart className="w-12 h-12 text-church-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-gray-600">
              Buscamos compartir el amor de Cristo, formar discípulos y servir a 
              nuestra comunidad a través de la enseñanza fiel de la Palabra.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Users className="w-12 h-12 text-church-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Nuestros Valores</h3>
            <p className="text-gray-600">
              Nos fundamentamos en el amor, la integridad, la excelencia y el 
              servicio, siguiendo el ejemplo de Cristo en todo lo que hacemos.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <MapPin className="w-12 h-12 text-church-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ubicación</h3>
            <p className="text-gray-600">
              Nos encontramos en el corazón de la ciudad, siendo un faro de 
              esperanza y un lugar de encuentro para todos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;