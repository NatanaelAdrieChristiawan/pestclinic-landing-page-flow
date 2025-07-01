import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Shield, Award, PhoneCall, Target, TrendingDown, X } from 'lucide-react';

const certificateImages = [
  '/images/certified/certif1.jpg',
  '/images/certified/certif2.jpg',
  '/images/certified/certif3.jpg',
  '/images/certified/certif4.jpg',
  '/images/certified/certif5.jpg',
  '/images/certified/certif6.jpg',
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showCertModal, setShowCertModal] = useState(false);
  const [zoomedImgIdx, setZoomedImgIdx] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-[#162957] font-semibold text-lg mb-2"
              >
                Why Choose Serval Integrated Pest Management Sdn Bhd
              </motion.h3>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl font-bold text-foreground mb-6"
              >
                Kuala Lumpur's Most Trusted Pest Control Experts
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                With over a decade of experience and thousands of satisfied customers, 
                Serval Integrated Pest Management Sdn Bhd stands as Kuala Lumpur's premier pest control solution provider.
              </motion.p>
            </div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="text-center p-6 bg-secondary/50 rounded-2xl hover:bg-[#cedff9] transition-colors duration-300">
                <div className="w-16 h-16 bg-[#162957]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#162957]" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Quality Assurance</h4>
                <p className="text-muted-foreground text-sm">
                  Commitment Guarantee
                </p>
              </div>

              {/* Certified - with popup */}
              <button
                type="button"
                onClick={() => setShowCertModal(true)}
                className="text-center p-6 bg-secondary/50 rounded-2xl hover:bg-[#cedff9] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#162957]/40"
                aria-label="Show Certificates"
              >
                <div className="w-16 h-16 bg-[#162957]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#162957]" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Certified</h4>
                <p className="text-muted-foreground text-sm">
                  Licensed professionals with proper certifications
                </p>
              </button>

              <div className="text-center p-6 bg-secondary/50 rounded-2xl hover:bg-[#cedff9] transition-colors duration-300">
                <div className="w-16 h-16 bg-[#162957]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneCall className="h-8 w-8 text-[#162957]" />
                </div>
                <h4 className="font-bold text-foreground mb-2">Free Consultation</h4>
                <p className="text-muted-foreground text-sm">
                  Expert assessment and customized solutions
                </p>
              </div>
            </motion.div>

            {/* Source Elimination & Reduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#162957]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-[#162957]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Source Elimination</h4>
                  <p className="text-muted-foreground text-sm">
                    We identify and eliminate the root cause of pest problems, 
                    not just treat the symptoms for long-lasting results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#162957]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="h-6 w-6 text-[#162957]" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Population Reduction</h4>
                  <p className="text-muted-foreground text-sm">
                    Strategic treatment plans that significantly reduce pest 
                    populations and prevent future infestations.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="images/slider/control.png"
                alt="Professional Pest Control Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-6 -left-6 bg-background p-6 rounded-2xl shadow-xl border border-border"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#162957]">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-[#162957] text-primary-foreground p-6 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertModal && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 60 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-6 relative"
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
                onClick={() => setShowCertModal(false)}
                aria-label="Close"
              >
                <X className="w-7 h-7" />
              </button>
              <h3 className="text-xl font-bold text-center mb-6 text-[#162957]">Our Certifications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {certificateImages.map((src, idx) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="rounded-lg overflow-hidden border bg-white cursor-pointer"
                    onClick={() => setZoomedImgIdx(idx)}
                  >
                    <img
                      src={src}
                      alt={`Certificate ${idx + 1}`}
                      className="w-full h-32 sm:h-36 md:h-40 object-contain bg-white"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoomed Certificate Modal */}
      <AnimatePresence>
        {zoomedImgIdx !== null && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImgIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-red-400 transition-colors"
                onClick={() => setZoomedImgIdx(null)}
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={certificateImages[zoomedImgIdx]}
                alt={`Certificate Zoomed ${zoomedImgIdx + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;