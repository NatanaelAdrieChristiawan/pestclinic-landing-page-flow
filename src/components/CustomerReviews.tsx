import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const CustomerReviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sarah Tan",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Excellent service! PestClinic solved our termite problem completely. The team was professional, punctual, and very thorough. Highly recommended!",
      location: "Kuala Lumpur"
    },
    {
      id: 2,
      name: "Michael Lee",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Outstanding pest control service. They handled our office cockroach issue efficiently and discreetly. No disruption to our business operations.",
      location: "Kuala Lumpur"
    },
    {
      id: 3,
      name: "Priya Sharma",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Fast response time and effective treatment. Our ant problem was resolved within days. The technician explained everything clearly and provided helpful tips.",
      location: "Kuala Lumpur"
    },
    {
      id: 4,
      name: "David Wong",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Professional and reliable service. They eliminated our rodent problem and provided excellent follow-up service. Great value for money!",
      location: "Kuala Lumpur"
    },
    {
      id: 5,
      name: "Lisa Chen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      comment: "Impressed with their eco-friendly approach. Safe for my family and pets while being highly effective against pests. Will definitely use again.",
      location: "Kuala Lumpur"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-[#162957] font-semibold text-lg mb-2">Customer Reviews</h3>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our pest control services.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-background border border-border rounded-3xl p-8 md:p-12 shadow-lg relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-[#96b5fc]">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Customer Avatar */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-[#96b5fc]"
                  />
                </motion.div>

                {/* Review Content */}
                <div className="flex-1 text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex justify-center md:justify-start mb-4"
                  >
                    {renderStars(reviews[currentReview].rating)}
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-foreground text-lg md:text-xl leading-relaxed mb-6 italic"
                  >
                    "{reviews[currentReview].comment}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <h4 className="text-foreground font-bold text-lg">
                      {reviews[currentReview].name}
                    </h4>
                    <p className="text-muted-foreground">
                      {reviews[currentReview].location}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full bg-background shadow-lg border border-border"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full bg-background shadow-lg border border-border"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview ? 'bg-[#162957]' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;