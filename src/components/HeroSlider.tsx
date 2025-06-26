import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Professional Pest Control Services",
      subtitle: "Protecting Your Home & Business",
      description: "Expert pest elimination with guaranteed results and eco-friendly solutions",
      image: "/images/slider/banner-1.jpg"
    },
    {
      id: 2,
      title: "Termite Treatment Specialists",
      subtitle: "Complete Termite Solutions",
      description: "Advanced termite detection and elimination with long-term protection",
      image: "/images/slider/banner-2.jpg"
    },
    {
      id: 3,
      title: "Commercial Pest Management",
      subtitle: "Industrial Grade Solutions",
      description: "Comprehensive pest control for commercial and industrial facilities",
      image: "/images/slider/banner-3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-semibold mb-6 text-[#8299bd]"
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl mb-8 max-w-2xl mx-auto"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="space-x-4"
              >
                <button
                  className="bg-[#162957] hover:bg-[#162957]/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </button>
                <button
                  className="border-2 border-[#162957] text-white hover:bg-[#162957] hover:text-white px-8 py-3 mt-5 rounded-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#8299bd]' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;