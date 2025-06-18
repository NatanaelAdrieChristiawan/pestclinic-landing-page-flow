import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQSectionMosquitos from '../../../components/FAQ/FAQSectionMosquitos';

const Mosquitos = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  const mosquitoCharacteristics = {
    'Latin Name': 'Culicidae',
    'Length': '3-6mm',
    'Colour': 'Brown to black',
    'Common Sighting': 'Gardens, water sources'
  };

  const tableOfContents = [
    { title: '1. Quick Facts on Mosquito', id: 'quick-facts' },
    { 
      title: '2. What are the Dangers Posed By Mosquitoes in Singapore?', 
      id: 'dangers',
      subItems: [
        { title: '2.1. Dengue', id: 'dengue' },
        { title: '2.2. Malaria', id: 'malaria' },
        { title: '2.3. Chikungunya', id: 'chikungunya' },
        { title: '2.4. Zika', id: 'zika' }
      ]
    },
    {
      title: '3. Common Mosquito Species',
      id: 'species',
      subItems: [
        { title: '3.1. Aedes Aegypti', id: 'aedes-aegypti' },
        { title: '3.2. Aedes Albopictus', id: 'aedes-albopictus' },
        { title: '3.3. Anopheles Maculatus', id: 'anopheles-maculatus' },
        { title: '3.4. Anopheles Sundaicus', id: 'anopheles-sundaicus' },
        { title: '3.5. Culex Quinquefasciatus', id: 'culex' }
      ]
    },
    { title: '4. Sign of Mosquito Infestation', id: 'signs' },
    {
      title: '5. What are the Mosquitos Pest Control Methods in Singapore?',
      id: 'methods',
      subItems: [
        { title: '5.1. Adult Mosquito Control', id: 'adult-control' },
        { title: '5.2. Mosquito Breeding Solution', id: 'breeding-solution' },
        { title: '5.3. Water Based Misting', id: 'misting' }
      ]
    },
    { title: '6. Mosquito Control Prevention Tips', id: 'prevention' },
    { title: '7. How To Prevent From Getting Bitten By Mosquitoes?', id: 'bites-prevention' },
    { title: '8. PestClinic – Professional and Trusted Mosquito Control Services in Singapore', id: 'services' },
    { title: '9. Engage PestClinic to help you get rid of mosquitos now', id: 'engage' },
    {
      title: '10. Frequently Asked Questions',
      id: 'faq',
      subItems: [
        { title: '10.1. Mosquito Control Prevention Tips', id: 'faq-prevention' },
        { title: '10.2. How To Prevent Getting Bitten By Mosquitoes?', id: 'faq-bites' },
        { title: '10.3. How much would it cost to get rid of mosquitoes?', id: 'faq-cost' },
        { title: '10.4. How to keep mosquitoes away from a house?', id: 'faq-away' }
      ]
    }
  ];

  const faqItems = [
    {
      question: "Mosquito Control Prevention Tips",
      answer: "Effective mosquito prevention includes: Eliminating standing water, maintaining proper drainage, using mosquito nets, and regular professional treatments."
    },
    {
      question: "How To Prevent Getting Bitten By Mosquitoes?",
      answer: "Use mosquito repellent, wear long sleeves and pants during peak mosquito hours, install screens on windows, and avoid outdoor activities at dawn and dusk."
    },
    {
      question: "How much would it cost to get rid of mosquitoes?",
      answer: "Treatment costs vary based on property size and infestation severity. Contact us for a customized quote and treatment plan."
    },
    {
      question: "How to keep mosquitoes away from a house?",
      answer: "Install proper screening, eliminate standing water, maintain yard cleanliness, use mosquito repellent plants, and consider professional barrier treatments."
    }
  ];

  const renderContent = () => (
    <div className="space-y-12">
      {/* Quick Facts Section */}
      <section id="quick-facts" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Quick Facts on Mosquito</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Mosquitoes are common flying insects in Singapore that can transmit various diseases. 
            Understanding their behavior and lifecycle is crucial for effective control.
          </p>
          <ul>
            <li>Only female mosquitoes bite humans and animals</li>
            <li>They can detect carbon dioxide from 36 meters away</li>
            <li>Most active during dawn and dusk</li>
            <li>Breed in stagnant water</li>
          </ul>
        </div>
      </section>

      {/* Dangers Section */}
      <section id="dangers" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">What are the Dangers Posed By Mosquitoes in Singapore?</h2>
        <div className="space-y-8">
          <div id="dengue" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-4">Dengue</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/mosquitos/dengue.jpg" 
                alt="Dengue Fever"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>Dengue fever is a serious viral infection transmitted by Aedes mosquitoes. Symptoms include high fever, severe headache, and joint pain.</p>
              </div>
            </div>
          </div>

          {/* Similar blocks for Malaria, Chikungunya, and Zika */}
        </div>
      </section>

      {/* Species Section */}
      <section id="species" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Common Mosquito Species</h2>
        <div className="space-y-8">
          <div id="aedes-aegypti" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-4">Aedes Aegypti</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/mosquitos/aedes-aegypti.jpg" 
                alt="Aedes Aegypti"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>Primary vector for dengue fever in Singapore. Identified by distinctive white markings on legs and thorax.</p>
              </div>
            </div>
          </div>

          {/* Similar blocks for other species */}
        </div>
      </section>

      {/* Control Methods Section */}
      <section id="methods" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">What are the Mosquitos Pest Control Methods in Singapore?</h2>
        <div className="space-y-8">
          <div id="adult-control" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-4">Adult Mosquito Control</h3>
            <div className="prose max-w-none">
              <p>Professional treatment targeting adult mosquitoes using approved insecticides and fogging methods.</p>
            </div>
          </div>

          {/* Similar blocks for other control methods */}
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section id="prevention" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Mosquito Control Prevention Tips</h2>
        <div className="prose max-w-none text-gray-700">
          <ul>
            <li>Remove stagnant water sources</li>
            <li>Maintain proper drainage systems</li>
            <li>Install mosquito screens</li>
            <li>Keep gardens well-maintained</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">PestClinic – Professional and Trusted Mosquito Control Services in Singapore</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            At PestClinic, we provide comprehensive mosquito control solutions using integrated pest management approaches. 
            Our experienced technicians will:
          </p>
          <ul>
            <li>Conduct thorough site inspections</li>
            <li>Identify breeding sources</li>
            <li>Implement targeted control measures</li>
            <li>Provide ongoing prevention advice</li>
          </ul>
        </div>
      </section>
    </div>
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
          src="/images/slider/mosquitos-banner.jpg"
          alt="Mosquito Control Services Banner"
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
            <span>Mosquito Control</span>
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
                src="/images/services/mosquitos/characteristics.jpg"
                alt="Mosquito Characteristics"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="border-b border-gray-200 pb-2">
                <span className="font-semibold">Latin Name:</span>
                <span className="ml-2">{mosquitoCharacteristics['Latin Name']}</span>
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-semibold">Length:</span>
                <span className="ml-2">{mosquitoCharacteristics['Length']}</span>
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-semibold">Colour:</span>
                <span className="ml-2">{mosquitoCharacteristics['Colour']}</span>
              </div>
              <div className="border-b border-gray-200 pb-2">
                <span className="font-semibold">Common Sighting:</span>
                <span className="ml-2">{mosquitoCharacteristics['Common Sighting']}</span>
              </div>
            </motion.div>
          </div>

          {/* Updated Table of Contents */}
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

          {/* FAQ Section */}
          <section id="faq" className="scroll-mt-24 mb-12">
            <FAQSectionMosquitos faqs={faqItems} />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Mosquitos;