import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const faqs = [
    {
      question: "How long does a typical pest control treatment take?",
      answer: "Treatment duration varies depending on the type of pest and the size of the property. Most residential treatments take 1-3 hours, while commercial properties may require half a day to a full day. We'll provide an estimated timeframe during our initial consultation."
    },
    {
      question: "Are your pest control treatments safe for children and pets?",
      answer: "Yes, we prioritize safety and use eco-friendly, child and pet-safe treatments whenever possible. Our certified technicians will advise you on any necessary precautions and provide detailed instructions for before and after treatment care."
    },
    {
      question: "How often should I schedule pest control treatments?",
      answer: "For prevention, we recommend quarterly treatments. However, the frequency may vary based on your property type, location, and pest history. Severe infestations may require multiple treatments spaced 2-4 weeks apart until the problem is resolved."
    },
    {
      question: "Do you provide warranties or guarantees for your services?",
      answer: "Yes, we offer a satisfaction guarantee and provide warranties ranging from 30 days to 1 year depending on the treatment type. If pests return during the warranty period, we'll re-treat at no additional cost."
    },
    {
      question: "What should I do to prepare my home before treatment?",
      answer: "Preparation varies by treatment type, but generally includes: cleaning the treatment areas, removing food items from kitchens, covering fish tanks, and securing pets. We'll provide a detailed preparation checklist when you book our services."
    },
    {
      question: "How quickly can you respond to emergency pest problems?",
      answer: "We offer 24/7 emergency response for urgent pest issues. In most cases, we can dispatch a technician within 2-4 hours for emergency calls. Same-day service is available for regular appointments when scheduled before 2 PM."
    },
    {
      question: "What types of pests do you treat?",
      answer: "We handle all common Malaysia pests including termites, ants, cockroaches, rodents, bed bugs, mosquitoes, flies, and more. Our technicians are trained to identify and eliminate both common and unusual pest species using appropriate methods."
    },
    {
      question: "How much does pest control service cost?",
      answer: "Costs vary based on property size, pest type, and treatment complexity. We offer free consultations and quotes. Basic treatments start from over RM100 for residential properties, while comprehensive packages range from RM200-RM800. Commercial rates are quoted separately."
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-[#162957] font-semibold text-lg mb-2">FAQ</h3>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get answers to the most common questions about our pest control services, 
            treatments, and policies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-background border border-border rounded-xl px-6 py-2 hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold hover:text-[#162957] transition-colors duration-300 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-[#162957] hover:bg-[#162957]/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Our Experts
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;