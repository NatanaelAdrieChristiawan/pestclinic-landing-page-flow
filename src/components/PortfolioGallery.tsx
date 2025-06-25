import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';

const PortfolioGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioImages = [
    {
      id: 1,
      title: "Termite Treatment - Residential",
      image: "/images/works/Termite Treatment.jpg",
      description: "Complete termite elimination in a 3-story residential building"
    },
    {
      id: 2,
      title: "Commercial Kitchen Pest Control",
      image: "/images/works/fog.png",
      description: "Professional pest management for restaurant kitchen"
    },
    {
      id: 3,
      title: "Office Building Rodent Control",
      image: "/images/works/4.jpg",
      description: "Comprehensive rodent elimination in corporate office"
    },
    {
      id: 4,
      title: "Warehouse Fumigation",
      image: "/images/works/Warehouse.jpeg",
      description: "Industrial-grade fumigation for large warehouse facility"
    },
    {
      id: 5,
      title: "Hotel Bed Bug Treatment",
      image: "/images/works/build.jpg",
      description: "Complete bed bug elimination in luxury hotel"
    },
    {
      id: 6,
      title: "School Premises Sanitization",
      image: "/images/works/3.jpg",
      description: "Safe pest control and sanitization for educational facility"
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
          <h3 className="text-[#162957] font-semibold text-lg mb-2">Our Work</h3>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Pest Control in Kuala Lumpur for Every Industry
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            See our professional pest control work in action. From residential homes 
            to commercial establishments, we deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
                
                {/* Zoom Icon */}
                <button
                  onClick={() => setSelectedImage(index)}
                  className="absolute top-4 right-4 bg-background text-[#162957] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ZoomIn className="h-5 w-5" />
                </button>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Zoomed Image */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#96b5fc] transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              
              <img
                src={portfolioImages[selectedImage].image}
                alt={portfolioImages[selectedImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-2xl font-bold mb-2">{portfolioImages[selectedImage].title}</h3>
                <p className="text-lg opacity-90">{portfolioImages[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;