import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

const TermiteTreatment = () => {
  const termiteCharacteristics = {
    'Latin Name': 'Isoptera',
    'Length': '4-15mm',
    'Colour': 'White to light brown',
    'Common Sighting': 'Wooden structures, soil'
  };

  const renderContent = () => (
    <div className="space-y-12">
      {/* Hero Section with Main Title */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('/images/services/termite/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Top Termite Control Company in Singapore
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            Termites are a common pest problem for many homeowners, causing damage to wooden structures and buildings, that costs money. Some common effects include hollow timber, mud tubes, termite droppings which if left untreated, could rage for years.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Our network includes the best termite control solutions in Singapore known for our efficiency, cutting-edge methods, and commitment to customer satisfaction. Whether you need regular inspection or immediate service activation, we've got you covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expert Service Card */}
            <div className="bg-red-800 p-8 text-white rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4">Expert Termite Control</h3>
              <p className="text-sm leading-relaxed">
                Proud to be one of the few termite companies in Singapore licensed to carry termiticide. Our specialists are trained in termite biology, prevention, and eco-friendly solutions. We ensure long-term protection from termite attacks.
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                If you're looking to buy local termite control company in Singapore, you have to look. Our team is equipped to handle all types of termite species present in Singapore.
              </p>
            </div>

            {/* Affordable Service Card */}
            <div className="bg-red-700 p-8 text-white rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4">Affordable Termite Control Service</h3>
              <p className="text-sm leading-relaxed">
                Curious about the termite control cost in Singapore? While you may find various termite companies offering treatment tips, We offer competitive pricing with fantastic results & service without compromising.
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                We understand that investing in termite control can be costly and burdensome, Our pricing is transparent and tailored to your specific needs.
              </p>
            </div>

            {/* Effective Service Card */}
            <div className="bg-red-600 p-8 text-white rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4">Effective Termite Control at your Door Step</h3>
              <p className="text-sm leading-relaxed">
                Protect your home from termites with our expert Singapore termite control company. Using technology and expertise, we handle termite colonies effectively while being safe for your family.
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                Having a reliable partner in termite control is essential, especially for expensive fixtures caused by termite destruction. Worry no more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Property?</h2>
          <p className="mb-8 text-lg">Contact us today for professional termite control services</p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {renderContent()}
      <Footer />
    </div>
  );
};

export default TermiteTreatment;