import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { BookOpen, Search, Sun } from "lucide-react";

const Team = () => {
  const [api, setApi] = useState(null);
  const doctrinalPoints = [
    {
      title: "Fidelidad a la Palabra",
      verse: '"Tu palabra es verdad." - Juan 17:17',
      description: "Nos comprometemos a mantener una doctrina pura y sin adulterar, basada únicamente en la Palabra de Dios.",
      Icon: Search,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Hablar donde la Biblia Habla",
      verse: '"Si alguno habla, hable conforme a las palabras de Dios." - 1 Pedro 4:11',
      description: "Nos mantenemos fieles al principio de hablar donde la Biblia habla y callar donde ella calla.",
      Icon: BookOpen,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Autoridad Divina",
      verse: '"Toda la Escritura es inspirada por Dios." - 2 Timoteo 3:16',
      description: "Seguimos los mandamientos de Dios, no las tradiciones de los hombres.",
      Icon: Sun,
      gradient: "from-pink-500 to-red-500"
    },
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-church-primary/10 to-church-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-church-primary to-church-secondary"
        >
          Nuestra Doctrina
        </motion.h2>
        
        <Carousel
          setApi={setApi}
          className="max-w-4xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="gap-6">
            {doctrinalPoints.map((point, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-1"
                >
                  <Card className="border-none bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center flex flex-col items-center justify-between min-h-[400px]">
                      <div className={`p-6 rounded-full bg-gradient-to-r ${point.gradient} mb-6`}>
                        <point.Icon className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-church-primary to-church-secondary">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow text-lg">{point.description}</p>
                      <p className="text-church-primary font-semibold italic text-lg">{point.verse}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Team;