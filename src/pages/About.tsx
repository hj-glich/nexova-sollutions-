import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import { useEffect, useState } from 'react';

const About = () => {
  const heroConfig = {
    title: "About",
    taglinePrefix: "Crafting digital experiences with",
    taglineEmphasis: "passion and purpose",
    scrollText: "Learn More About Us",
    rightText: "Our Values",
    scrollElementId: "about-content"
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

        <div className="px-6 md:px-8 py-16" id="about-content">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About NexOva
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-display font-semibold">Our Story</h3>
                <p className="text-muted-foreground">
                  Founded in 2025, NexOva emerged from a simple yet powerful idea: to bridge the gap between innovative design and technical excellence. 
                  We believe that truly effective digital experiences should not only look impressive but also function flawlessly.
                </p>
                <p className="text-muted-foreground">
                  Our team of designers and developers work together seamlessly to create digital solutions that drive real business results. 
                  We're not just building websites; we're crafting digital experiences that transform how brands connect with their audiences.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-muted rounded-lg p-8"
              >
                <h3 className="text-2xl font-display font-semibold mb-6">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">1</div>
                    <div>
                      <h4 className="font-medium">Innovation</h4>
                      <p className="text-sm text-muted-foreground">We embrace new technologies and creative approaches.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">2</div>
                    <div>
                      <h4 className="font-medium">Excellence</h4>
                      <p className="text-sm text-muted-foreground">We maintain the highest standards in everything we do.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">3</div>
                    <div>
                      <h4 className="font-medium">Collaboration</h4>
                      <p className="text-sm text-muted-foreground">We believe the best results come from working together.</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-background border rounded-lg p-8 mb-16"
            >
              <h3 className="text-2xl font-display font-semibold mb-6">Our Team</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "Alex Rivera", title: "Creative Director" },
                  { name: "Morgan Chen", title: "Lead Developer" },
                  { name: "Sam Taylor", title: "UX Designer" },
                  { name: "Jordan Walsh", title: "Project Manager" }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-muted mb-3"></div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
