import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FAQSectionBedBugs from '../../../components/FAQ/FAQSectionBedBugs';

const BedBugs = () => {
  const [isTableOpen, setIsTableOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const bedBugCharacteristics = {
    'Latin Name': 'Cimex lectularius',
    'Length': '5-7mm',
    'Colour': 'Brown to reddish-brown',
    'Common Sighting': 'Mattresses, furniture crevices'
  };

  const tableOfContents = [
    { title: '1. Looking for Bed Bug Pest Control in Kuala Lumpur?', id: 'looking-for' },
    {
      title: '2. Signs of Bed Bugs Infestation',
      id: 'signs',
      subItems: [
        { title: '2.1. Exoskeletons of Bed Bugs', id: 'exoskeletons' },
        { title: '2.2. Live bed bugs on your mattresses and sheets', id: 'live-bugs' },
        { title: '2.3. Rust–coloured spots from their bloody faecal material', id: 'spots' },
        { title: '2.4. A musty and sweet odour', id: 'odour' },
        { title: '2.5. Bites that come in straight lines or tight clusters', id: 'bites' }
      ]
    },
    {
      title: '3. What are the Bed Bugs Pest Control Methods in Malaysia?',
      id: 'methods',
      subItems: [
        { title: '3.1. Inspection', id: 'inspection' },
        { title: '3.2. Pesticide Sprays', id: 'sprays' },
        { title: '3.3. Mist Fumigation', id: 'fumigation' },
        { title: '3.4. Vacuuming', id: 'vacuuming' }
      ]
    },
    { title: '4. Bed Bugs Pest Control Prevention Tips', id: 'prevention' },
    {
      title: '5. Impact of Bed Bugs Infestation',
      id: 'impact',
      subItems: [
        { title: '5.1. Mental health impact', id: 'mental-health' },
        { title: '5.2. Damage to property', id: 'property-damage' },
        { title: '5.3. Allergic reactions', id: 'allergic' }
      ]
    },
    { title: '6. Quick Facts on Bed Bugs', id: 'quick-facts' },
    { title: '7. What Do Bed Bugs Look Like?', id: 'appearance' },
    { title: '8. Where Do Bed Bugs Hide?', id: 'hiding-spots' },
    { title: '9. What Do Bed Bugs Feed On?', id: 'feeding' },
    { title: '10. How To Identify Bed Bug Bites?', id: 'identify-bites' },
    { title: '11. PestClinic – Professional and Trusted Bed Bugs Control in Malaysia', id: 'pestclinic' },
    {
      title: '12. Frequently Asked Questions',
      id: 'faq',
      subItems: [
        { title: '12.1. How long does it take to get rid of bed bugs?', id: 'faq-duration' },
        { title: '12.2. Can I treat bed bugs on my own?', id: 'faq-self-treatment' },
        { title: '12.3. Do bed bug treatments require multiple visits?', id: 'faq-visits' },
        { title: '12.4. How much does bed bug control in Malaysia cost?', id: 'faq-cost' },
        { title: '12.5. How can I prevent future bed bug infestations?', id: 'faq-prevention' },
        { title: '12.6. How to stop bed bugs from spreading?', id: 'faq-spreading' },
        { title: '12.7. How much does it cost to get rid of bed bugs in Malaysia?', id: 'faq-sg-cost' },
        { title: '12.8. Is it possible to 100% get rid of bed bugs?', id: 'faq-complete' },
        { title: '12.9. Is bed bug common in Malaysia?', id: 'faq-common' },
        { title: '12.10. What kills bed bugs permanently?', id: 'faq-kill' }
      ]
    }
  ];

  const faqItems = [
    {
      question: "How long does it take to get rid of bed bugs?",
      answer: "Treatment duration varies depending on infestation severity, typically 2-4 treatments over several weeks."
    },
    {
      question: "Can I treat bed bugs on my own?",
      answer: "While DIY methods exist, professional treatment is recommended for effective and complete elimination."
    },
    {
      question: "Do bed bug treatments require multiple visits?",
      answer: "Yes, multiple treatments are usually necessary to ensure complete elimination of all life stages."
    },
    {
      question: "How much does bed bug control in Malaysia cost?",
      answer: "Costs vary based on infestation size and treatment method. Contact us for a detailed quote."
    },
    {
      question: "How can I prevent future bed bug infestations?",
      answer: "Regular inspections, proper hygiene, and immediate action upon first signs are key prevention methods."
    },
    {
      question: "How to stop bed bugs from spreading?",
      answer: "Isolate infected items, wash fabrics in high heat, and contact professionals immediately."
    },
    {
      question: "How much does it cost to get rid of bed bugs in Malaysia?",
      answer: "Treatment costs depend on property size and infestation severity. Contact us for accurate pricing."
    },
    {
      question: "Is it possible to 100% get rid of bed bugs?",
      answer: "Yes, with proper professional treatment and follow-up procedures, complete elimination is possible."
    },
    {
      question: "Is bed bug common in Malaysia?",
      answer: "Yes, bed bugs are relatively common in Malaysia due to the tropical climate and urban density."
    },
    {
      question: "What kills bed bugs permanently?",
      answer: "Professional heat treatment combined with targeted pesticide application is most effective for permanent elimination."
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderContent = () => (
    <div className="space-y-12">
      {/* Main sections */}
      <section id="looking-for" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Looking for Bed Bug Pest Control in Kuala Lumpur?</h2>
          <div className="prose max-w-none text-gray-700">
          <p>
            At Serval Integrated Pest Management, we specialise in bed bug pest control services in Malaysia at competitive prices. Our team of skilled technicians adopt effective treatment methods to locate and control bed bug infestations, preventing further damage and restoring the hygiene and comfort of your property. Trust us to deliver the best bed bug pest control in Malaysia at a reasonable price, and say goodbye to bed bugs when you engage in our bed bug control solutions today.
          </p>
          {/* Add content here */}
        </div>
      </section>

      <section id="signs" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Signs of Bed Bugs Infestation</h2>
        <div className="space-y-8">
          <div id="exoskeletons" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Exoskeletons of Bed Bugs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/controls/exos.png" 
                alt="Bed Bug Exoskeletons"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                {/* Add content here */}
                <p>Bed bugs moult and grow, losing their skins (or exoskeletons) along the way. Often translucent, these exoskeletons may look like empty shells of the bugs. You may commonly find them in areas where bed bugs like to hide, including the crevices of your furniture, along the edges of your bedding, or in the seams of your mattress. You can gauge the extent of the infestation by the number of exoskeletons you come across. Should you notice a growing number of exoskeletons, the chances are that the infestation is becoming worse, and bed bugs are continuing to grow and reproduce.</p>
              </div>
            </div>
          </div>

          <div id="live-bugs" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Live bed bugs on your mattresses and sheets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/controls/livebed.png" 
                alt="Live Bed Bugs"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>One of the easiest ways to tell if you have a bed bug infestation is to find live bed bugs on your mattresses and bed sheets. These small insects, which resemble apple seeds in size, are often visible to the naked eye. Bed bugs emerge from their hiding places to become more active at night, feeding on the blood of their hosts. If you notice live bed bugs crawling on your sheets, mattress, or other surfaces, it is a clear indication that there is an infestation present in the home</p>
                {/* Add content here */}
              </div>
            </div>
          </div>

          <div id="spots" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Rust–coloured spots from their bloody faecal material that they excrete after feeding</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/controls/spots.png" 
                alt="Live Bed Bugs"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>After consuming blood, bed bugs produce waste that appears as tiny, rust-coloured stains on mattresses, furniture, and bedding. These spots may indicate the presence of bed bugs, especially if they appear along seams or in clusters – common places for bed bugs to hide. When touched, the spots may also smear, which might be a very clear sign of their source.</p>
                {/* Add content here */}
              </div>
            </div>
          </div>

          <div id="odour" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">A musty and sweet odour</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/controls/odour.png" 
                alt="Live Bed Bugs"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>Scent glands on bed bugs provide a unique musty odour that can be particularly detectable in places with a heavy infestation. Even if you don’t see any bed bugs, the smell can still be recognised and is frequently characterised as sweet or sickly-sweet. Bed bugs generate pheromones, chemicals they use to communicate with one another and the primary reason for the musty odour. In essence, the pheromones are a way for bed bugs to mark their territory, draw other bed bugs to a specific area, or signal one another. The intensity of the odour can be a sign of how severe the infestation is. The smell in strongly infested places can be overpowering and very repulsive. However, with less severe infestations, the smell could be quite faint and challenging to detect.</p>
                {/* Add content here */}
              </div>
            </div>
          </div>

          <div id="bites" className="scroll-mt-24">
            <h3 className="text-xl font-semibold mb-4">Bites that come in straight lines or tight clusters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="/images/controls/bites.png" 
                alt="Live Bed Bugs"
                className="rounded-lg w-full"
              />
              <div className="prose max-w-none">
                <p>The majority of the time, bed bug bites are painless and may not be spotted right away. However, they can turn into itchy welts that can be arranged in a line or tight clusters. The linear feeding habits of bed bugs – which frequently bite numerous times in a row – lead to the straight-line or cluster pattern of bites. It is important to note that not everyone experiences a visible reaction to bed bug bites; in fact, some people may not experience any apparent reaction at all.</p>
                {/* Add content here */}
              </div>
            </div>
          </div>

          {/* Continue with other subsections following the same pattern */}
        </div>
      </section>

      {/* Pest Control Methods Section */}
      {renderPestControlMethods()}

      {/* Prevention and Impact Sections */}
      {renderPreventionAndImpact()}

      {/* Continue with other main sections following the same pattern */}
    </div>
  );

  const renderPestControlMethods = () => (
    <section id="methods" className="scroll-mt-24 space-y-8">
      <h2 className="text-2xl font-bold mb-6">What are the Bed Bugs Pest Control Methods in Kuala Lumpur?</h2>
      

      {/* Inspection Method */}
      <div id="inspection" className="scroll-mt-24 space-y-4">
        <h3 className="text-xl font-semibold text-[#162957]">Inspection</h3>
        <p className="text-gray-700 leading-relaxed">
          A thorough inspection of the infested areas is conducted to determine the extent of the infestation, identify the locations where bed bugs are hiding, and assess any contributing factors.
        </p>
      </div>

      {/* Pesticide Sprays Method */}
      <div id="sprays" className="scroll-mt-24 space-y-4">
        <h3 className="text-xl font-semibold text-[#162957]">Pesticide Sprays</h3>
        <p className="text-gray-700 leading-relaxed">
          Residual pesticide sprays that are specifically designed for bed bug control are applied to areas of our recommended interval where bed bugs are likely to hide, including mattresses, bed frames, skirting, cracks, electrical conduits etc. The pesticides have a residual effect, meaning they continue to work for an extended period, killing bed bugs that come into contact with the treated surfaces.
        </p>
      </div>

      {/* Mist Fumigation Method */}
      <div id="fumigation" className="scroll-mt-24 space-y-4">
        <h3 className="text-xl font-semibold text-[#162957]">Mist Fumigation</h3>
        <p className="text-gray-700 leading-relaxed">
          Mist fumigation involves the application of a fine mist of insecticide into the air. The mist contains tiny particles of insecticide that can reach into cracks, crevices, and other hiding places where bed bugs may be present. This method helps to kill bed bugs that are difficult to access with other treatment methods.
        </p>
      </div>

      {/* Vacuuming Method */}
      <div id="vacuuming" className="scroll-mt-24 space-y-4">
        <h3 className="text-xl font-semibold text-[#162957]">Vacuuming</h3>
        <p className="text-gray-700 leading-relaxed">
          Vacuuming is employed to physically remove bed bugs, eggs, and nymphs from infested areas. It helps to reduce the population and eliminate visible bugs.
        </p>
      </div>

      {/* Additional Notes */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <p className="text-gray-700 leading-relaxed">
          At Serval Integrated Pest Management, we take on a comprehensive approach that can combine multiple strategies to control bed bugs, focusing on long-term prevention and ongoing monitoring to ensure the effectiveness of the control methods.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          It is important to note that bed bug treatments can vary depending on the severity of the infestation and the specific circumstances. It is recommended to contact us for a professional bed bugs inspection to assess the situation and determine the most appropriate and effective bed bug pest control plan.
        </p>
      </div>

      {/* Treatment Images Grid */}
      <div className="flex justify-center mt-8">
        <img
          src="/images/services/protect.jpg"
          alt="Bed Bug Treatment Process"
          className="w-full max-w-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  );

  const renderPreventionAndImpact = () => (
    <>
      {/* Prevention Tips Section */}
      <section id="prevention" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-6">Bed Bugs Pest Control Prevention Tips</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            In order to avoid a bed bug infestation in the first place, it's vital to take precautions, as they can be difficult and a persistent nuisance to get rid of. Here are some suggestions for preventing bed bugs:
          </p>
          <ul className="space-y-3 list-disc pl-6 text-gray-700">
            <li>Wash your clothing and bedding regularly in hot water and dry on high heat to eliminate bed bugs.</li>
            <li>Vacuuming all cracks and crevices, including under furniture, regularly can help remove bed bugs or eggs that may be hiding in your home.</li>
            <li>Seal any cracks or crevices with caulk to prevent bed bugs from entering.</li>
            <li>When travelling, be sure to inspect hotel rooms and other accommodations, as bed bugs can hitch a ride on your luggage and other items.</li>
            <li>Reduce clutter as much as possible in your home, as bed bugs thrive in cluttered environments.</li>
            <li>Encase your mattresses in protective covers designed to keep bed bugs out.</li>
            <li>When buying secondhand clothing and furniture, inspect the items carefully before bringing them into the house.</li>
          </ul>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="scroll-mt-24 space-y-8">
        <h2 className="text-2xl font-bold mb-6">Impact of Bed Bugs Infestation</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-6">
            Bed bugs do not transmit diseases to people or cause structural damage to buildings like many other pests do. That said, they can still have several negative effects on humans since they feed on human blood. The following are some impacts of a bed bug infestation:
          </p>

          <div id="mental-health" className="scroll-mt-24 mb-8">
            <h3 className="text-xl font-semibold text-[#162957] mb-3">Mental health impact</h3>
            <p className="text-gray-700">
              The anxiety and stress brought on by a bed bug infestation can drastically impact a person's mental health. An infestation of bed bugs can disrupt sleep, leading to irritability, fatigue, and difficulty concentrating. Additionally, it might cause feelings of embarrassment, loneliness, and stigma.
            </p>
          </div>

          <div id="property-damage" className="scroll-mt-24 mb-8">
            <h3 className="text-xl font-semibold text-[#162957] mb-3">Damage to property</h3>
            <p className="text-gray-700">
              Unlike termites and rats, bed bugs do not harm the structure of a building, but they can damage the property's aesthetics. Blood flecks and bed bug droppings can be seen all throughout a strongly infested property, including on the mattress, bed frames, and walls. If the stains cannot be removed, owners will need to replace the items. Moreover, the walls may also need to be repainted, which can also be expensive.
            </p>
          </div>

          <div id="allergic" className="scroll-mt-24">
            <h3 className="text-xl font-semibold text-[#162957] mb-3">Allergic reactions</h3>
            <p className="text-gray-700">
              Bed bug bites do not cause danger to humans. Some individuals don't even respond to the bites at all. Nonetheless, those who develop allergic reactions to bed bug bites may experience excruciating swelling or severe itching in the area of the bites. In this case, seeking medical help will be necessary to reduce allergy symptoms.
            </p>
          </div>
        </div>
      </section>
    </>
  );

  const renderBedBugInformation = () => (
    <>
      {/* Quick Facts Section */}
      <section id="quick-facts" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-6">Quick Facts on Bed Bugs</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            Bed bugs, or their scientific name Cimex lectularius, feed on sleeping human hosts. They are one of the world's most common pests and are prevalent in densely populated cities. While they do not transmit any diseases, their presence is still a cause of concern due to the effect on human health, both physically and psychologically.
          </p>
          <p className="mt-4">
            These bloodsucking insects come alive at times when you are asleep. They can be present in hotels and various other staple establishments in Malaysia.
          </p>
        </div>
      </section>

      {/* Appearance Section */}
      <section id="appearance" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-6">What Do Bed Bugs Look Like?</h2>
        <div className="prose max-w-none text-gray-700">
          <p>Here are a few facts to identify bed bugs:</p>
          <ul className="space-y-3 list-disc pl-6">
            <li>The size and shape of adult bed bugs are comparable to that of apple seeds.</li>
            <li>When unfed, they are oval in shape, body brown, and flat; after feeding, they enlarge and acquire a reddish hue.</li>
            <li>Young bed bugs are whitish-yellow and much tinier. They can't be seen with the naked eye if they haven't been fed in a while.</li>
            <li>They have six short legs and are about 0.5 mm long.</li>
            <li>The eggs of a bed bug are pearl-white and pill-box-sized and resemble a tiny, pale poppy seed.</li>
          </ul>
        </div>
      </section>

      {/* Hiding Places Section */}
      <section id="hiding-spots" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-6">Where Do Bed Bugs Hide?</h2>
        <div className="prose max-w-none text-gray-700">
          <p>You can find these pests hiding around your bedroom under cushions. Their flat shapes and microscopic sizes allow them to hide almost anywhere. Bed bugs are excellent at hiding and can be found in a variety of locations, including:</p>
          <ul className="space-y-3 list-disc pl-6">
            <li>Bed frameboard, headboard, box frame, pillows, pillowcases, mattress and pictures, curtains and rods, skirting frames, electrical outlets and sockets, and the like.</li>
            <li>Furniture: On beds, children's toys, books and bookshelves, chairs, seats, tables, cushions, couches, and the like.</li>
            <li>Wall: Floorboard, baseboard, behind, under frames, pillows, wallpapers, and more.</li>
            <li>Hard to fix hot: Drawers, nightstands, storage boxes, and more.</li>
          </ul>
        </div>
      </section>

      {/* Feeding Section */}
      <section id="feeding" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-6">What Do Bed Bugs Feed On?</h2>
        <div className="prose max-w-none text-gray-700">
          <p>
            They require blood in order to reproduce and complete their life cycle. Both male and female bed bugs feed on blood. Regrettably, feeding on blood causes no blood shortages because bed bugs cannot feed more often than once every night. Bed bugs can survive on their last food for up to one year. If a more sustainable food source can be found, bed bugs will feed once a week.
          </p>
        </div>
      </section>

      {/* Bite Identification Section */}
      <section id="identify-bites" className="scroll-mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-6">How To Identify Bed Bug Bites?</h2>
        <div className="space-y-6">
          <p className="text-gray-700">
            Please note that not everyone reacts, and each individual reacts differently. Not everyone who gets bitten by bed bugs will have an irritation on the spot. However, bed bug bites produce common traits that can become evidently itchy:
          </p>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bed Bugs</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Location</td>
                  <td className="px-6 py-4 text-sm text-gray-700">They can appear anywhere on the hands, arms, face, and neck.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Appearance</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Small, raised bumps that may appear a bit red like after the initial bite. Take about 1-2 days following the initial bite. Symptoms up to about 14 days if allergic.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Symptoms</td>
                  <td className="px-6 py-4 text-sm text-gray-700">From mild itching to anaphylaxis, attack for those who is rite. Common bites would appear in a linear or zigzag row.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );

  const renderFAQSection = () => (
    <section id="faq" className="scroll-mt-24 mb-12">
      <FAQSectionBedBugs faqs={faqItems} />
    </section>
  );

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
          src="/images/controls/bedbugs.jpg"
          alt="Bed Bugs Control Services Banner"
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
            <Link to="/services" className="hover:text-primary transition-colors">Pest Control Services</Link>
            <span className="mx-2">&gt;</span>
            <span>Bed Bugs Control</span>
          </motion.nav>
        </div>
      </motion.header>

      <div className="flex-grow py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Characteristics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="/images/controls/bedbugs.png"
                alt="Bed Bug Characteristics"
                className="w-60 h-90 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {Object.entries(bedBugCharacteristics).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-2">
                  <span className="font-semibold">{key}:</span>
                  <span className="ml-2">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            className="mb-12"
          >
            <button
              onClick={() => setIsTableOpen(!isTableOpen)}
              className="w-full bg-[#162957] text-white p-4 rounded-lg flex justify-between items-center"
            >
              <span className="text-xl font-bold">Table of Contents</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform ${isTableOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isTableOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-white rounded-lg shadow-lg p-6"
              >
                <div className="space-y-4">
                  {tableOfContents.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-left w-full hover:text-[#162957] transition-colors"
                      >
                        {item.title}
                      </button>
                      {item.subItems && (
                        <div className="pl-6 space-y-2">
                          {item.subItems.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => scrollToSection(subItem.id)}
                              className="text-left w-full text-gray-600 hover:text-[#162957] transition-colors"
                            >
                              {subItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Main Content */}
          {renderContent()}
          {renderBedBugInformation()}
          {renderFAQSection()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BedBugs;