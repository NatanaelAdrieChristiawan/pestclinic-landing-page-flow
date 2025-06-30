import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // Tambahkan import Whatsapp

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
    <footer className="bg-[#162957] text-gray-100 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Address */}
        <div className="space-y-4">
          <img
            src="/images/logo/serval.png"
            alt="PestBusters Logo"
            className="lg:h-18 h-14 w-auto mb-2 bg-white rounded-lg p-2 drop-shadow-lg"
          />
          <div className="text-xs leading-relaxed ">
            <div>SERVAL INTEGRATED PEST MANAGEMENT SDN BHD (930788-T)</div>
            <div>No.6, Jalan Suria U5/T,Bandar Pinggiran Subang (Subang 2),</div>
            <div>40150 Shah Alam, Selangor,</div>
            <div>Malaysia</div>
          </div>
          <div className="mt-4">
            {/* <span className="font-semibold">FOLLOW US</span> */}
            {/* Media sosial dihapus sesuai permintaan */}
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
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <img src="/images/logo/mpma.png" alt="MPMA" className="h-16" />
            <img src="/images/logo/jabatan.png" alt="Jabatan Pertanian" className="h-16" />
            <img src="/images/logo/best.png" alt="Best Brands" className="h-16" />
            {/* <img src="/images/logo/trust.png" alt="Trusted Malaysia" className="h-16" /> */}
          </div>
        </div>

        {/* Call & Email */}
        <div className="space-y-6">
          <div>
            <div className="font-semibold mb-1">CALL US NOW</div>
            <div className="flex items-center space-x-2 text-lg font-bold">
              <FaPhoneAlt />
              <span>+603-78320930</span>
            </div>
            <div className="flex items-center space-x-2 text-lg font-bold mt-2">
              <FaWhatsapp className="text-green-400" />
              <a
                href="https://wa.me/601123448311"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +6 01123448311
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-1">ENQUIRE NOW</div>
            <div className="flex items-center space-x-2 text-sm">
              <FaEnvelope />
              <a href="mailto:OfficialHQ@servalpestmanagement.com" className="hover:underline font-semibold">
                OfficialHQ@servalpestmanagement.com
              </a>
            </div>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <FaEnvelope />
              <a href="mailto:servalpest88@gmail.com" className="hover:underline font-semibold">
                servalpest88@gmail.com
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
        Copyright 2025 Serval Integrated Pest Management SDN BHD. All rights reserved.
        <br />
        Build with Passion{' '}
        <a
          href="https://gomedia.com.my/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold text-white hover:text-green-300"
        >
          GO MEDIA MALAYSIA
        </a>{' '}
        (AS0414466-H).
      </div>
    </footer>
  );
};

export default Footer;