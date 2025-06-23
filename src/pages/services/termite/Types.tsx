import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQSectionAnts from '../../../components/FAQ/FAQSectionAnts';

const Rodents = () => {
  const faqItems = [
    {
      question: "What is The Best Treatment For Drywood Termites?",
      answer: "Effective treatments include direct elimination and fumigation methods tailored to infestations."
    },
    {
      question: "How Serious Are Drywood Termites?",
      answer: "Drywood termites can cause significant structural damage if left untreated, leading to costly repairs."
    },
    {
      question: "Can Drywood Termites Spread?",
      answer: "Yes, drywood termites can infest new areas, making early detection and treatment crucial."
    },
    {
      question: "How To Detect Drywood Termites?",
      answer: "Signs include discarded wings, frass (termite droppings), and damage to wood. Inspections should be conducted regularly."
    },
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
          src="/images/services/dry.png"
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
            <span>Drywood Termites vs. Subterranean Termites</span>
          </motion.nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Drywood Termites vs. Subterranean Termites: Understanding the Differences</h2>
            <p className="prose max-w-none text-gray-700">
              Termites are destructive pests, but not all termites are the same. Two common types that pose threats to properties in Singapore are drywood termites and subterranean termites. Understanding their differences is essential for choosing the correct treatment method to protect your property.
            </p>
          </section>

          {/* Subterranean Termites Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4">1. Subterranean Termites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/sub.png" 
                alt="Subterranean Termites"
                className="rounded-lg w-80"
              />
              <div className="prose max-w-none text-gray-700">
                <p>Subterranean termites, the most infamous and destructive insect's wood pest in Asia, are known by their scientific name <em>coptotermes gestroi</em>. They are capable of severely damaging a family’s most prized asset in their abode and inflict millions of dollars' worth of damage every year. Subterranean termites dwell in underground colonies and have castes that are responsible for specific colony tasks. The caste system is made up of three classes—swarmers, soldiers, and workers.</p>
                <ul>
                  <li><strong>Food Source:</strong> Wood, paper, and other cellulose materials</li>
                  <li><strong>Habitat:</strong> Underground colonies, often very close to moisture sources</li>
                  <li><strong>Reproduction:</strong> Swarm during specific times of the year to reproduce</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Drywood Termites Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4">2. Drywood Termites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/dry.png" 
                alt="Drywood Termites"
                className="rounded-lg w-80"
              />
              <div className="prose max-w-none text-gray-700">
                <p>Also known as <em>Kalotermitidae</em>, drywood termites are the second most destructive termite pest behind subterranean ones due to their reduced moisture needs and ability to dwell totally inside of wood. They target timber that is currently being used and dead wood in living trees. Yet, drywood termite treatment is much more difficult to execute because, unlike subterranean termites, they cannot be lured or treated with bait.</p>
                <ul>
                  <li><strong>Food Source:</strong> Wood, particularly dry wood</li>
                  <li><strong>Habitat:</strong> Inside wood structures</li>
                  <li><strong>Reproduction:</strong> Swarmers emerge to form new colonies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dampwood Termites Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-4">3. Dampwood Termites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/services/damp.png" 
                alt="Dampwood Termites"
                className="rounded-lg w-80"
              />
              <div className="prose max-w-none text-gray-700">
                <p>Dampwood termites thrive in extremely moist areas and feed in very moist wood, particularly in fallen trees, stumps, firewood, and in the garden area. Thus, they get their name due to the fact that dampwood termites do not build shelter tubes, while subterranean termite species do.</p>
                <ul>
                  <li><strong>Food Source:</strong> Wood with high moisture content</li>
                  <li><strong>Habitat:</strong> Frequently seen in wood near soil</li>
                  <li><strong>Reproduction:</strong> Similar to other termite species</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Drywood Termite Control & Treatment Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Drywood Termite Control & Treatment</h2>
            <p className="prose max-w-none text-gray-700">Our drywood termite control process involves advanced detection and treatment methods to eliminate termites at their source:</p>
            <ul className="list-disc ml-5">
              <li><strong>Inspection:</strong> Our professionals carry out a detailed inspection to identify termite infestation points.</li>
              <li><strong>Direct Elimination:</strong> Once identified, the infested areas are treated with a flushing method to target termites directly.</li>
              <li><strong>Fumigation Treatment:</strong> The affected area is sealed with plastic sheets, and a gaseous fumigant is applied to penetrate deep into the affected areas to eradicate termites. For expert drywood termite treatment in Singapore, trust our tailored solutions to keep your property protected.</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <FAQSectionAnts faqs={faqItems} />
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rodents;