import { motion } from "framer-motion";

const History = () => {
  const timeline = [
    {
      year: "1990",
      title: "Fundación",
      description: "Nuestra iglesia comenzó con un pequeño grupo de creyentes comprometidos.",
    },
    {
      year: "2000",
      title: "Crecimiento",
      description: "Expandimos nuestro ministerio y abrimos nuevas sedes en la ciudad.",
    },
    {
      year: "2010",
      title: "Impacto Social",
      description: "Iniciamos programas de ayuda comunitaria y desarrollo social.",
    },
    {
      year: "2023",
      title: "Presente",
      description: "Continuamos creciendo y sirviendo a nuestra comunidad con amor.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-church-primary/10 to-church-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestra Historia
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-church-primary/20" />
          
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"
              } mb-8 md:mb-0`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <span className="text-church-primary font-bold text-xl">{item.year}</span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;