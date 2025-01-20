import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Mission = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-church-primary/10 to-church-secondary/10">
      <div className="container mx-auto px-4">
        {/* Quiénes Somos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20 space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">¿Quiénes Somos?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Somos la Iglesia de Cristo, un cuerpo que busca mantenerse fiel al modelo bíblico establecido por nuestro Señor Jesucristo. Rechazamos el denominacionalismo, pues reconocemos la importancia de preservar la pureza de la doctrina del evangelio y evitar los mandamientos de hombres que generan división y tropiezos, tal como lo enfatizó el Señor en Mateo 15:9: "En vano me rinden culto, enseñando como doctrinas mandamientos de hombres".
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nos unimos en la unidad que Cristo deseó para sus seguidores, reflejada en su oración en Juan 17:20-21: "Mas no ruego solamente por éstos, sino también por los que han de creer en mí por la palabra de ellos, para que todos sean uno, como tú, oh Padre, en mí, y yo en ti, que también ellos sean uno en nosotros, para que el mundo crea que tú me enviaste."
          </p>
        </motion.div>

        {/* Objetivo Principal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Objetivo Principal</h2>
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Nuestra misión central es reforzar la verdad de que la humanidad necesita salvación, y esta se encuentra únicamente a través del sacrificio de Cristo y la obediencia al evangelio (Romanos 1:16). Enseñamos el patrón bíblico para alcanzar la salvación, que incluye:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Oír el evangelio (Romanos 10:17: "Así que la fe es por el oír, y el oír, por la palabra de Dios")</li>
                <li>Creer en Jesús como el Hijo de Dios (Marcos 16:16: "El que creyere y fuere bautizado, será salvo")</li>
                <li>Arrepentirse de los pecados (Hechos 17:30: "Pero Dios, habiendo pasado por alto los tiempos de esta ignorancia, ahora manda a todos los hombres en todo lugar, que se arrepientan")</li>
                <li>Confesar que Jesús es el Señor (Romanos 10:9-10: "Que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo")</li>
                <li>Ser bautizado para el perdón de pecados (Hechos 2:38: "Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados")</li>
                <li>Permanecer fiel hasta la muerte (Apocalipsis 2:10: "Sé fiel hasta la muerte, y yo te daré la corona de la vida")</li>
              </ul>
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

        {/* Visión, Misión y Valores */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Visión */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
                <p className="text-gray-700">
                  Ser un cuerpo de creyentes fieles a la doctrina del Nuevo Testamento, reflejando la unidad, el amor y la luz de Cristo al mundo, para que más personas puedan conocer el camino de salvación que Él ofrece.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Misión */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full bg-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Predicar el evangelio puro y sin añadiduras humanas, conforme a las Escrituras (2 Timoteo 4:2)</li>
                  <li>Guiar a las almas a Cristo mediante el cumplimiento del patrón bíblico de salvación</li>
                  <li>Edificar a los creyentes para que crezcan en fe, santidad y servicio</li>
                  <li>Promover la unidad y el amor entre los miembros del cuerpo de Cristo</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <Card className="h-full bg-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Fidelidad Bíblica: Permanecemos firmes en la enseñanza de la Palabra de Dios como nuestra única guía (2 Timoteo 3:16-17)</li>
                  <li>Amor: Vivimos el amor de Cristo al amar a Dios y al prójimo (Mateo 22:37-39)</li>
                  <li>Gracia y Humildad: Reconocemos que somos salvos por gracia y buscamos reflejar la humildad de Cristo (Efesios 2:8-9, Filipenses 2:3-8)</li>
                  <li>Obediencia: Seguimos el modelo de vida que Cristo nos dejó, permaneciendo fieles hasta el final (Juan 14:15)</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Qué nos hace únicos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">¿Qué nos hace únicos?</h2>
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardContent className="p-6 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos distinguimos porque no seguimos credos humanos, tradiciones o costumbres añadidas. Nuestra única autoridad es Cristo y su Palabra. Como dice Colosenses 1:18: "Y él es la cabeza del cuerpo que es la iglesia; él que es el principio, el primogénito de entre los muertos, para que en todo tenga la preeminencia."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Rechazamos que la autoridad recaiga en pastores, ancianos u obispos más allá de lo que está escrito, recordando que Cristo es el único dueño y Señor de la Iglesia (Mateo 28:18). Nos esforzamos por ser una iglesia que sigue únicamente el modelo bíblico, proclamando la verdad con amor y fidelidad.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;