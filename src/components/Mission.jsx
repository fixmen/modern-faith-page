import { motion } from "framer-motion";
import { Heart, Target, Users } from "lucide-react";

const Mission = () => {
  const cards = [
    {
      title: "Nuestra Misión",
      description: "Llevar el mensaje de Cristo a todas las personas, transformando vidas a través del amor y la verdad del evangelio.",
      icon: Heart,
    },
    {
      title: "Nuestra Visión",
      description: "Ser una iglesia que impacte positivamente en la sociedad, formando discípulos comprometidos con Dios y su prójimo.",
      icon: Target,
    },
    {
      title: "Nuestros Valores",
      description: "Amor, integridad, excelencia y servicio son los pilares fundamentales que guían nuestro caminar.",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-church-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <card.icon className="w-12 h-12 text-church-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;