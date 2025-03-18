
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-32 px-6 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-6xl font-display font-bold mb-12 animate-fade-up"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About NexOva
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-display font-semibold">Our Story</h2>
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
              <h2 className="text-2xl font-display font-semibold mb-6">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">1</div>
                  <div>
                    <h3 className="font-medium">Innovation</h3>
                    <p className="text-sm text-muted-foreground">We embrace new technologies and creative approaches.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">2</div>
                  <div>
                    <h3 className="font-medium">Excellence</h3>
                    <p className="text-sm text-muted-foreground">We maintain the highest standards in everything we do.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">3</div>
                  <div>
                    <h3 className="font-medium">Collaboration</h3>
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
            <h2 className="text-2xl font-display font-semibold mb-6">Our Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Alex Rivera", title: "Creative Director" },
                { name: "Morgan Chen", title: "Lead Developer" },
                { name: "Sam Taylor", title: "UX Designer" },
                { name: "Jordan Walsh", title: "Project Manager" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full bg-muted mb-3"></div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
