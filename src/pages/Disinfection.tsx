import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Disinfection = () => {
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
          src="/images/slider/clean.png"
          alt="Disinfection Services Banner"
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
            <span>Disinfection Services</span>
          </motion.nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Disinfection Misting Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image - Now on the left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img
                src="/images/slider/disinfection.png"
                alt="Disinfection Misting Service"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            {/* Content - Now on the right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Disinfection Misting</h2>
              <p className="text-lg text-gray-600">
                We offer services for both pest control & disinfection cum odour removal program at great value.
              </p>
              <p className="text-lg text-gray-600">
                Well loved by business owners and homeowners, we disinfect offices, schools, restaurants and homes to provide a pest free & healthy environment for everyone.
              </p>
              <div className="pt-4">
                <p className="text-xl font-bold text-[#162957]">The safety of your health is our top priority.</p>
                <p className="text-lg text-gray-600 mt-2">
                  Call us for a non-obligated consultation service.
                </p>
              </div>
            </motion.div>
          </div>

          {/* How it Works Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 mb-16"
          >
            <h2 className="text-3xl font-bold">How it works</h2>
            <p className="text-lg text-gray-600">
              The disinfection processed is carried throughout the entire premises with Mist Fumigation to eliminate odour and microorganisms.
            </p>
            <p className="text-lg text-gray-600">
              Our disinfectant is non-corrosive and works through an electrical charge to prevent the microorganisms' resistance to the solution. It can effectively eliminate 99.9999% of microorganisms, viruses and bacteria.
            </p>
            
            <div className="space-y-2">
              <p className="text-lg font-medium">The disinfectant is:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
                <li>100% biodegradable and safe for the environment</li>
                <li>Non-irritant</li>
                <li>Non-Corrosive</li>
                <li>Non-Carcinogenic</li>
                <li>PH Neutral</li>
                <li>Laboratory tested and proven to be effective against any possible airborne or contact disease infections</li>
              </ul>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <p className="text-2xl">
              Engage SERVAL INTEGRATED PEST MANAGEMENT to <span className="font-bold">disinfect</span> your place now.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-block bg-[#162957] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#162957]/90 transition-colors"
              >
                Request for Disinfection
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Disinfection;