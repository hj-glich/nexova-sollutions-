
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Agency = () => {
  const heroConfig = {
    title: "Agency",
    taglinePrefix: "Building brands with",
    taglineEmphasis: "purpose and precision",
    scrollText: "Discover Our Agency",
    rightText: "Expertise",
    scrollElementId: "agency-content"
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection
          title={heroConfig.title}
          taglinePrefix={heroConfig.taglinePrefix}
          taglineEmphasis={heroConfig.taglineEmphasis}
          scrollText={heroConfig.scrollText}
          rightText={heroConfig.rightText}
          scrollElementId={heroConfig.scrollElementId}
        />
        
        <div className="pt-16 px-8 pb-16" id="agency-content">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-12 animate-fade-up">Agency</h1>
            <p className="text-lg max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Coming soon. We're currently working on our agency page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agency;
