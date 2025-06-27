import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from "react-router-dom";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full flex items-center justify-center" // Ubah tinggi container
          >
            {/* Gambar belakang (kiri atas) */}
            <div className="absolute left-0 top-0 border-2 border-[#b5c7e6] rounded-lg w-80 h-80 z-10 bg-white shadow-md">
              <img
                src="/images/works/ab2.jpeg"
                alt="Pest Control Professional"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Gambar depan (kanan bawah, overlap) */}
            <div className="absolute left-40 top-40 border-2 border-[#b5c7e6] rounded-lg w-80 h-80 z-20 bg-white shadow-lg">
              <img
                src="/images/works/ab1.jpeg"
                alt="Pest Control Professional"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[#162957] font-semibold text-lg mb-2"
              >
                About Serval Pest Management
              </motion.h3>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl font-bold text-foreground mb-6"
              >
                Leading Pest Control Solutions
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Serval Pest Management is premier pest control company, providing comprehensive 
              pest management solutions for residential, commercial, and industrial properties. 
              With experience, we have successfully eliminated pest problems 
              for thousands of satisfied customers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Our team of certified professionals uses the latest eco-friendly technologies 
              and proven methods to ensure complete pest elimination while maintaining the 
              safety of your family, pets, and environment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#162957] rounded-full"></div>
                <span className="text-foreground font-medium">Licensed & Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#162957] rounded-full"></div>
                <span className="text-foreground font-medium">Eco-Friendly & Safe Treatment Methods</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#162957] rounded-full"></div>
                <span className="text-foreground font-medium">24/7 Emergency Response Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#162957] rounded-full"></div>
                <span className="text-foreground font-medium">100% Satisfaction Guarantee</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pt-4"
            >
              <Link to="/about" onClick={() => window.scrollTo(0,0)}>
                <button className="bg-[#162957] hover:bg-[#8299bd]/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;