import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary">PestClinic</h3>
            <p className="text-background/80 leading-relaxed">
              Singapore's premier pest control company providing comprehensive 
              pest management solutions since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Termite Control</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Rodent Control</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Cockroach Treatment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Bed Bug Elimination</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Ant Control</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Mosquito Control</a></li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Commercial Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Disinfection Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Emergency Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Free Consultation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Contact Us</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-primary">Contact Info</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-3">
                <PhoneCall className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">24/7 Hotline</p>
                  <p>+65 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@pestclinic.sg</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p>123 Pest Control Street<br />Singapore 123456</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Operating Hours</p>
                  <p>Mon-Sun: 24/7<br />Emergency Available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-background/20 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © {currentYear} PestClinic Singapore. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-center text-background/60 text-xs">
            <p>NEA Licensed Pest Control Company | License No: PC12345678</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;