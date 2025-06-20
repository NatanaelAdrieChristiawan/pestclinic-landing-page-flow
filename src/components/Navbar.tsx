import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const routes = {
    HOME: '/',
    'ABOUT US': '/about',
    'PEST CONTROL SERVICES': '#',
    'COMMERCIAL/INDUSTRIAL SECTOR': '/commercial',
    'DISINFECTION SERVICES': '/disinfection',
    'SPECIALIST AT WORK': '/specialist',
    'CONTACT US': '/contact'
  };

  const pestControlServices = [
    {
      category: 'Termite Treatment',
      items: [
        { name: 'Termite Control Company', path: '/services/termite/control' },
        { name: 'Termite Inspection', path: '/services/termite/inspection' },
        { name: 'Drywood Termites vs. Subterranean Termites', path: '/services/termite/types' }
      ]
    },
    { category: 'Ants', path: '/services/ants' },
    { category: 'Bed Bugs', path: '/services/bed-bugs' },
    { category: 'Cockroaches', path: '/services/cockroaches' },
    { category: 'Flies', path: '/services/flies' },
    { category: 'Mosquitos', path: '/services/mosquitos' },
    { category: 'Rodents', path: '/services/rodents' },
    { category: 'Other Pest', path: '/services/other-pests' }
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

  // Update the dropdown menu section in the desktop view
  const renderPestControlDropdown = () => (
    <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-50"
        >
          <div className="py-2">
            {pestControlServices.map((service) => (
              <div key={service.category} className="px-4 py-2">
                {service.items ? (
                  <>
                    <div className="font-semibold text-primary text-sm mb-1">
                      {service.category}
                    </div>
                    <div className="ml-4">
                      {service.items.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className="block text-muted-foreground text-xs py-1 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={service.path}
                    className="block font-semibold text-primary text-sm hover:text-primary transition-colors"
                  >
                    {service.category}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                src="/images/logo/serval.png"
                alt="PestClinic Logo"
                className="h-14 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block flex-1">
            <div className="ml-16 flex items-center justify-end space-x-10">
              {menuItems.map((item) => (
                <div key={item} className="relative">
                  {item === 'PEST CONTROL SERVICES' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button
                        className={`px-4 py-1 text-xs font-medium flex items-center transition-colors duration-200
                          ${location.pathname.includes('/services')
                            ? 'text-primary'
                            : 'text-gray-800 hover:text-primary'
                          }`}
                      > 
                        {item}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {renderPestControlDropdown()}
                    </div>
                  ) : (
                    <NavLink
                      to={routes[item]}
                      className={({ isActive }) =>
                        `px-2 py-1 text-xs font-medium transition-colors duration-200 
                        ${isActive ? 'text-primary' : 'text-gray-800 hover:text-primary'}`
                      }
                    >
                      {item}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-primary p-2"
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
                  <div key={item}>
                    {item === 'PEST CONTROL SERVICES' ? (
                      <div className="relative">
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                        >
                          {item}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {renderPestControlDropdown()}
                      </div>
                    ) : (
                      <NavLink
                        to={routes[item]}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-base font-medium transition-colors duration-200
                          ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}`
                        }
                      >
                        {item}
                      </NavLink>
                    )}
                  </div>
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