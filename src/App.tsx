import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Laptop, Smartphone, Users, Zap, Palette, Globe, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Hero Section */}
      <header className="container pt-32 pb-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-blue-500 blur-[100px] -z-10"
        />
        
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/[0.02] border-b border-white/[0.1] shadow-lg">
          <div className="container flex items-center justify-between h-20">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Radison
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#services" className="nav-link">Services</a>
              <a href="#work" className="nav-link">Work</a>
              <a href="#contact" className="btn btn-primary">Get Started</a>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </button>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-7xl font-bold leading-tight mb-6">
              We Create
              <span className="gradient-text block">Digital Solutions</span>
              for Your Business
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Transform your digital presence with our expert web development and design services.
            </p>
            <button className="btn btn-primary flex items-center gap-2 mx-auto lg:mx-0">
              Get Started <ArrowRight size={20} />
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
          </motion.div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-accent/20 blur-[100px] -z-10"
        />
        
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" 
                  alt="Team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent/10 backdrop-blur-lg rounded-3xl p-6 max-w-[200px]">
                <h4 className="text-4xl font-bold mb-2">5+</h4>
                <p className="text-gray-400">Years of Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6">
                Transforming Ideas into
                <span className="gradient-text block">Digital Reality</span>
              </h2>
              <p className="text-gray-400 mb-8">
                We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. With over 5 years of experience, we've helped businesses of all sizes achieve their digital goals.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-2xl font-bold mb-2">200+</h4>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">50+</h4>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
              <button className="btn btn-primary flex items-center gap-2">
                Learn More <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-accent/20 via-purple-500/20 to-blue-500/20 blur-[100px] -z-10"
        />
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400">Comprehensive digital solutions for modern businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Code2 size={32} />, title: "Web Development", desc: "Custom websites built with modern technologies" },
              { icon: <Smartphone size={32} />, title: "Mobile Development", desc: "Native and cross-platform mobile applications" },
              { icon: <Laptop size={32} />, title: "UI/UX Design", desc: "Beautiful and intuitive user interfaces" },
              { icon: <Users size={32} />, title: "Digital Marketing", desc: "Result-driven marketing strategies" },
              { icon: <Palette size={32} />, title: "Brand Identity", desc: "Memorable and impactful brand designs" },
              { icon: <Globe size={32} />, title: "SEO Optimization", desc: "Improve your online visibility" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bento-item group"
              >
                <div className="text-accent mb-4 group-hover:text-accent-dark transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-400">Recent projects we're proud of</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", title: "E-commerce Platform" },
              { img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200", title: "Mobile App" },
              { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200", title: "Web Application" },
              { img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200", title: "Marketing Campaign" },
            ].map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img 
                  src={work.img} 
                  alt={work.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-accent/20 via-purple-500/20 to-blue-500/20 blur-[100px] -z-10"
        />
        
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-gray-400 mb-8">Ready to start your next project? Contact us for a free consultation.</p>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="footer-title">Radison</h3>
              <p className="text-gray-400 mb-4">
                Creating exceptional digital experiences for forward-thinking businesses.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Services</h3>
              <a href="#" className="footer-link">Web Development</a>
              <a href="#" className="footer-link">Mobile Apps</a>
              <a href="#" className="footer-link">UI/UX Design</a>
              <a href="#" className="footer-link">Digital Marketing</a>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Company</h3>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Our Work</a>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
                />
                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Radison. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;