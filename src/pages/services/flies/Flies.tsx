import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQSectionFlies from '../../../components/FAQ/FAQSectionFlies';

const Flies = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  const fliesCharacteristics = {
    'Latin Name': 'Diptera',
    'Length': '3-12mm',
    'Colour': 'Black, brown, or grey',
    'Common Sighting': 'Garbage areas, food waste'
  };

  const tableOfContents = [
    { title: '1. Quick Facts', id: 'quick-facts' },
    { title: '2. Common species', id: 'species' },
    { title: '3. Sign of infestation', id: 'signs' },
    { title: '4. How to get rid of this?', id: 'solution' }
  ];

  const faqItems = [
    {
      question: "What attracts flies to my home?",
      answer: "Flies are attracted to food waste, garbage, decaying organic matter, and moisture. They also seek warm environments and light."
    },
    {
      question: "How can I prevent flies in my house?",
      answer: "Keep your home clean, seal garbage properly, install screens on windows, fix leaks, and maintain good sanitation practices."
    },
    {
      question: "Are house flies dangerous?",
      answer: "Yes, flies can carry and spread various diseases as they move between waste and food surfaces, contaminating areas they land on."
    },
    {
      question: "How long does fly control treatment last?",
      answer: "Professional fly control treatments typically last 2-3 months, but this can vary based on environmental conditions and prevention measures."
    }
  ];

  const renderContent = () => (
    <div className="space-y-12">
      {/* Quick Facts Section */}
      <section id="quick-facts" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Flies are common household pests that can spread diseases and contaminate food. 
            Understanding their behavior and lifecycle is crucial for effective control.
          </p>
          <ul>
            <li>Complete metamorphosis: egg, larva, pupa, adult</li>
            <li>Can lay hundreds of eggs in their lifetime</li>
            <li>Attracted to food waste and organic matter</li>
            <li>Active during daylight hours</li>
          </ul>
        </div>
      </section>

      {/* Common Species Section */}
      <section id="species" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Common species</h2>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="prose max-w-none">
              <ul>
                <li>House Flies</li>
                <li>Fruit Flies</li>
                <li>Drain Flies</li>
                <li>Blow Flies</li>
              </ul>
            </div>
            <img 
              src="/images/services/flies/common-species.jpg" 
              alt="Common Fly Species"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section id="signs" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Sign of infestation</h2>
        <div className="prose max-w-none text-gray-700">
          <ul>
            <li>Visible flies around food or waste areas</li>
            <li>Small dark spots (fly specks) on surfaces</li>
            <li>Maggots in garbage or organic matter</li>
            <li>Buzzing sounds and increased fly activity</li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">How to get rid of this?</h2>
        <div className="prose max-w-none text-gray-700">
          <ul>
            <li>Sanitation and proper waste management</li>
            <li>Install fly screens on windows and doors</li>
            <li>Use fly traps and baits</li>
            <li>Professional pest control treatment</li>
          </ul>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header with Navigation */}
      <motion.header
        className="relative w-full h-48"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.img
          src="/images/slider/flies-banner.jpg"
          alt="Flies Control Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 flex items-end w-full h-full pb-6 px-6">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            className="text-white text-lg"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/services" className="hover:text-primary transition-colors">Pest Control Services</Link>
            <span className="mx-2">&gt;</span>
            <span>Flies Control</span>
          </motion.nav>
        </div>
      </motion.header>

      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Characteristics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="/images/services/flies/characteristics.jpg"
                alt="Flies Characteristics"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {Object.entries(fliesCharacteristics).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-2">
                  <span className="font-semibold">{key}:</span>
                  <span className="ml-2">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <button
              onClick={() => setIsTableOpen(!isTableOpen)}
              className="w-full bg-primary text-white p-4 rounded-lg flex justify-between items-center"
            >
              <span className="text-xl font-bold">Table of Contents</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${isTableOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isTableOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-white rounded-lg shadow-lg p-6"
              >
                <div className="space-y-4">
                  {tableOfContents.map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-left w-full hover:text-primary transition-colors"
                      >
                        {item.title}
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Main Content */}
          {renderContent()}

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-24 mb-12">
            <FAQSectionFlies faqs={faqItems} />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Flies;