import { motion } from 'framer-motion';
import { ArrowRight, Code2, Laptop, Smartphone, Users, Zap, Palette, Globe, Shield, MapPin, Phone, Mail, Clock, Twitter, Linkedin, Instagram, Facebook, Youtube, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="min-h-screen w-full relative flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-white opacity-[0.03] animate-grid" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />
          
          {/* Animated Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-accent via-purple-500 to-blue-500 blur-[120px]"
          />
        </div>
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/[0.02] border-b border-white/[0.1] shadow-lg">
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
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/10"
              >
                <div className="container py-4 flex flex-col gap-4">
                  <a href="#home" className="nav-link block py-2">Home</a>
                  <a href="#about" className="nav-link block py-2">About</a>
                  <a href="#services" className="nav-link block py-2">Services</a>
                  <a href="#work" className="nav-link block py-2">Work</a>
                  <a href="#contact" className="btn btn-primary w-full">Get Started</a>
                </div>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Hero Content - Centered */}
        <div className="container relative z-10 px-4 lg:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6">
              We Create
              <span className="gradient-text block">Digital Solutions</span>
              for Your Business
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your digital presence with our expert web development and design services.
            </p>
            <button className="btn btn-primary flex items-center justify-center gap-2 mx-auto w-full sm:w-auto px-8 py-4 text-lg">
              Get Started <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 rounded-full bg-white"
            />
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="section relative py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-accent/20 blur-[100px] -z-10"
        />
        
        <div className="container px-4 lg:px-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
                Transforming Ideas into
                <span className="gradient-text block">Digital Reality</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-6 lg:mb-8">
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

      {/* Why Choose Us Section - Moved here */}
      <section className="section relative py-16 lg:py-24">
        <div className="container px-4 lg:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-base sm:text-lg text-gray-400">What sets us apart from the competition</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[240px] gap-4 lg:gap-6">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Proven Expertise",
                desc: "Over 5 years of experience delivering exceptional digital solutions",
                className: "md:col-span-2 lg:col-span-1 lg:row-span-2",
                img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
                imgPosition: "object-left"
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Fast Delivery",
                desc: "Quick turnaround times without compromising on quality",
                className: "lg:col-span-2",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
                imgPosition: "object-center"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Dedicated Support",
                desc: "24/7 customer support and maintenance services",
                className: "",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2068",
                imgPosition: "object-center"
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Global Reach",
                desc: "Serving clients worldwide with innovative solutions",
                className: "md:col-span-2 lg:col-span-1",
                img: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2074",
                imgPosition: "object-center"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className={`group relative overflow-hidden rounded-3xl ${item.className}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className={`w-full h-full ${item.imgPosition} object-cover transition-transform duration-700 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] group-hover:bg-black/40 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 + 0.2 }}
                    className="text-accent mb-4 group-hover:scale-110 transition-transform"
                  >
                    {item.icon}
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 + 0.3 }}
                    className="text-xl font-bold mb-2"
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.4 }}
                    className="text-gray-300"
                  >
                    {item.desc}
                  </motion.p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section relative py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-accent/20 via-purple-500/20 to-blue-500/20 blur-[100px] -z-10"
        />
        
        <div className="container px-4 lg:px-0">
          <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">Our Services</h2>
            <p className="text-base sm:text-lg text-gray-400">Comprehensive digital solutions for modern businesses</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
      <section id="work" className="section py-12 sm:py-16 lg:py-24">
        <div className="container px-4 lg:px-0">
          <motion.div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">Our Work</h2>
            <p className="text-base sm:text-lg text-gray-400">Recent projects we're proud of</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
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

      {/* Development Roadmap Section */}
      <section className="section relative py-16 lg:py-24 bg-gray-900/50">
        <div className="container px-4 lg:px-0">
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Development Roadmap</h2>
            <p className="text-gray-400 text-lg">Our systematic approach to delivering excellence</p>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/50 hidden lg:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  phase: "01",
                  title: "Discovery & Planning",
                  description: "In-depth analysis of requirements and planning.",
                  items: [
                    "Requirements gathering",
                    "Technical feasibility",
                    "Project timeline",
                    "Resource allocation"
                  ],
                  icon: <Users className="w-6 h-6" />
                },
                {
                  phase: "02",
                  title: "Design & Architecture",
                  description: "Creating detailed designs and architecture.",
                  items: [
                    "UI/UX design",
                    "System architecture",
                    "Database design",
                    "API specifications"
                  ],
                  icon: <Palette className="w-6 h-6" />
                },
                {
                  phase: "03",
                  title: "Development & Testing",
                  description: "Agile development with continuous testing.",
                  items: [
                    "Frontend development",
                    "Backend implementation",
                    "Unit testing",
                    "Integration testing"
                  ],
                  icon: <Code2 className="w-6 h-6" />
                },
                {
                  phase: "04",
                  title: "Deployment & Support",
                  description: "Smooth deployment and maintenance.",
                  items: [
                    "Production deployment",
                    "Performance monitoring",
                    "User training",
                    "Maintenance support"
                  ],
                  icon: <Zap className="w-6 h-6" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.3 
                  }}
                  className={`flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card Container */}
                  <div className="lg:w-[45%] flex justify-end">
                    <div className={`relative w-full max-w-md p-6 rounded-2xl border border-accent/30 bg-gray-800/50 backdrop-blur-sm ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      {/* Phase Number */}
                      <span className="absolute -top-4 left-6 text-5xl font-bold text-accent/20">
                        {item.phase}
                      </span>
                      
                      <div className="space-y-4">
                        {/* Icon and Title */}
                        <div className={`flex items-center gap-3 ${
                          index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                        }`}>
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-400">{item.description}</p>
                        
                        {/* Items List */}
                        <ul className="space-y-2">
                          {item.items.map((listItem, i) => (
                            <li key={i} className={`flex items-center gap-2 text-sm ${
                              index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                            }`}>
                              <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-gray-400">{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex items-center justify-center w-12">
                    <div className="w-4 h-4 rounded-full bg-accent relative">
                      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25" />
                    </div>
                  </div>
                  
                  {/* Empty Space for Alignment */}
                  <div className="lg:w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section relative py-12 sm:py-16 lg:py-24 bg-gray-900/50">
        <div className="container px-4 lg:px-0">
          {/* Single Column Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">Let's Work Together</h2>
              <p className="text-base sm:text-lg text-gray-400">
                Ready to start your next project? Contact us for a free consultation.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl">
              <form 
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  try {
                    const response = await fetch('/api/contact', {
                      method: 'POST',
                      body: JSON.stringify({
                        name: formData.get('name'),
                        email: formData.get('email'),
                        message: formData.get('message')
                      }),
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    });
                    
                    if (response.ok) {
                      alert('Message sent successfully!');
                      e.currentTarget.reset();
                    } else {
                      throw new Error('Failed to send message');
                    }
                  } catch (error) {
                    alert('Failed to send message. Please try again.');
                  }
                }}
                className="space-y-4"
              >
                <input 
                  name="name"
                  type="text" 
                  required
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
                />
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent backdrop-blur-sm"
                ></textarea>
                <button 
                  type="submit" 
                  className="btn btn-primary w-full flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 overflow-hidden">
        {/* Grid Pattern Background with Gradient */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-grid-white opacity-[0.03] animate-grid" />
            <div className="absolute inset-0" style={{
              background: `
                linear-gradient(0deg, rgba(0,0,0,0.95) 0%, 
                rgba(17,24,39,0.7) 50%, 
                rgba(59,130,246,0.2) 100%)
              `
            }} />
          </div>
          
          {/* Additional Glow Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10 px-4 lg:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Radison</h3>
              <p className="text-gray-400">
                Creating exceptional digital experiences for forward-thinking businesses.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-gray-400 hover:text-accent transition-colors">About Us</a>
                <a href="#services" className="text-gray-400 hover:text-accent transition-colors">Services</a>
                <a href="#work" className="text-gray-400 hover:text-accent transition-colors">Our Work</a>
                <a href="#contact" className="text-gray-400 hover:text-accent transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Web Development</a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Mobile Apps</a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">UI/UX Design</a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">Digital Marketing</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="flex flex-col space-y-2 text-gray-400">
                <p>Chennai, Tamil Nadu 600001</p>
                <p>+91 98765 43210</p>
                <p>info@yourcompany.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Radison. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[Twitter, Linkedin, Instagram, Facebook, Github].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;