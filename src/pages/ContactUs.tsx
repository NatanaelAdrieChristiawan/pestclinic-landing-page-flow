import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    source: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
          src="/images/slider/disinfection.png"
          alt="Contact Us Banner"
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
            <span>Contact Us</span>
          </motion.nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Crocodile House</h2>
                <p>3 Ubi Avenue 3,</p>
                <p>#05-03A Singapore 408857</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Working hours</h2>
                <p>Monday to Sunday,</p>
                <p>8:30am to 6:00pm,</p>
                <p>including public holidays.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Contact</h2>
                <p>+65 6397 5677</p>
                <p>info@pestclinic.com.sg</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">How to find us</h2>
                <div className="w-full h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.483056331383!2d103.890374!3d1.33118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a4fe8d24187%3A0x30cb4ad6b379292c!2sPestClinic%20Pte%20Ltd!5e0!3m2!1sen!2ssg!4v1750167971463!5m2!1sen!2ssg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold">Drop us a message</h2>
              <p className="text-gray-600">We would love to hear from you!</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border rounded-md"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-md"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input
                    type="tel"
                    placeholder="Contact No"
                    className="w-full p-3 border rounded-md"
                    value={formData.contactNo}
                    onChange={(e) => setFormData({...formData, contactNo: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <p className="font-medium">How Did You Find Us?</p>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="source"
                        value="Facebook Ads"
                        onChange={(e) => setFormData({...formData, source: e.target.value})}
                      />
                      Facebook Ads
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="source"
                        value="Facebook Page"
                        onChange={(e) => setFormData({...formData, source: e.target.value})}
                      />
                      Facebook Page
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="source"
                        value="Google"
                        onChange={(e) => setFormData({...formData, source: e.target.value})}
                      />
                      Google
                    </label>
                  </div>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="source"
                      value="Word of Mouth/Recommendations"
                      onChange={(e) => setFormData({...formData, source: e.target.value})}
                    />
                    Word of Mouth/Recommendations
                  </label>
                </div>

                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-3 border rounded-md"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-600 transition-colors"
                >
                  SEND
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;