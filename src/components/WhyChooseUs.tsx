import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, PhoneCall, Target, TrendingDown } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
                Why Choose PestClinic
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
                PestClinic stands as Kuala Lumpur's premier pest control solution provider.
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
                  100% satisfaction guarantee with follow-up services
                </p>
              </div>

              <div className="text-center p-6 bg-secondary/50 rounded-2xl hover:bg-[#cedff9] transition-colors duration-300">
                <div className="w-16 h-16 bg-[#162957]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#162957]" />
                </div>
                <h4 className="font-bold text-foreground mb-2">NEA Certified</h4>
                <p className="text-muted-foreground text-sm">
                  Licensed professionals with proper certifications
                </p>
              </div>

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
                src="https://images.unsplash.com/photo-1560472355-109703aa3edc?w=600&h=500&fit=crop"
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
    </section>
  );
};

export default WhyChooseUs;