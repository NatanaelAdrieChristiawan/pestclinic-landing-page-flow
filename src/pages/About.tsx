import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const missionItems = [
    {
      title: 'Overview',
      content: 'Inovative affordable Pest free living for every home'
    },
    {
      title: 'Quality Service',
      content: 'Our team of certified professionals uses the latest techniques and environmentally friendly solutions.'
    },
    {
      title: 'Responsive',
      content: '24/7 emergency service available to handle any pest control situation promptly and efficiently.'
    }
  ];

  const metrics = [
    { label: 'Service Satisfaction', value: 97 },
    { label: 'Service Effectiveness', value: 98 },
    { label: 'Quality Work', value: 98 }
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
          src="/images/slider/clean.png"
          alt="About Us Banner"
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
            <span>About Us</span>
          </motion.nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-6">ABOUT SERVAL INTEGRATED PEST MANAGEMENT SDN BHD (Company No.930788-T)</h1 >
            <p className="text-lg text-gray-700 leading-relaxed">
              SERVAL INTEGRATED PEST MANAGEMENT SDN BHD is an experienced pest control operator who is committed to offer their extensive knowledge and experience in the industry in order to deliver excellent pest control services. Our commitment to this industry is total. Our capability and level of service has grown from strength to strength over the years. We understand that all our clients are unique and we are committed to always offering them the most innovative approach to their situation. Our unique structure sets us apart from our competitors in allowing us always to provide the optimal approach to our client's environment and needs.
            </p>
          </motion.div>

          {/* Three Columns Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h2>
              {missionItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full px-4 py-3 flex items-center justify-between text-left"
                    onClick={() => setActiveAccordion(activeAccordion === item.title ? null : item.title)}
                  >
                    <span className="font-medium">{item.title}</span>
                    {activeAccordion === item.title ? (
                      <Minus className="h-5 w-5 text-[#162957]" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeAccordion === item.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-4 pb-3"
                      >
                        <p className="text-gray-600">{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

            {/* Our Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Philosophy</h2>
              <p className="text-gray-700 leading-relaxed">
                We are a dedicated team of innovative, dynamic and positive individuals who are committed to delivering excellence to all our stakeholders. Our integrity requires us to be competent, effective, efficient, knowledgeable, honest and trustworthy at all times.
              </p>
            </motion.div>

            {/* Company Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>
              <div className="space-y-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{metric.label}</span>
                      <span className="text-[#162957] font-medium">{metric.value}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-gray-200 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-[#162957] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;