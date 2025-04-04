import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const About = () => {
  const heroConfig = {
    title: "About",
    taglinePrefix: "Crafting digital experiences with",
    taglineEmphasis: "passion and purpose",
    scrollText: "Learn More About Us",
    rightText: "Our Values",
    scrollElementId: "about-content"
  };

  // State for hero section animation
  const [heroLoaded, setHeroLoaded] = useState(false);
  
  // Effect for hero animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Refs for sections we want to animate
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // States to track if elements are visible
  const [storyVisible, setStoryVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === storyRef.current) {
          setStoryVisible(entry.isIntersecting);
        } else if (entry.target === valuesRef.current) {
          setValuesVisible(entry.isIntersecting);
        } else if (entry.target === teamRef.current) {
          setTeamVisible(entry.isIntersecting);
        } else if (entry.target === contactRef.current) {
          setContactVisible(entry.isIntersecting);
        }
      });
    }, {
      threshold: 0.1
    });
    if (storyRef.current) observer.observe(storyRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (storyRef.current) observer.unobserve(storyRef.current);
      if (valuesRef.current) observer.unobserve(valuesRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection title={heroConfig.title} taglinePrefix={heroConfig.taglinePrefix} taglineEmphasis={heroConfig.taglineEmphasis} scrollText={heroConfig.scrollText} rightText={heroConfig.rightText} scrollElementId={heroConfig.scrollElementId} />

        <div className="px-6 md:px-8 py-16" id="about-content">
          <div className="max-w-7xl mx-auto">
            {/* Story Section */}
            <div ref={storyRef} className={`transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-16">Our Story</h2>
              <div className="grid md:grid-cols-2 gap-12 mb-24">
                <div className="space-y-6">
                  <p className="text-lg text-black/70">
                    Founded in 2025, NexOva emerged from a simple yet powerful idea: to bridge the gap between innovative design and technical excellence. 
                    We believe that truly effective digital experiences should not only look impressive but also function flawlessly.
                  </p>
                  <p className="text-lg text-black/70">
                    Our team of designers and developers work together seamlessly to create digital solutions that drive real business results. 
                    We're not just building websites; we're crafting digital experiences that transform how brands connect with their audiences.
                  </p>
                </div>
                <div className="bg-black/5 rounded-lg p-8 h-64 flex items-center justify-center">
                  <p className="text-xl font-display italic text-center">"We don't just build websites, we craft experiences that tell your story."</p>
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div ref={valuesRef} className={`transition-all duration-1000 ease-out ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-16">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                <div className="p-8 border border-black/10 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4">Innovation</h3>
                  <p className="text-black/70">We embrace new technologies and creative approaches to solve complex problems.</p>
                </div>
                <div className="p-8 border border-black/10 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4">Excellence</h3>
                  <p className="text-black/70">We maintain the highest standards in everything we do, from design to development.</p>
                </div>
                <div className="p-8 border border-black/10 rounded-lg">
                  <h3 className="text-2xl font-display font-semibold mb-4">Collaboration</h3>
                  <p className="text-black/70">We believe the best results come from working together with our clients and each other.</p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div ref={teamRef} className={`transition-all duration-1000 ease-out ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-16">Our Team</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                <div className="p-8 border border-black/10 rounded-lg text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-black/5 flex items-center justify-center">
                    <span className="text-3xl font-display">S</span>
                  </div>
                  <h3 className="text-xl font-medium">Sasrutha Gagana</h3>
                  <p className="text-black/70 mt-2">Creative Director</p>
                </div>
                <div className="p-8 border border-black/10 rounded-lg text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-black/5 flex items-center justify-center">
                    <span className="text-3xl font-display">V</span>
                  </div>
                  <h3 className="text-xl font-medium">Vishmika Rashith</h3>
                  <p className="text-black/70 mt-2">Lead Developer</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div ref={contactRef} className={`transition-all duration-1000 ease-out ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default About;
