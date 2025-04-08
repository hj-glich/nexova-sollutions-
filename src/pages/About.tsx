
import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Users, Lightbulb, CheckCircle, Mail } from 'lucide-react';

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

        <div className="px-6 md:px-8 py-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGwtb3BhY2l0eT0iLjA1IiBmaWxsPSIjMDAwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMiIvPjxyZWN0IHN0cm9rZS1vcGFjaXR5PSIuMDMiIHN0cm9rZT0iIzAwMCIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcng9IjEiLz48L2c+PC9zdmc+')]" id="about-content">
          <div className="max-w-7xl mx-auto">
            {/* Story Section */}
            <div ref={storyRef} className={`transition-all duration-1000 ease-out ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-black to-black/70 bg-clip-text text-transparent"
              >
                Our Story
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-12 mb-24">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <p className="text-lg text-black/70 leading-relaxed">
                    Founded in 2025, NexOva emerged from a simple yet powerful idea: to bridge the gap between innovative design and technical excellence. 
                    We believe that truly effective digital experiences should not only look impressive but also function flawlessly.
                  </p>
                  <p className="text-lg text-black/70 leading-relaxed">
                    Our team of designers and developers work together seamlessly to create digital solutions that drive real business results. 
                    We're not just building websites; we're crafting digital experiences that transform how brands connect with their audiences.
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg p-8 shadow-lg backdrop-blur-sm border border-black/5 flex items-center justify-center"
                >
                  <p className="text-xl font-display italic text-center">
                    "We don't just build websites, we craft experiences that tell your story."
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Values Section */}
            <div ref={valuesRef} className={`transition-all duration-1000 ease-out ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-black to-black/70 bg-clip-text text-transparent"
              >
                Our Values
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8 mb-24">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 bg-white border border-black/10 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 mb-6 rounded-full bg-black/5 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-black/70" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Innovation</h3>
                  <p className="text-black/70">We embrace new technologies and creative approaches to solve complex problems.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 bg-white border border-black/10 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 mb-6 rounded-full bg-black/5 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-black/70" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Excellence</h3>
                  <p className="text-black/70">We maintain the highest standards in everything we do, from design to development.</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 bg-white border border-black/10 rounded-lg shadow-md"
                >
                  <div className="w-12 h-12 mb-6 rounded-full bg-black/5 flex items-center justify-center">
                    <Users className="w-6 h-6 text-black/70" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold mb-4">Collaboration</h3>
                  <p className="text-black/70">We believe the best results come from working together with our clients and each other.</p>
                </motion.div>
              </div>
            </div>

            {/* Team Section */}
            <div ref={teamRef} className={`transition-all duration-1000 ease-out ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-6xl font-display font-bold mb-8 bg-gradient-to-r from-black to-black/70 bg-clip-text text-transparent"
              >
                Our Team
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="p-8 bg-white border border-black/10 rounded-lg text-center shadow-md"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-black/10 to-black/5 flex items-center justify-center">
                    <span className="text-3xl font-display">S</span>
                  </div>
                  <h3 className="text-xl font-medium">Sasrutha Gagana</h3>
                  <p className="text-black/70 mt-2">Creative Director</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="p-8 bg-white border border-black/10 rounded-lg text-center shadow-md"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-black/10 to-black/5 flex items-center justify-center">
                    <span className="text-3xl font-display">V</span>
                  </div>
                  <h3 className="text-xl font-medium">Vishmika Rashith</h3>
                  <p className="text-black/70 mt-2">Lead Developer</p>
                </motion.div>
              </div>
            </div>

            {/* Contact Section */}
            <div ref={contactRef} className={`transition-all duration-1000 ease-out ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg border border-black/5"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-black/5 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-black/70" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Get in Touch</h3>
                <p className="text-lg text-black/70 mb-6">
                  Ready to start your next project with us? Send us a message and we'll get back to you as soon as possible!
                </p>
                <a 
                  href="/contact" 
                  className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-black/80 transition-colors"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};

export default About;
