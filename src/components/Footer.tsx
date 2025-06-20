import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = {
    'Home': '/',
    'About Us': '/about',
    'Pest Control Services': '/services/ants',
    'Commercial/Industrial Sector': '/commercial',
    'Disinfection Services': '/disinfection',
    'Specialist at Work': '/specialist',
    'Contact Us': '/contact'
  };

  return (
    <footer className="bg-[#18443d] text-gray-100 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div className="space-y-4">
          <img src="/images/logo-pestbusters.png" alt="PestBusters Logo" className="h-12 mb-2" />
          <div className="text-sm leading-relaxed">
            <div>Original PestBusters Sdn Bhd</div>
            <div>201401048546 (1124735-T)</div>
            <div>No. 36-1 & 36-3, Jalan Jalil 1, Bumi Bukit Jalil,</div>
            <div>Lebuhraya Puchong – Sungai Besi, 57000</div>
            <div>Kuala Lumpur</div>
          </div>
          <div className="mt-4">
            <span className="font-semibold">FOLLOW US</span>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <div className="font-semibold mb-2">COMPANY</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Legal Statement</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
          {/* Logos */}
          <div className="flex flex-wrap gap-4 mt-6">
            <img src="/images/footer/mpma.png" alt="MPMA" className="h-10" />
            <img src="/images/footer/jabatan-pertanian.png" alt="Jabatan Pertanian" className="h-10" />
            <img src="/images/footer/best-brands.png" alt="Best Brands" className="h-10" />
            <img src="/images/footer/trusted-malaysia.png" alt="Trusted Malaysia" className="h-10" />
          </div>
        </div>

        {/* Call & Email */}
        <div className="space-y-6">
          <div>
            <div className="font-semibold mb-1">CALL US NOW</div>
            <div className="flex items-center space-x-2 text-lg font-bold">
              <FaPhoneAlt />
              <span>+603 8080 3344</span>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">ENQUIRE NOW</div>
            <div className="flex items-center space-x-2 text-sm">
              <FaEnvelope />
              <a href="mailto:support@pestbustersmalaysia.com.my" className="hover:underline font-semibold">
                support@pestbustersmalaysia.com.my
              </a>
            </div>
          </div>
        </div>

        {/* Brochure */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="font-semibold mb-2">DISCOVER MORE</div>
            <a
              href="/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white text-[#18443d] font-semibold text-center py-4 rounded-lg shadow hover:bg-gray-100 transition"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-300 mt-10">
        Copyright 2025 Pestbusters. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;