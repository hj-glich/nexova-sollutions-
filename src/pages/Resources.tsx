
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="pt-32 px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-12 animate-fade-up">Resources</h1>
          <p className="text-lg max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Coming soon. We're currently compiling resources for you.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
