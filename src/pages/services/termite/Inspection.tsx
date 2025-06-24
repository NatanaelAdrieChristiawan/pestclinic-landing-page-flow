import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const TermiteControl = () => {
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
            <span>Termite Inspection</span>
          </motion.nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Termite Control Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Professional Termite Inspection</h2>
            <p className="prose max-w-none text-gray-700">
              Termites can cause severe and costly damage to your property before you even realise they’re there. We provide advanced termite inspection to detect infestations early and protect your property from structural damage. Our team uses state-of-the-art equipment to deliver precise and non-invasive inspections, ensuring the most effective termite control solutions.
            </p>
          </section>

          {/* Detection Methods Section */}
          <section id="detection-methods" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Termite Inspection : Our Detection Methods</h2>
            <p className="prose max-w-none text-gray-700">
              We employ the latest termite detection methods to provide the most accurate and comprehensive inspections. Our advanced termite inspection techniques ensure early detection and effective prevention of termite damage.
            </p>
          </section>

          {/* Detection Techniques */}
          <section id="detection-techniques" className="mb-12">
            <h3 className="text-xl font-semibold mb-4">1. Termite Detection Using Termatrac T3i</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/slider/detection.png" 
                alt="Termatrac T3i"
                className="rounded-lg w-60"
              />
              <div className="prose max-w-none text-gray-700">
                <p>The Termatrac T3i is a unique, non-invasive termite detection radar that penetrates common wall materials, allowing us to locate and track the presence of termites without causing any damage to your property. This advanced technology provides precise termite detection and treatment planning.</p>
                <ul className="list-disc ml-5">
                  <li>Detects movement in or behind most surfaces</li>
                  <li>Can be used to find termites in hard-to-reach places</li>
                  <li>Reads movement on a PDA up to 20 yards away from the source</li>
                  <li>Allows for accurate and targeted termite treatment</li>
                  <li>Eliminates the need for post-inspection repairs whenever possible</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="thermography" className="mb-12">
            <h3 className="text-xl font-semibold mb-4">2. Termite Detection Using Thermography Inspection System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/slider/thermo.png" 
                alt="Thermography Inspection"
                className="rounded-lg w-60"
              />
              <div className="prose max-w-none text-gray-700">
                <p>Our Thermography Inspection System uses high-resolution thermography and long-range night vision to monitor and diagnose the structural condition of your building and identify termite infestations. This system allows us to "see" and "read" through walls, floorboards, and ceilings, uncovering hidden termite activity that might go unnoticed during a traditional visual inspection.</p>
                <ul className="list-disc ml-5">
                  <li>Non-contact and non-invasive termal control technique</li>
                  <li>Identifies and pinpoints termite infestations accurately</li>
                  <li>Detects termites from distances between 500m to 1500m</li>
                  <li>Offers real-time detection</li>
                  <li>Saves time and money by reducing the need for extensive repairs or additional inspections</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Termite Inspection Cost Section */}
          <section id="inspection-cost" className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Termite Inspection Cost</h2>
            <p className="prose max-w-none text-gray-700">
              The termite inspection cost can vary depending on the size of your property and the complexity of the infestation. We offer competitive and transparent pricing for our termite inspection services. We understand the importance of budget-friendly solutions and strive to provide excellent value for our professional services.
            </p>
            <p className="mt-4">Get a Quote Today! Contact us for a customised quote based on your property’s needs. Our professional inspectors will provide a thorough assessment, and we’ll guide you through the next steps to protect your home or business from termite damage. We also ensure that the termite inspection cost is clearly explained so you’ll know exactly what to expect without any surprises.</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermiteControl;