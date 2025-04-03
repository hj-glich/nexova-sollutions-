import { useEffect, useRef, useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
const Contact = () => {
  // Refs for sections we want to animate
  const infoRef = useRef<HTMLDivElement>(null);
  const officeRef = useRef<HTMLDivElement>(null);
  const connectRef = useRef<HTMLDivElement>(null);

  // States to track if elements are visible
  const [infoVisible, setInfoVisible] = useState(false);
  const [officeVisible, setOfficeVisible] = useState(false);
  const [connectVisible, setConnectVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === infoRef.current) {
          setInfoVisible(entry.isIntersecting);
        } else if (entry.target === officeRef.current) {
          setOfficeVisible(entry.isIntersecting);
        } else if (entry.target === connectRef.current) {
          setConnectVisible(entry.isIntersecting);
        }
      });
    }, {
      threshold: 0.1
    });
    if (infoRef.current) observer.observe(infoRef.current);
    if (officeRef.current) observer.observe(officeRef.current);
    if (connectRef.current) observer.observe(connectRef.current);
    return () => {
      if (infoRef.current) observer.unobserve(infoRef.current);
      if (officeRef.current) observer.unobserve(officeRef.current);
      if (connectRef.current) observer.unobserve(connectRef.current);
    };
  }, []);
  return <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main>
        {/* Hero Section with dark theme */}
        <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-center max-w-5xl px-6">
              <div className="flex justify-between items-center w-full mb-8 px-8 md:px-12 lg:px-24">
                <span className="text-white/70 font-medium">Reach Out</span>
                <span className="text-white/70 font-medium">Say Hello</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-display lowercase tracking-tighter font-bold mb-12">
                contact
              </h1>
              <div className="flex flex-col items-center space-y-12">
                <p className="text-xl md:text-2xl text-white/80 font-display max-w-2xl">
                  Don't let your vision wait
                </p>
                <p className="text-xl md:text-2xl text-white font-display italic">
                  Let's bring it to life
                </p>
              </div>
              <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8 md:px-12 lg:px-24">
                <div className="flex items-center space-x-2">
                  <span className="text-white/70 scroll-indicator">↓</span>
                  <span className="text-white/70">Scroll to Explore</span>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-24 px-8" id="contact-info">
          <div className="max-w-7xl mx-auto">
            <div ref={infoRef} className={`transition-all duration-1000 ease-out ${infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-16">Let's Connect</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-lg text-white/70">
                    Have a project in mind? Let us know what you're looking for, and we'll help you achieve your digital goals. 
                    Our team is ready to collaborate with you to create something exceptional.
                  </p>
                  <div className="flex flex-col space-y-3">
                    <a href="mailto:sasruthagagana@gmail.com" className="inline-flex items-center space-x-3 text-lg font-medium text-white hover:text-white/70 transition-colors">
                      <Mail className="w-5 h-5" />
                      <span>sasruthagagana@gmail.com</span>
                    </a>
                    <a href="tel:+94761827887" className="inline-flex items-center space-x-3 text-lg font-medium text-white hover:text-white/70 transition-colors">
                      <Phone className="w-5 h-5" />
                      <span>+94 76 182 7887</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="h-px w-full bg-white/20 mb-6 md:hidden"></div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-1 text-white/70" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Working Hours</h3>
                      <p className="text-white/70">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/70">Saturday: By appointment only</p>
                      <p className="text-white/70">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-white/70" />
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-white/70">Makola, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Section */}
        <section className="py-24 px-8 bg-black/90" id="our-office">
          <div className="max-w-7xl mx-auto">
            <div ref={officeRef} className={`transition-all duration-1000 ease-out ${officeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-16">Our Space</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-display font-medium mb-4">Creative Studio</h3>
                  <p className="text-white/70 mb-6">Where ideas come to life through collaboration and innovation.</p>
                  <div className="h-40 bg-white/10 rounded-md flex items-center justify-center">
                    <span className="text-white/30 font-display text-xl">Studio Space</span>
                  </div>
                </Card>
                <Card className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-display font-medium mb-4">Meeting Hub</h3>
                  <p className="text-white/70 mb-6">A dedicated space for client meetings and project discussions.</p>
                  <div className="h-40 bg-white/10 rounded-md flex items-center justify-center">
                    <span className="text-white/30 font-display text-xl">Meeting Room</span>
                  </div>
                </Card>
                <Card className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-display font-medium mb-4">Development Zone</h3>
                  <p className="text-white/70 mb-6">Where our technical team brings designs to functional reality.</p>
                  <div className="h-40 bg-white/10 rounded-md flex items-center justify-center">
                    <span className="text-white/30 font-display text-xl">Dev Space</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="py-24 px-8" id="social-connect">
          <div className="max-w-7xl mx-auto">
            <div ref={connectRef} className={`transition-all duration-1000 ease-out ${connectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-16">Follow Our Journey</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <p className="text-lg text-white/70">
                    Stay connected with our latest projects, design insights, and company updates.
                  </p>
                  <a href="#" className="inline-flex items-center space-x-2 text-lg font-medium text-white hover:text-white/70 transition-colors group">
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-lg">
                  <h3 className="text-2xl font-display font-medium mb-4">Quick Response</h3>
                  <p className="text-white/70 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <p className="text-white/70">
                    For urgent matters, please contact us directly at:
                  </p>
                  <a href="tel:+94761827887" className="text-white font-medium hover:text-white/70 transition-colors">
                    +94 76 182 7887
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Contact;