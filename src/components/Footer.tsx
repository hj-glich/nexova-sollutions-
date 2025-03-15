
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="explore" className="py-12 px-8 bg-nexova-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-display font-medium">NexOva™</Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              A creative design agency specializing in crafting exceptional digital experiences.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Web Design</Link></li>
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Development</Link></li>
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Branding</Link></li>
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Strategy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</Link></li>
                <li><Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hello@nexova.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@nexova.com</a></li>
                <li><a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+1 (234) 567-890</a></li>
                <li><p className="text-sm text-muted-foreground">Los Angeles, CA</p></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} NexOva. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
