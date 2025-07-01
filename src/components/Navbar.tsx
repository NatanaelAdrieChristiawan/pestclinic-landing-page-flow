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
    'LIST OF CLIENTS': '/clients', // Tambahkan ini
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
    'LIST OF CLIENTS',
    'CONTACT US'
  ];

  // Dropdown menu untuk pest control services
  const renderPestControlDropdown = () => (
    <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-80 bg-white border border-gray-200 rounded-md shadow-lg z-[60]"
          style={{ minWidth: '320px' }}
        >
          <div className="py-2">
            {pestControlServices.map((service) => (
              <div key={service.category} className="px-4 py-2">
                {service.items ? (
                  <>
                    <div className="font-semibold text-[#162957] text-sm mb-1">
                      {service.category}
                    </div>
                    <div className="ml-4">
                      {service.items.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          className="block text-gray-600 text-xs py-1 hover:text-[#8299bd] transition-colors"
                          onClick={() => {setIsDropdownOpen(false); window.scrollTo(0,0); }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={service.path}
                    className="block font-semibold text-[#162957] text-sm hover:text-[#8299bd] transition-colors"
                    onClick={() => window.scrollTo(0,0)}
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

  // Close mobile menu when clicking on a link
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-full relative">
      {/* Navbar */}
      <nav className="bg-[#162957] shadow-lg fixed top-0 left-0 z-40 w-full">
        <div className="max-w-none px-4 sm:px-6 lg:px-4 2xl:max-w-7xl 2xl:mx-auto relative">
          <div className="flex items-center h-16 lg:h-20 justify-between">
            {/* Logo */}
            <NavLink to="/" className="block flex-shrink-0" onClick={() => window.scrollTo(0,0)}>
              <img
                src="/images/logo/serval.png"
                alt="Serval Integrated Pest Management Logo"
                className="lg:h-16 h-12 w-auto bg-white rounded-lg p-2 drop-shadow-lg"
                style={{ marginTop: '20px', marginRight: '10px' }} // Perkecil margin
              />
            </NavLink>
            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-end">
              <div className="flex items-center space-x-4 2xl:space-x-6"> {/* Ubah space-x-8 jadi space-x-4 */}
                {menuItems.map((item, index) => (
                  <div key={item} className="relative">
                    {item === 'PEST CONTROL SERVICES' ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <button
                          className={`px-1 2xl:px-3 py-2 text-xs 2xl:text-sm font-medium flex flex-col items-center transition-colors duration-200 leading-tight relative
                            ${location.pathname.includes('/services')
                              ? 'text-[#8299bd]'
                              : 'text-white hover:text-[#8299bd]'
                            }`}
                        >
                          <span>PEST CONTROL</span>
                          <div className="flex items-center">
                            <span>SERVICES</span>
                            <ChevronDown className="ml-1 h-3 w-3 2xl:h-4 2xl:w-4" />
                          </div>
                        </button>
                        {renderPestControlDropdown()}
                      </div>
                    ) : item === 'COMMERCIAL/INDUSTRIAL SECTOR' ? (
                      <NavLink
                        to={routes[item]}
                        onClick={() => window.scrollTo(0,0)}
                        className={({ isActive }) =>
                          `px-1 2xl:px-3 py-2 text-xs 2xl:text-sm font-medium transition-colors duration-200 text-center block leading-tight
                          ${isActive ? 'text-[#8299bd]' : 'text-white hover:text-[#8299bd]'}`
                        }
                      >
                        <div>COMMERCIAL/</div>
                        <div>INDUSTRIAL SECTOR</div>
                      </NavLink>
                    ) : item === 'DISINFECTION SERVICES' ? (
                      <NavLink
                        to={routes[item]}
                        onClick={() => window.scrollTo(0,0)}
                        className={({ isActive }) =>
                          `px-1 2xl:px-3 py-2 text-xs 2xl:text-sm font-medium transition-colors duration-200 text-center block leading-tight
                          ${isActive ? 'text-[#8299bd]' : 'text-white hover:text-[#8299bd]'}`
                        }
                      >
                        <div>DISINFECTION</div>
                        <div>SERVICES</div>
                      </NavLink>
                    ) : item === 'SPECIALIST AT WORK' ? (
                      <NavLink
                        to={routes[item]}
                        onClick={() => window.scrollTo(0,0)}
                        className={({ isActive }) =>
                          `px-1 2xl:px-3 py-2 text-xs 2xl:text-sm font-medium transition-colors duration-200 text-center block leading-tight
                          ${isActive ? 'text-[#8299bd]' : 'text-white hover:text-[#8299bd]'}`
                        }
                      >
                        <div>SPECIALIST</div>
                        <div>AT WORK</div>
                      </NavLink>
                    ) : (
                      <NavLink
                        to={routes[item]}
                        onClick={() => window.scrollTo(0,0)}
                        className={({ isActive }) =>
                          `px-1 2xl:px-3 py-2 text-xs 2xl:text-sm font-medium transition-colors duration-200 whitespace-nowrap
                          ${isActive ? 'text-[#8299bd]' : 'text-white hover:text-[#8299bd]'}`
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
                className="text-white hover:text-[#8299bd] p-2 transition-colors"
                aria-label="Toggle menu"
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
                className="lg:hidden overflow-hidden"
              >
                <div className="px-2 pt-2 pb-4 space-y-1 bg-[#162957] border-t border-gray-200">
                  {menuItems.map((item) => (
                    <div key={item} className="w-full">
                      {item === 'PEST CONTROL SERVICES' ? (
                        <div className="w-full">
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full text-left text-white hover:text-[#8299bd] px-3 py-3 text-base font-medium transition-colors duration-200 flex items-center justify-between"
                          >
                            PEST CONTROL SERVICES
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                isDropdownOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {isDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="bg-[#1e2d4d] overflow-hidden"
                              >
                                <div className="pl-6 py-2">
                                  {pestControlServices.map((service) => (
                                    <div key={service.category} className="py-2">
                                      {service.items ? (
                                        <>
                                          <div className="font-semibold text-[#8299bd] text-sm mb-1">
                                            {service.category}
                                          </div>
                                          <div className="ml-4">
                                            {service.items.map((item) => (
                                              <NavLink
                                                key={item.name}
                                                to={item.path}
                                                className="block text-white text-sm py-1 hover:text-[#8299bd] transition-colors"
                                                onClick={e => {
                                                  handleMobileLinkClick();
                                                  window.scrollTo(0,0);
                                                }}
                                              >
                                                {item.name}
                                              </NavLink>
                                            ))}
                                          </div>
                                        </>
                                      ) : (
                                        <NavLink
                                          to={service.path}
                                          className="block font-semibold text-[#8299bd] text-sm hover:text-[#162957] transition-colors"
                                          onClick={handleMobileLinkClick}
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
                        </div>
                      ) : (
                        <NavLink
                          to={routes[item]}
                          className={({ isActive }) =>
                            `block w-full px-3 py-3 text-base font-medium transition-colors duration-200
                            ${isActive ? 'text-[#8299bd] bg-[#1e2d4d]' : 'text-white hover:text-[#8299bd] hover:bg-[#1e2d4d]'}`
                          }
                          onClick={e => {
                            handleMobileLinkClick();
                            window.scrollTo(0,0);
                          }}
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
      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="h-20"></div>
    </div>
  );
};

export default Navbar;