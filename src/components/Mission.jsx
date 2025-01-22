import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Users, Heart, Star } from "lucide-react";

const Mission = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-church-primary/10 to-church-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20 space-y-6"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-church-primary to-church-secondary">
            ¿Quiénes Somos?
          </h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-700 leading-relaxed text-center"
          >
            Somos la Iglesia de Cristo, un cuerpo que busca mantenerse fiel al modelo bíblico establecido por nuestro Señor Jesucristo. Rechazamos el denominacionalismo, pues reconocemos la importancia de preservar la pureza de la doctrina del evangelio y evitar los mandamientos de hombres que generan división y tropiezos.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-church-primary to-church-secondary">
            Objetivo Principal
          </h2>
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8 space-y-6">
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Nuestra misión central es reforzar la verdad de que la humanidad necesita salvación, y esta se encuentra únicamente a través del sacrificio de Cristo y la obediencia al evangelio (Romanos 1:16). Enseñamos el patrón bíblico para alcanzar la salvación, que incluye:
              </motion.p>
              <motion.ul
                variants={fadeInUp}
                className="list-disc pl-6 space-y-3 text-gray-700"
              >
                <li className="text-lg">Oír el evangelio (Romanos 10:17)</li>
                <li className="text-lg">Creer en Jesús como el Hijo de Dios (Marcos 16:16)</li>
                <li className="text-lg">Arrepentirse de los pecados (Hechos 17:30)</li>
                <li className="text-lg">Confesar que Jesús es el Señor (Romanos 10:9-10)</li>
                <li className="text-lg">Ser bautizado para el perdón de pecados (Hechos 2:38)</li>
                <li className="text-lg">Permanecer fiel hasta la muerte (Apocalipsis 2:10)</li>
              </motion.ul>
              <div className="space-y-4 mt-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aunque obedecemos este patrón, reconocemos que la salvación es por gracia, como lo señala Efesios 2:8-9: "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe." Esto refleja el amor y la compasión de Dios hacia nosotros, aun cuando no lo merecíamos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Creemos en un solo cuerpo, la Iglesia que Cristo estableció, y no en múltiples divisiones o denominaciones, como lo expresa Efesios 4:4-6: "Un cuerpo, y un Espíritu, como fuisteis también llamados en una misma esperanza de vuestra vocación; un Señor, una fe, un bautismo; un Dios y Padre de todos, el cual es sobre todos, y por todos, y en todos."
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nos esforzamos por ser cristianos ejemplares, siguiendo el modelo de vida de nuestro Señor Jesús, quien nos dejó un ejemplo perfecto de amor, servicio y obediencia (1 Pedro 2:21).
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Visión",
              icon: Star,
              content: "Ser un cuerpo de creyentes fieles a la doctrina del Nuevo Testamento, reflejando la unidad, el amor y la luz de Cristo al mundo."
            },
            {
              title: "Misión",
              icon: Book,
              content: "Predicar el evangelio puro y sin añadiduras humanas, guiar almas a Cristo, edificar a los creyentes y promover la unidad."
            },
            {
              title: "Valores",
              icon: Heart,
              content: "Fidelidad Bíblica, Amor, Gracia, Humildad y Obediencia siguiendo el modelo de vida que Cristo nos dejó."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.5
                  }
                }
              }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="p-4 bg-church-primary/10 rounded-full mb-6">
                    <item.icon className="w-8 h-8 text-church-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
