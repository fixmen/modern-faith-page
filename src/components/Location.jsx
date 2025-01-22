import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const Location = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-church-primary/10 to-church-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Nuestra Ubicación
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-church-primary/10 rounded-full">
                  <MapPin className="w-6 h-6 text-church-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Dirección</h3>
                  <p className="text-gray-600">Av. Principal #123, Ciudad</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-church-primary/10 rounded-full">
                  <Clock className="w-6 h-6 text-church-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Horarios de Reunión</h3>
                  <p className="text-gray-600">Domingos: 10:00 AM - 12:00 PM</p>
                  <p className="text-gray-600">Miércoles: 7:00 PM - 8:30 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-church-primary/10 rounded-full">
                  <Phone className="w-6 h-6 text-church-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Contacto</h3>
                  <p className="text-gray-600">+1 234 567 890</p>
                  <p className="text-gray-600">iglesia@ejemplo.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8561635185547!2d-74.08173568573423!3d4.598235596657999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9f1f4wiw!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1648218144965!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;