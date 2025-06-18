import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSectionMosquitos = ({ faqs }: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full flex items-center justify-between p-4 bg-primary text-white hover:bg-primary/90 transition-colors"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-left font-medium">{faq.question}</span>
              <Plus
                className={`w-5 h-5 transition-transform ${
                  activeIndex === index ? 'rotate-45' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSectionMosquitos;