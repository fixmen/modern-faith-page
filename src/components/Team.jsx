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
      Icon: Search
    },
    {
      title: "Hablar donde la Biblia Habla",
      verse: '"Si alguno habla, hable conforme a las palabras de Dios." - 1 Pedro 4:11',
      description: "Nos mantenemos fieles al principio de hablar donde la Biblia habla y callar donde ella calla.",
      Icon: BookOpen
    },
    {
      title: "Autoridad Divina",
      verse: '"Toda la Escritura es inspirada por Dios." - 2 Timoteo 3:16',
      description: "Seguimos los mandamientos de Dios, no las tradiciones de los hombres.",
      Icon: Sun
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestra Doctrina
        </motion.h2>
        
        <Carousel
          setApi={setApi}
          className="max-w-3xl mx-auto"
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
                  <Card className={`border-2 border-church-primary/20 h-full ${point.title === "Autoridad Divina" ? "px-6" : point.title === "Fidelidad a la Palabra" ? "px-4" : "px-5"}`}>
                    <CardContent className="p-8 text-center flex flex-col items-center justify-between h-full">
                      <point.Icon className="w-12 h-12 mb-4 text-church-primary" />
                      <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
                      <p className="text-gray-600 mb-4">{point.description}</p>
                      <p className="text-church-primary font-semibold italic">{point.verse}</p>
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