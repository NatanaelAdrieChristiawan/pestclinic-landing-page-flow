import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom'; // Tambahkan import Link

const ServicesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Tambahkan path untuk setiap service sesuai App.tsx
  const services = [
    {
      title: "Ants Control",
      image: "/images/controls/ants.png",
      description: "Even in a clean home, ants can infest and quickly expand. Act swiftly at the first signs to contain them and prevent further spread.",
      path: "/services/ants"
    },
    {
      title: "Bed Bugs Control",
      image: "/images/controls/bedbugs.jpg",
      description: "Bed bugs cause irritation and discomfort. Serval Integrated Pest Management offers effective bed bug control services to eliminate infestations.",
      path: "/services/bed-bugs"
    },
    {
      title: "Cockroach Control",
      image: "/images/controls/cockroach.jpeg",
      description: "Act quickly at the first sign of cockroaches to control and limit their spread",
      path: "/services/cockroaches"
    },
    {
      title: "Flies Control",
      image: "/images/controls/flies.jpeg",
      description: "The housefly is the most common type found in homes. Due to their high reproduction rate, prompt pest control is essential",
      path: "/services/flies"
    },
    {
      title: "Mosquitoes Treatment",
      image: "/images/controls/mosquitoes.jpeg",
      description: "Mosquito-borne diseases are a risk. Protect yourself by removing breeding grounds",
      path: "/services/mosquitos"
    },
    {
      title: "Rodents Control",
      image: "/images/controls/rodent.jpg",
      description: "Rats cause severe damage to household items and wires, leading to system failures and fires.",
      path: "/services/rodents"
    },
    {
      title: "Termites Control",
      image: "/images/controls/termites.jpeg",
      description: "Termite damage is often detected late, leading to costly repairs. Early inspection is essential to prevent extensive damage.",
      path: "/services/termite/control"
    },
    {
      title: "Other Pest",
      image: "/images/controls/otherpests.png",
      description: "Common pests in nature can pose serious health risks, contaminate food, and even be deadly if left untreated.",
      path: "/services/other-pests"
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-[#162957] font-semibold text-lg mb-2">Our Services</h3>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Pest Control Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We provide professional pest control services for all types of pests, 
            using the latest technologies and eco-friendly methods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162957]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#8299bd] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                to={service.path}
                onClick={() => window.scrollTo(0,0)}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-[#162957] font-semibold text-sm hover:underline"
                  >
                    Learn More →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;