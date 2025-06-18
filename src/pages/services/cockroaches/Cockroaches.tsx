import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQSectionCockroach from '../../../components/FAQ/FAQSectionCockroach';

const Cockroaches = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);

  // Scroll to section by id
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cockroachCharacteristics = {
    'Latin Name': 'Blattodea',
    'Length': '12-40mm',
    'Colour': 'Brown to dark brown',
    'Common Sighting': 'Kitchen, bathrooms, drains'
  };

  const tableOfContents = [
    { title: '1. Quick Facts on Cockroaches', id: 'quick-facts' },
    { title: '2. Sign of Cockroach Infestation', id: 'signs' },
    {
      title: '3. What are the Cockroach Treatment and Control Methods in Singapore?',
      id: 'methods',
      subItems: [
        { title: '3.1. Cockroach Baits', id: 'baits' },
        { title: '3.2. Insecticide Residual Spray', id: 'spray' },
        { title: '3.3. Bin Chutes Fogging', id: 'fogging' }
      ]
    },
    { title: '4. Common Cockroach Species', id: 'species' },
    { title: '5. PestClinic – Professional and Trusted Cockroach Control Services in Singapore', id: 'services' },
    {
      title: '6. Frequently Asked Questions',
      id: 'faq',
      subItems: [
        { title: '6.1. What smell keeps cockroaches away?', id: 'faq-smell' },
        { title: '6.2. How to prevent cockroaches from rubbish chutes?', id: 'faq-prevention' },
        { title: '6.3. What are cockroaches scared of?', id: 'faq-fears' },
        { title: '6.4. What attracts cockroaches in your home?', id: 'faq-attractions' }
      ]
    }
  ];

  const renderContent = () => (
    <div className="space-y-12">
      {/* Quick Facts Section */}
      <section id="quick-facts" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Quick Facts on Cockroaches</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Cockroaches are among the most resilient and adaptable pests found in Singapore homes and businesses. 
            They can survive in various environments and are known carriers of numerous diseases and bacteria.
          </p>
          <ul>
            <li>Can survive without food for up to a month</li>
            <li>Active mostly at night</li>
            <li>Can squeeze through tiny cracks and crevices</li>
            <li>Reproduce rapidly under favorable conditions</li>
          </ul>
        </div>
      </section>

      {/* Signs Section */}
      <section id="signs" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Sign of Cockroach Infestation</h2>
        <div className="prose max-w-none text-gray-700">
          <ul>
            <li>Cockroach droppings that resemble coffee grounds or black pepper</li>
            <li>Unpleasant, musty odor in infested areas</li>
            <li>Egg cases (oothecae) in dark corners or crevices</li>
            <li>Live cockroaches seen during daytime (indicates heavy infestation)</li>
            <li>Smear marks where cockroaches travel frequently</li>
          </ul>
        </div>
      </section>

      {/* Treatment Methods Section */}
      <section id="methods" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">What are the Cockroach Treatment and Control Methods in Singapore?</h2>
        <div className="space-y-8">
          <div id="baits" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-4">Cockroach Baits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/cockroach/baits-treatment.jpg" 
                alt="Cockroach Baits"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>
                  Professional-grade gel baits are strategically placed in areas where cockroaches frequent. 
                  The baits contain attractive ingredients that cockroaches carry back to their nests, effectively 
                  eliminating entire colonies.
                </p>
              </div>
            </div>
          </div>

          <div id="spray" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-4">Insecticide Residual Spray</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/cockroach/spray-treatment.jpg" 
                alt="Insecticide Spray"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>
                  Long-lasting insecticide sprays are applied to surfaces where cockroaches travel. 
                  This creates a barrier that continues to work for weeks after application, targeting 
                  both adult cockroaches and nymphs.
                </p>
              </div>
            </div>
          </div>

          <div id="fogging" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-primary mb-4">Bin Chutes Fogging</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/cockroach/fogging-treatment.jpg" 
                alt="Bin Chutes Fogging"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>
                  Specialized fogging treatment targeting refuse chutes and bin centers where cockroaches 
                  commonly breed. This method reaches deep into cracks and crevices that are otherwise 
                  difficult to treat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Species Section */}
      <section id="species" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Common Cockroach Species</h2>
        <div className="prose max-w-none text-gray-700">
          <ul>
            <li>German Cockroach - Small, common in kitchens</li>
            <li>American Cockroach - Largest species, found in sewers</li>
            <li>Oriental Cockroach - Dark brown, prefers damp areas</li>
            <li>Brown-Banded Cockroach - Prefers warmer, drier locations</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">PestClinic – Professional and Trusted Cockroach Control Services in Singapore</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            At PestClinic, we provide comprehensive cockroach control solutions using the latest 
            treatment methods and professional-grade products. Our experienced technicians will:
          </p>
          <ul>
            <li>Conduct thorough inspections to identify infestation sources</li>
            <li>Develop customized treatment plans</li>
            <li>Use integrated pest management approaches</li>
            <li>Provide prevention advice and follow-up services</li>
          </ul>
        </div>
      </section>
    </div>
  );

  // FAQ items for Cockroach FAQ section
  const faqItems = [
    {
      question: "What smell keeps cockroaches away?",
      answer: "Cockroaches are repelled by strong scents such as bay leaves, peppermint oil, and citrus. Using these natural repellents in problem areas may help deter them."
    },
    {
      question: "How to prevent cockroaches from rubbish chutes?",
      answer: "Keep rubbish chutes clean and tightly closed, avoid leaving food waste exposed, and regularly clean the surrounding area to prevent attracting cockroaches."
    },
    {
      question: "What are cockroaches scared of?",
      answer: "Cockroaches are generally scared of light, movement, and certain strong smells like peppermint, eucalyptus, and citrus oils."
    },
    {
      question: "What attracts cockroaches in your home?",
      answer: "Cockroaches are attracted to food crumbs, spills, moisture, garbage, and clutter. Maintaining cleanliness and reducing moisture can help prevent infestations."
    }
  ];

  // Add the FAQ section render function
  const renderFAQSection = () => (
    <section id="faq" className="scroll-mt-24 mb-12">
      <FAQSectionCockroach faqs={faqItems} />
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header section - similar to BedBugs */}
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
            <span>Cockroach Pest Control</span>
          </motion.nav>
        </div>
      </motion.header>

      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Characteristics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Cockroach Characteristics</h2>
              <ul className="list-disc list-inside">
                {Object.entries(cockroachCharacteristics).map(([key, value]) => (
                  <li key={key} className="text-gray-700">
                    <span className="font-semibold">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
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

export default Cockroaches;