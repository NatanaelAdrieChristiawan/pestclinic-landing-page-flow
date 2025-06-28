import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageGrid from '../components/ImageGrid';

const Specialist = () => {
  const sections = [
    {
      title: "TERMITE BAITING SYSTEM (OUTDOOR)",
      images: Array.from({ length: 4 }, (_, i) => `/images/specialists/outdoor/${i + 1}.png`)
    },
    {
      title: "TERMITE BAITING SYSTEM (INDOOR STATION)",
      images: Array.from({ length: 4 }, (_, i) => `/images/specialists/indoor/${i + 1}.png`)
    },
    {
      title: "GENERAL PEST CONTROL (GPC)",
      images: Array.from({ length: 4 }, (_, i) => `/images/specialists/control/${i + 1}.png`)
    },
    {
      title: "RATS BAITING",
      images: Array.from({ length: 4 }, (_, i) => `/images/specialists/rats/${i + 1}.png`)
    },
    {
      title: "GEL BAITING",
      images: Array.from({ length: 4 }, (_, i) => `/images/specialists/gel/${i + 1}.png`)
    },
    {
      title: "RATS CAGE",
      images: Array.from({ length: 4 }, (_, i) => `/images/specialists/cage/${i + 1}.png`)
    }
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
          src="/images/slider/HP1.jpg"
          alt="Specialist at Work Banner"
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
            <span>Specialist at Work</span>
          </motion.nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            See Our Specialists In Action!
          </motion.h1>

          {sections.map((section) => (
            <ImageGrid
              key={section.title}
              title={section.title}
              images={section.images}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Specialist;