import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
          alt="Contact Banner"
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
            <span>Contact Us</span>
          </motion.nav>
        </div>
      </motion.header>

      <div className="flex-grow py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-6 text-[#162957]">Contact Us</h1>
          
          {/* Contact Info */}
          <div className="mb-8 space-y-2 text-gray-700">
            <div>
              <strong>SERVAL INTEGRATED PEST MANAGEMENT SDN BHD (930788-T)</strong><br />
              No.6, Jalan Suria U5/T,<br />
              Bandar Pinggiran Subang (Subang 2),<br />
              40150 Shah Alam, Selangor,<br />
              Malaysia.
            </div>
            <div>
              <span className="font-semibold">Tel :</span> 03-78320930
            </div>
            <div>
              <span className="font-semibold">Mobile (WhatsApp) :</span>{' '}
              <a
                href="https://wa.me/601123448311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] underline font-semibold"
              >
                +6 01123448311
              </a>
            </div>
            <div>
              <span className="font-semibold">Email :</span> <a href="mailto:OfficialHQ@servalpestmanagement.com" className="text-[#162957] underline">OfficialHQ@servalpestmanagement.com</a>
            </div>
            <div>
              <span className="font-semibold">Working hours:</span><br />
              Monday to Saturday,<br />
              8:30am to 6:00pm,<br />
              Closed on Sunday &amp; public holidays.
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mb-8">
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

          {/* Map Section */}
          <div className="w-full h-64 rounded-lg overflow-hidden">
            <iframe
              title="Serval Integrated Pest Management Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254958.57445228632!2d101.26000978671873!3d3.1662571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8aa3d6c3618c4cd5%3A0xeb7e2732da53c98!2sSERVAL%20INTEGRATED%20PEST%20MANAGEMENT%20SDN%20BHD!5e0!3m2!1sid!2sid!4v1750841774215!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;