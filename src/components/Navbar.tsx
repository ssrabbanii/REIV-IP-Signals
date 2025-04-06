import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-reiv-purple-light to-reiv-purple text-transparent bg-clip-text">REIV</span>
              <span className="ml-1 text-2xl font-light text-white">IP Signals</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</Link>
            <Link to="/#how-it-works" className="text-sm text-white/80 hover:text-white transition-colors">How It Works</Link>
            <Link to="/#features" className="text-sm text-white/80 hover:text-white transition-colors">Features</Link>
            <Link to="/#use-cases" className="text-sm text-white/80 hover:text-white transition-colors">Use Cases</Link>
            <Link to="/dashboard" className="text-sm text-white/80 hover:text-white transition-colors">
              <span className="relative">
                REIVIP-COP
                <span className="absolute -top-1 -right-4 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-reiv-purple-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-reiv-purple-light"></span>
                </span>
              </span>
            </Link>
            <Button variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10">
              Login
            </Button>
            <Button className="bg-reiv-purple hover:bg-reiv-purple-dark text-white">
              Request Access
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <Link to="/" className="block text-white hover:text-reiv-purple-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/#how-it-works" className="block text-white hover:text-reiv-purple-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </Link>
            <Link to="/#features" className="block text-white hover:text-reiv-purple-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link to="/#use-cases" className="block text-white hover:text-reiv-purple-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Use Cases
            </Link>
            <Link to="/dashboard" className="block text-white hover:text-reiv-purple-light transition-colors" onClick={() => setMobileMenuOpen(false)}>
              REIVIP-COP
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-reiv-purple-light text-reiv-purple-light hover:bg-reiv-purple-light/10 w-full">
                Login
              </Button>
              <Button className="bg-reiv-purple hover:bg-reiv-purple-dark text-white w-full">
                Request Access
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;