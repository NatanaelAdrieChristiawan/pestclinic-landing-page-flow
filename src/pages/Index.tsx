import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import WhyChooseUs from '@/components/WhyChooseUs';
import AdvertisementBanner from '@/components/AdvertisementBanner';
import PortfolioGallery from '@/components/PortfolioGallery';
import CustomerReviews from '@/components/CustomerReviews';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsappFloatingButton from '@/components/WhatsappFloatingButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <AdvertisementBanner />
      <PortfolioGallery />
      <CustomerReviews />
      <FAQSection />
      <Footer />
      <WhatsappFloatingButton />
    </div>
  );
};

export default Index;
