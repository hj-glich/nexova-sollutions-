import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

const Contact = () => {
  const heroConfig = {
    title: "Contact",
    taglinePrefix: "Let's create something",
    taglineEmphasis: "amazing together",
    scrollText: "Get in Touch",
    rightText: "Reach Out",
    scrollElementId: "contact-form"
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
        
        <div className="pt-16 px-8 pb-16" id="contact-form">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-12 animate-fade-up">Let's Talk</h1>
            <p className="text-lg max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>
            
            <form className="max-w-2xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-white/50 border border-black/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white/50 border border-black/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-white/50 border border-black/10 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-black text-white rounded-full px-8 py-3 text-sm font-medium hover:bg-black/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
