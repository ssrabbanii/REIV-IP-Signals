import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  BarChart3, 
  Shield, 
  LineChart, 
  AlertTriangle, 
  DollarSign, 
  Users, 
  Building, 
  Scale,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';

const Index = () => {
  const howItWorksRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add any initialization logic here
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 bg-gradient-hero grid-pattern">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            {/* Abstract grid pattern for background */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-reiv-purple/20 blur-3xl animate-pulse-glow"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-reiv-purple/30 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text bg-gradient-to-r from-white to-reiv-purple-light text-transparent bg-clip-text">
                Unlock the True Value of IP Assets
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white/80 mb-10">
                AI-powered insights for smarter decisions in creative finance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-reiv-purple hover:bg-reiv-purple-dark text-white px-8 py-6 text-lg"
                onClick={() => howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-reiv-purple-light text-white hover:bg-reiv-purple-light/10 px-8 py-6 text-lg"
              >
                Request Early Access
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section ref={howItWorksRef} id="how-it-works" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-reiv-purple-light text-transparent bg-clip-text">
              How It Works
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our AI Agent analyzes, predicts, and delivers actionable insights about your IP assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: <Brain className="h-10 w-10 text-reiv-purple-light" />, 
                title: "Data Analysis", 
                description: "AI Agent collects and analyzes IP performance data" 
              },
              { 
                icon: <BarChart3 className="h-10 w-10 text-reiv-purple-light" />, 
                title: "Performance Prediction", 
                description: "Predictive models forecast future IP value" 
              },
              { 
                icon: <AlertTriangle className="h-10 w-10 text-reiv-purple-light" />, 
                title: "Risk Flagging", 
                description: "Potential risks are identified and prioritized" 
              },
              { 
                icon: <DollarSign className="h-10 w-10 text-reiv-purple-light" />, 
                title: "Valuation", 
                description: "Transparent, data-backed IP valuations" 
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-gradient-card border border-reiv-purple/20 h-full">
                  <CardHeader className="pb-2">
                    <div className="mb-4 p-2 rounded-full bg-reiv-purple/10 w-fit">
                      {step.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-reiv-purple-light" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Who It's For Section */}
      <section className="py-20 md:py-32 bg-reiv-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-reiv-purple-light text-transparent bg-clip-text">
              Who It's For
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              REIV IP Signals serves multiple stakeholders in the creative economy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: <Users className="h-12 w-12 text-reiv-purple-light" />, 
                title: "Creators", 
                description: "Understand and monetize your IP's true value with data-backed insights that help you make strategic decisions." 
              },
              { 
                icon: <Building className="h-12 w-12 text-reiv-purple-light" />, 
                title: "Lenders", 
                description: "Assess IP risk before issuing capital with comprehensive analytics that reduce uncertainty." 
              },
              { 
                icon: <Scale className="h-12 w-12 text-reiv-purple-light" />, 
                title: "Underwriters", 
                description: "Make informed coverage decisions with predictive risk models specifically designed for digital assets." 
              }
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-reiv-purple/20 h-full hover:border-reiv-purple/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(157,78,221,0.2)]">
                  <CardHeader className="pb-2">
                    <div className="mb-4 p-3 rounded-full bg-reiv-purple/10 w-fit">
                      {audience.icon}
                    </div>
                    <CardTitle className="text-2xl text-white">{audience.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{audience.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section id="features" className="py-20 md:py-32 bg-background grid-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-reiv-purple-light text-transparent bg-clip-text">
              Key Features
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Powerful tools to transform how you understand and leverage IP assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: <LineChart className="h-8 w-8 text-reiv-purple-light" />, 
                title: "Real-time Performance Tracking", 
                description: "Monitor your IP assets with live data streams and instant notifications about significant changes." 
              },
              { 
                icon: <AlertTriangle className="h-8 w-8 text-reiv-purple-light" />, 
                title: "Predictive Risk Analysis", 
                description: "Anticipate potential issues before they impact value with AI-powered risk assessment." 
              },
              { 
                icon: <Shield className="h-8 w-8 text-reiv-purple-light" />, 
                title: "Transparent Valuation Model", 
                description: "Understand exactly how valuations are calculated with full visibility into our methodology." 
              },
              { 
                icon: <BarChart3 className="h-8 w-8 text-reiv-purple-light" />, 
                title: "Smart Dashboards & Alerts", 
                description: "Customize your view with intuitive dashboards and receive timely alerts about your portfolio." 
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-card border border-reiv-purple/20 h-full hover:shadow-[0_0_15px_rgba(157,78,221,0.2)] transition-all duration-300">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 rounded-full bg-reiv-purple/10">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 md:py-32 bg-reiv-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-reiv-purple-light text-transparent bg-clip-text">
              Use Cases
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Discover how REIV IP Signals transforms intellectual property into financial opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: "IP as Collateral", 
                description: "Secure loans using your intellectual property as collateral, backed by reliable valuation data." 
              },
              { 
                title: "Insurance Underwriting", 
                description: "Enable insurers to accurately assess and price coverage for digital and creative assets." 
              },
              { 
                title: "Investment Risk Profiling", 
                description: "Help investors evaluate IP portfolios with comprehensive risk and performance analytics." 
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="bg-gradient-card border border-reiv-purple/20 h-full w-full hover:border-reiv-purple/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/70">{useCase.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Bring clarity to creative assets.<br />Unlock financing with confidence.
              </h2>
              <Button 
                size="lg" 
                className="bg-reiv-purple hover:bg-reiv-purple-dark text-white px-8 py-6 text-lg mt-4"
              >
                Join the Waitlist
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 md:py-16 bg-background border-t border-reiv-purple/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-reiv-purple-light to-reiv-purple text-transparent bg-clip-text">REIV</span>
                <span className="ml-1 text-2xl font-light text-white">Signals</span>
              </Link>
              <p className="mt-4 text-white/70 max-w-md">
                REIV IP Signals eliminates uncertainty around intellectual property valuation with AI-powered insights.
              </p>
              <div className="flex space-x-4 mt-6">
                <Twitter className="h-5 w-5 text-white/70 hover:text-reiv-purple-light transition-colors" />
                <Linkedin className="h-5 w-5 text-white/70 hover:text-reiv-purple-light transition-colors" />
                <Github className="h-5 w-5 text-white/70 hover:text-reiv-purple-light transition-colors" />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white/70 hover:text-reiv-purple-light transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-white/70 hover:text-reiv-purple-light transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-white/70 hover:text-reiv-purple-light transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-white/70 hover:text-reiv-purple-light transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-white/70 hover:text-reiv-purple-light transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-reiv-purple/20" />
          
          <div className="text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} REIV IP Signals. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;