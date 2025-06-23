import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomerReviews from '@/components/CustomerReviews';
import ServicesGrid from '@/components/ServicesGrid';

const Commercial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const importanceItems = [
    {
      title: "Health and Safety",
      content: "A pest infestation can create health and safety hazards for employees and customers. Commercial pest control services can help eliminate pests, reducing the risk of diseases and contamination. This is particularly important for businesses in the food and beverage industry, healthcare facilities, and childcare centres."
    },
    {
      title: "Reputation",
      content: "Pest infestations can damage a business's reputation, especially in industries where cleanliness is critical. Regular commercial pest control can help maintain a clean and safe environment, reassuring customers that the business takes hygiene seriously."
    },
    {
      title: "Cost Savings",
      content: "Pests can cause significant damage to a business's property, stock, and assets, leading to expensive repairs and replacements. Regular commercial pest control can prevent such damage, saving businesses money in the long run."
    },
    {
      title: "Compliance",
      content: "Some industries have strict regulations regarding pest control, such as the hospitality and healthcare industries. Regular commercial pest control can help businesses comply with these regulations, avoiding costly fines and penalties."
    }
  ];

  const industries = [
    {
      title: "Food and Beverage Industry",
      content: "Businesses in the food and beverage industry, including restaurants, cafes, and food processing factories, are highly vulnerable to pest infestations. Pests like rodents, cockroaches, and flies can contaminate food, leading to health hazards and reputational damage. Engaging a commercial pest control company regularly can help eliminate pests, protect food safety, and maintain compliance with regulatory hygiene standards."
    },
    {
      title: "Healthcare Industry",
      content: "Healthcare facilities such as hospitals, clinics, and nursing homes, must maintain a clean and hygienic environment to protect patients from infections and illnesses. Pests like bed bugs, fleas, and ticks can spread diseases, posing significant health risks for patients and staff. Commercial pest control services can help detect and eliminate pests, ensuring a safe and healthy environment for patients."
    },
    {
      title: "Retail Industry",
      content: "Retail businesses, including supermarkets and department stores, are highly susceptible to pest infestations. Pests like rats, mice, and cockroaches can damage inventory, leading to significant financial losses. Commercial pest control services can help prevent pest infestations and protect stocks, providing customers with a clean and safe shopping environment"
    },
    {
      title: "Hospitality Industry",
      content: "The hospitality industry includes hotels, resorts, and guesthouses, and one of the top priorities is to offer a clean and comfortable environment for guests. Pests like bed bugs, cockroaches, and rodents can damage a hotel’s reputation, leading to negative reviews and a loss of revenue. Regular commercial pest control services can help protect a hotel’s reputation, ensuring guests have a pleasant stay."
    }
  ];

  const preventionTips = [
    {
      tip: "Periodically check the construction of the building and windows for any gaps or cracks and seal them to keep pests out."
    },
    {
      tip: "Implement proper food and supply storage practices, such as keeping things off the ground and in sealed containers."
    },
    {
      tip: "Keeping all waste, including garbage and food waste, in proper storage and disposal."
    },
    {
      tip: "Checking for excess moisture or stagnant water and fixing any leaks or broken pipes that can attract pests."
    },
    {
      tip: "Washing and sanitising each space on a regular basis, including the furniture, walls, and equipment."
    },
    {
      tip: "Consider hiring a professional industrial pest control company for regular pest inspections and treatments."
    }
  ];

  const professionalServices = [
    {
      image: "/images/works/preven.png",
      title: "Prevention",
      description: "Regular pest control services from a professional company can stop infestations before they develop, lowering the possibility of further pest issues and the chance of damage to a company."
    },
    {
      image: "/images/works/custom.png",
      title: "Customised Solutions",
      description: "By taking into account factors, including the type of property, the severity of the pest infestation, and the regulations, pest control services can tailor their treatments to meet the unique requirements and challenges of a business"
    },
    {
      image: "/images/works/know.png",
      title: "Knowledge and Expertise",
      description: "Professionals in pest control have the skills, experience, and training to recognise and effectively handle a variety of pest issues."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial / Industrial Pest Control Services In Kuala Lumpur
            </h1>
            <p className="text-xl text-gray-600">
              Professional solutions for all business sectors
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            src="/images/slider/adds.png"
            alt="Commercial Pest Control"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Importance of Commercial / Industrial Pest Control
          </motion.h2>
          
          <div className="space-y-12">
            {importanceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="max-w-3xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Common Business Industries
          </motion.h2>

          <div className="space-y-12 max-w-3xl mx-auto mb-16">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {industry.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {industry.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Industry Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.img
                key={index}
                src={`/images/works/indus${index}.png`}
                alt={`Industry Example ${index}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              Commercial / Industrial Pest Control Prevention Tips
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12">
              Prevention is better than cure. Here are some practical measures that businesses can take to avoid a pest infestation:
            </p>

            <div className="space-y-8">
              {preventionTips.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#162957] flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Why Engage a Professional Commercial / Industrial Pest Control Company
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              For businesses, pest infestations can prove to be a nightmare, leading to harm, disruption, and even reputational and legal problems. Despite the existence of DIY pest control methods, professional industrial pest control services are a worthwhile investment due to the variety of advantages they provide.
            </p>
          </motion.div>

          <div className="space-y-12">
            {professionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-1/2"
            >
              <img
                src="/images/works/about.png"
                alt="About PestClinic"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-1/2 space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At PestClinic, no pests, no stress. As a locally established pest control company providing expert services to commercial sectors in Singapore, we are also equipped with the knowledge and experience to offer services to residential and industrial sectors alike. We dedicate ourselves to providing our customers with effective and safe pest control services, with a combined 30 years of professional expertise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We employ both conventional methods and cutting-edge technology to eradicate pests swiftly. With a team of NEA-certified specialists, they are well-trained to provide mess-free, efficient, and safe solutions for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold">
              PestClinic – Professional and Trusted Commercial / Industrial Pest Control Services in Singapore
            </h2>
            
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Commercial pest control services are fundamental for businesses to maintain a secure and healthy atmosphere for their staff members and customers. Pest infestations can harm a business's reputation, result in financial losses, and endanger people's health. Regular pest control services that can detect and address any pest problems before they get out of hand are essential to implement if you want to avoid these issues from escalating.
            </p>
            
            <p className="text-lg text-gray-600">
              Should you require reliable commercial pest control services, do not hesitate to schedule an appointment or request a quote from our professional team. To find out more about our services and how we can assist in protecting your business against pests, {' '}
              <a href="/contact" className="text-primary hover:text-primary/80 transition-colors">
                contact us
              </a>
              {' '} today.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="/contact"
                className="inline-block bg-[#162957] text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-[#162957]/80 transition-colors"
              >
                Get an inspection
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Commercial;