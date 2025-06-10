import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pestControlServices = [
    {
      category: 'Termite treatment',
      items: [
        'Termite Control Company',
        'Termite Inspection',
        'Drywood termites vs. subterranean termites'
      ]
    },
    { category: 'Ants', items: [] },
    { category: 'Bed Bugs', items: [] },
    { category: 'Cockroaches', items: [] },
    { category: 'Flies', items: [] },
    { category: 'Mosquitos', items: [] },
    { category: 'Rodents', items: [] },
    { category: 'Other Pest', items: [] }
  ];

  const menuItems = [
    'HOME',
    'ABOUT US',
    'PEST CONTROL SERVICES',
    'COMMERCIAL/INDUSTRIAL SECTOR',
    'DISINFECTION SERVICES',
    'SPECIALIST AT WORK',
    'CONTACT US'
  ];

  return (
    <nav className="bg-background shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-primary"
            >
              PestClinic
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <div key={item} className="relative">
                  {item === 'PEST CONTROL SERVICES' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200">
                        {item}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-80 bg-background border border-border rounded-md shadow-lg z-50"
                          >
                            <div className="py-2">
                              {pestControlServices.map((service, idx) => (
                                <div key={idx} className="px-4 py-2">
                                  <div className="font-semibold text-primary text-sm mb-1">
                                    {service.category}
                                  </div>
                                  {service.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="text-muted-foreground text-xs ml-4 py-1 hover:text-primary cursor-pointer transition-colors">
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      href="#"
                      className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;