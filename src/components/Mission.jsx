import { motion } from "framer-motion";

const Mission = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-church-accent to-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">¿Quiénes Somos?</h2>
        </motion.div>

        <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm"
          >
            Somos una comunidad de fe arraigada en la verdad bíblica y el amor fraternal. 
            Desde nuestros inicios, nos hemos dedicado a mantener la pureza de la doctrina 
            apostólica, siguiendo el modelo de la iglesia del primer siglo. Nuestra jornada 
            comenzó con un pequeño grupo de creyentes comprometidos con restaurar el 
            cristianismo del Nuevo Testamento.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm"
          >
            Nuestra misión es clara: compartir el mensaje transformador del evangelio y 
            formar discípulos comprometidos con Cristo. Creemos en el poder de la Palabra 
            de Dios para cambiar vidas y en la importancia de una comunidad que se apoya 
            mutuamente en el camino de la fe. Nos esforzamos por ser un faro de esperanza 
            en nuestra comunidad.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm"
          >
            Los valores que nos definen son el amor incondicional, la integridad en 
            nuestras acciones, la fidelidad a las Escrituras y el servicio desinteresado. 
            Creemos en la importancia de construir relaciones auténticas y en crear un 
            espacio donde cada persona pueda crecer en su fe y desarrollar sus dones 
            espirituales para la gloria de Dios.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;