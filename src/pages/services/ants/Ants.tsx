import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQSectionAnts from '../../../components/FAQ/FAQSectionAnts';

const Ants = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  const antCharacteristics = {
    'Latin Name': 'Formicidae',
    'Length': 'Less than 5.4mm',
    'Colour': 'Red, black',
    'Common Sighting': 'Wall edges, crevices'
  };

  const tableOfContents = [
    { title: '1. Quick Facts on Ants', id: 'quick-facts' },
    { title: '2. Signs of Ants Infestation', id: 'signs' },
    { title: '3. How to Get Rid of Ants?', id: 'get-rid' },
    { title: '4. How to Prevent Ants in the Home?', id: 'prevent' },
    {
      title: '5. Common Ants in Singapore',
      id: 'common-ants',
      subItems: [
        { title: '5.1. Carpenter Ants', id: 'carpenter-ants' },
        { title: '5.2. Crazy Ants', id: 'crazy-ants' },
        { title: '5.3. Ghost Ants', id: 'ghost-ants' },
        { title: '5.4. Pharaoh\'s Ants', id: 'pharaoh-ants' }
      ]
    },
    { title: '6. PestClinic – Professional and Trusted Ant Control Services in Singapore', id: 'services' },
    { title: '7. Engage PestClinic to help you get rid of ants now.', id: 'engage' },
    {
      title: '8. Frequently Asked Questions About Ant Pest Control',
      id: 'faq',
      subItems: [
        { title: '8.1. How much is pest control for ants?', id: 'faq-cost' },
        { title: '8.2. Can pest control get rid of ants?', id: 'faq-effectiveness' },
        { title: '8.3. How do I keep ants away permanently?', id: 'faq-prevention' },
        { title: '8.4. What is the best treatment to get rid of ants?', id: 'faq-treatment' }
      ]
    }
  ];

  const faqItems = [
    {
      question: "How much is pest control for ants?",
      answer: "The cost of ant pest control varies depending on the severity of infestation, property size, and treatment method required. Contact us for a detailed assessment and quote tailored to your situation."
    },
    {
      question: "Can pest control get rid of ants?",
      answer: "Yes, professional pest control services can effectively eliminate ant infestations. We use targeted treatments, baits, and barrier methods combined with preventive measures to ensure long-term control."
    },
    {
      question: "How do I keep ants away permanently?",
      answer: "To keep ants away permanently: 1) Seal entry points around your home, 2) Keep food in airtight containers, 3) Clean spills and crumbs immediately, 4) Fix moisture issues, 5) Maintain regular professional pest control treatments, and 6) Remove potential nesting sites around your property."
    },
    {
      question: "What is the best treatment to get rid of ants?",
      answer: "The most effective ant treatment typically involves a combination of methods: 1) Professional-grade baits that workers carry back to the colony, 2) Barrier treatments around entry points, 3) Direct contact sprays for visible ants, and 4) Preventive measures to stop future infestations. The specific treatment plan depends on the ant species and infestation severity."
    }
  ];

  const renderContent = () => (
    <div className="space-y-12">
      {/* Quick Facts Section */}
      <section id="quick-facts" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Quick Facts on Ants</h2>
        <div className="prose max-w-none text-gray-700">
          {/* Add content here */}
        </div>
      </section>

      {/* Signs Section */}
      <section id="signs" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Signs of Ants Infestation</h2>
        <div className="prose max-w-none text-gray-700">
          {/* Add content here */}
        </div>
      </section>

      {/* How to Get Rid Section */}
      <section id="get-rid" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">How to Get Rid of Ants?</h2>
        <div className="prose max-w-none text-gray-700">
          {/* Add content here */}
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevent" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">How to Prevent Ants in the Home?</h2>
        <div className="prose max-w-none text-gray-700">
          {/* Add content here */}
        </div>
      </section>

      {/* Common Ants Section */}
      <section id="common-ants" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Common Ants in Singapore</h2>
        <div className="space-y-8">
          <div id="carpenter-ants" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Carpenter Ants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/ants/carpenter-ants.jpg" 
                alt="Carpenter Ants"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                {/* Add content here */}
              </div>
            </div>
          </div>

          <div id="crazy-ants" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Crazy Ants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/ants/crazy-ants.jpg" 
                alt="Crazy Ants"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                {/* Add content here */}
              </div>
            </div>
          </div>

          <div id="ghost-ants" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Ghost Ants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/ants/ghost-ants.jpg" 
                alt="Ghost Ants"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                {/* Add content here */}
              </div>
            </div>
          </div>

          <div id="pharaoh-ants" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Pharaoh's Ants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/ants/pharaoh-ants.jpg" 
                alt="Pharaoh's Ants"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                {/* Add content here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">PestClinic – Professional and Trusted Ant Control Services in Singapore</h2>
        <div className="prose max-w-none text-gray-700">
          {/* Add content here */}
        </div>
      </section>

      {/* Engage Section */}
      <section id="engage" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Engage PestClinic to help you get rid of ants now.</h2>
        <div className="prose max-w-none text-gray-700">
          {/* Add content here */}
        </div>
      </section>
    </div>
  );

  const renderFAQSection = () => (
    <section id="faq" className="scroll-mt-24 mb-12">
      <FAQSectionAnts faqs={faqItems} />
    </section>
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          src="/images/slider/ants-banner.jpg"
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
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <Link to="/services" className="hover:text-primary transition-colors">Pest Control Services</Link>
            <span className="mx-2">&gt;</span>
            <span>Ants Control</span>
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
                src="/images/services/ants/characteristics.jpg"
                alt="Ant Characteristics"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {Object.entries(antCharacteristics).map(([key, value]) => (
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
                    <div key={item.id} className="space-y-2">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-left w-full hover:text-primary transition-colors"
                      >
                        {item.title}
                      </button>
                      {item.subItems && (
                        <div className="pl-6 space-y-2">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => scrollToSection(subItem.id)}
                              className="text-left w-full text-gray-600 hover:text-primary transition-colors"
                            >
                              {subItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Main Content */}
          {renderContent()}
          {renderFAQSection()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Ants;