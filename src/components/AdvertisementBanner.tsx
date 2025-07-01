import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { PhoneCall, Clock, CheckCircle } from 'lucide-react';

const AdvertisementBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-[#162957] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Emergency Pest Control?
              <span className="block text-3xl md:text-4xl">Call Us Now!</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl mb-8 opacity-90"
            >
              Fast, reliable, and guaranteed results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <button className="bg-background text-[#162957] hover:bg-secondary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                +60 11-2344 8311
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-[#162957] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                WhatsApp Us
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">Free Inspection</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">Same Day Service</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="/images/slider/HP1.jpg"
                alt="Emergency Pest Control"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl" />
              
              {/* Floating Call Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-4 -right-4 bg-background text-[#162957] p-4 rounded-full shadow-xl animate-bounce"
              >
                <PhoneCall className="h-8 w-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisementBanner;