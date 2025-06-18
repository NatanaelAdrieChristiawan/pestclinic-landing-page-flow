import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const OtherPests = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const pestsList = [
    "Bee",
    "Wasp",
    "Hornet",
    "Snake",
    "Bedbug",
    "Flies",
    "Tick",
    "Millipede",
    "Centipede",
    "Insect stored products like beetle & weevil",
    "And many more..."
  ];

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
          src="/images/slider/other-pests-banner.jpg"
          alt="Other Pests Control Services Banner"
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
            <span>Other Pests Control</span>
          </motion.nav>
        </div>
      </motion.header>

      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-6">We control other pests such as:</h2>
            <ul className="list-none space-y-2">
              {pestsList.map((pest, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-primary">•</span>
                  <span>{pest}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            <div className="relative">
              <img 
                src="/images/services/other-pests/paradise-tree-snake.jpg"
                alt="Paradise tree snake"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-2 text-center font-medium">Paradise tree snake</p>
            </div>
            <div className="relative">
              <img 
                src="/images/services/other-pests/honey-bees.jpg"
                alt="Honey Bees"
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-2 text-center font-medium">Honey Bees</p>
            </div>
          </div>

          {/* Red Banner Section */}
          <div className="bg-red-700 text-white p-6 rounded-lg mt-12">
            <p className="text-center">
              Spotted a pest in your home but not sure what it is? The experts at PestClinic will help you to identify and eliminate it if necessary! Contact us at +65 6267 5677 or through email at info@pestclinic.com.sg to hire our specialist!
            </p>
          </div>

          {/* Additional Information */}
          <section className="prose max-w-none space-y-4 mt-12">
            <p>
              These are common pests we encounter in the game of nature. Some if untreated, posed great health hazard, social unease, contamination of food and deadly in worst cases.
            </p>
            <p>
              In PestClinic, we adopt different treatment methods to control various species of insects. Source reduction & elimination are still key factors to control these pests.
            </p>
            <p>
              Targeted treatment method used are residual spraying to contact kill or mist fumigate for fast knock down effects.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OtherPests;