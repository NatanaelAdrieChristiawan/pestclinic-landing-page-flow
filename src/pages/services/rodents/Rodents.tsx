import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQSectionRodents from '../../../components/FAQ/FAQSectionRodents';

const Rodents = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  const rodentCharacteristics = {
    'Latin Name': 'Muridae',
    'Length': '15-40cm',
    'Colour': 'Brown, black, grey',
    'Common Sighting': 'Walls, ceilings, attics'
  };

  const tableOfContents = [
    { title: '1. Quick Facts', id: 'quick-facts' },
    { title: '2. Common species', id: 'species' },
    { title: '3. Sign of infestation', id: 'signs' },
    { title: '4. How to get rid of this?', id: 'solution' }
  ];

  const faqItems = [
    {
      question: "What attracts rodents to homes?",
      answer: "Rodents are attracted to food sources, shelter, warmth, and water. They often enter homes through small openings seeking these resources."
    },
    {
      question: "How can I prevent rodents in my house?",
      answer: "Seal entry points, store food in airtight containers, maintain cleanliness, remove potential nesting sites, and keep outdoor areas well-maintained."
    },
    {
      question: "Are rodents dangerous?",
      answer: "Yes, rodents can carry diseases, contaminate food, damage property, and create fire hazards by chewing electrical wires."
    },
    {
      question: "How long does rodent control treatment last?",
      answer: "Professional rodent control typically provides long-term results when combined with proper prevention measures and regular monitoring."
    }
  ];

  const renderContent = () => (
    <div className="space-y-12">
      {/* Quick Facts Section */}
      <section id="quick-facts" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Rodents are common pests that can cause significant damage to property and pose health risks. 
            Understanding their behavior helps in effective control.
          </p>
          <ul>
            <li>Active mostly at night</li>
            <li>Can squeeze through small openings</li>
            <li>Excellent climbers and swimmers</li>
            <li>Rapid reproduction rate</li>
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
                <li>Norway Rats</li>
                <li>Roof Rats</li>
                <li>House Mice</li>
                <li>Field Mice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Signs Section */}
      <section id="signs" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Sign of infestation</h2>
        <div className="prose max-w-none text-gray-700">
          <ul>
            <li>Droppings around food sources or hiding places</li>
            <li>Gnaw marks on structures and food packaging</li>
            <li>Grease marks along walls and floorboards</li>
            <li>Unusual noises in walls or ceilings</li>
            <li>Nesting materials in sheltered areas</li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">How to get rid of this?</h2>
        <div className="prose max-w-none text-gray-700">
          <ul>
            <li>Professional pest control treatment</li>
            <li>Seal entry points and possible access areas</li>
            <li>Remove food sources and maintain cleanliness</li>
            <li>Use appropriate baiting and trapping methods</li>
            <li>Regular monitoring and maintenance</li>
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
          src="/images/controls/rodent.jpg"
          alt="Ants Control Services Banner"
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
            <Link to="/" className="hover:text-[#162957] transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/services" className="hover:text-[#162957] transition-colors">Pest Control Services</Link>
            <span className="mx-2">&gt;</span>
            <span>Rodents Control</span>
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
                src="/images/controls/rodent.jpg"
                alt="Rodent Characteristics"
                className="w-80 h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {Object.entries(rodentCharacteristics).map(([key, value]) => (
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
              className="w-full bg-[#162957] text-white p-4 rounded-lg flex justify-between items-center"
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
                        className="text-left w-full hover:text-[#162957] transition-colors"
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
            <FAQSectionRodents faqs={faqItems} />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rodents;