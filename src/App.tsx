import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Clock, 
  Tag, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Layout,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const phoneNumber = "03111666028";
  const displayPhone = "0311-1666028";
  const whatsappLink = `https://wa.me/923111666028`;

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700"></div>
      
      {/* Navigation */}
      <nav className="relative w-full z-50">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 flex items-center justify-center group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-md group-hover:bg-cyan-500/40 transition-colors"></div>
              <div className="relative z-10 w-full h-full border border-cyan-500 flex items-center justify-center bg-[#050505] shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-shadow">
                <span className="text-lg font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-cyan-200">MTZ</span>
              </div>
            </div>
            <span className="text-xs uppercase tracking-[0.4em] font-semibold opacity-60 hidden sm:block">App Creatives</span>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium opacity-80 hover:text-cyan-400 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Free Consultation</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-xs uppercase tracking-widest opacity-60 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 bg-cyan-500"></span>
          </span>
          Professional Development Services
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-[80px] leading-[0.85] font-bold tracking-tighter mb-8 max-w-4xl"
        >
          <span className="block">Transform Your Ideas</span>
          <span className="block text-cyan-500">Into Digital Reality.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl opacity-60 font-light mb-12 max-w-2xl leading-relaxed"
        >
          We build professional Android applications and modern websites designed to elevate your business and engage your users.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-5 border border-white/20 hover:border-cyan-500 group transition-all cursor-pointer w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400" />
            <span className="text-xs uppercase tracking-widest font-medium group-hover:text-cyan-400 transition-colors">WhatsApp Us Now</span>
          </a>
          <a 
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-4 group"
          >
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1">Direct Line</span>
              <span className="text-xl font-mono text-cyan-400 group-hover:text-cyan-300 transition-colors">{displayPhone}</span>
            </div>
          </a>
        </motion.div>
        </div>
        
        {/* Right Side Game App Dev Artwork */}
        <div className="hidden lg:flex justify-center items-center relative w-full h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
          
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full flex justify-center items-center"
          >
             <svg width="450" height="450" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="200" cy="200" r="160" stroke="url(#paint0_linear)" strokeWidth="1" strokeDasharray="4 8" className="animate-[spin_20s_linear_infinite]" />
                <circle cx="200" cy="200" r="120" stroke="url(#paint1_linear)" strokeWidth="2" strokeOpacity="0.5" />
                <circle cx="200" cy="200" r="180" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.2" className="animate-[spin_40s_linear_infinite_reverse]" strokeDasharray="1 12" />
                
                {/* Game Controller abstract shape */}
                <path d="M120 220 C 100 220, 80 240, 80 260 C 80 290, 110 300, 130 280 L 160 250 L 240 250 L 270 280 C 290 300, 320 290, 320 260 C 320 240, 300 220, 280 220 Z" fill="url(#paint2_linear)" fillOpacity="0.1" stroke="#06b6d4" strokeWidth="2" strokeLinejoin="round" />
                
                {/* D-Pad */}
                <path d="M120 245 V 235 H 130 V 245 H 140 V 255 H 130 V 265 H 120 V 255 H 110 V 245 Z" fill="#fff" fillOpacity="0.8"/>
                
                {/* Action Buttons */}
                <circle cx="270" cy="240" r="8" fill="#3b82f6" />
                <circle cx="290" cy="255" r="8" fill="#06b6d4" />
                <circle cx="250" cy="255" r="8" fill="#fff" fillOpacity="0.8" />
                <circle cx="270" cy="270" r="8" fill="#06b6d4" fillOpacity="0.6" />
                
                {/* Smartphone / Code representation behind */}
                <rect x="150" y="80" width="100" height="180" rx="12" stroke="white" strokeWidth="2" strokeOpacity="0.3" fill="#050505" fillOpacity="0.8" />
                <rect x="150" y="80" width="100" height="180" rx="12" fill="url(#paint3_linear)" fillOpacity="0.1" />
                
                <path d="M170 110 H 210 M170 130 H 230 M170 150 H 200" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
                
                {/* Code brackets */}
                <path d="M175 190 L 165 200 L 175 210" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M225 190 L 235 200 L 225 210" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M205 185 L 195 215" stroke="white" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" fill="none" />

                {/* Floating nodes and connections */}
                <circle cx="80" cy="120" r="4" fill="#06b6d4" className="animate-ping" />
                <circle cx="80" cy="120" r="4" fill="#06b6d4" />
                <circle cx="320" cy="140" r="6" fill="#3b82f6" />
                <circle cx="280" cy="80" r="3" fill="#fff" />
                <circle cx="100" cy="300" r="5" fill="#06b6d4" />
                
                <path d="M80 120 L 140 160" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 2" />
                <path d="M320 140 L 260 130" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="2 2" />
                <path d="M280 80 L 240 95" stroke="#fff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />

                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear" x1="400" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#06b6d4" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="paint2_linear" x1="80" y1="220" x2="320" y2="300" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="paint3_linear" x1="150" y1="80" x2="250" y2="260" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#06b6d4" />
                    <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">OUR CORE SERVICES</h2>
            <p className="opacity-60 max-w-2xl mx-auto font-light">Comprehensive digital solutions tailored for your brand.</p>
          </div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10"
          >
            {/* Android App Card */}
            <motion.div variants={fadeIn} className="group relative bg-[#050505] p-10 hover:bg-white/5 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Smartphone className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] text-cyan-500 font-bold mb-4 block tracking-widest">01 / SERVICE</span>
                <h3 className="text-3xl font-medium mb-4">Android App Development</h3>
                <p className="text-sm opacity-50 font-light leading-relaxed mb-8">
                  Turn your vision into a powerful mobile experience. We build robust, scalable, and user-friendly Android applications.
                </p>
                <ul className="space-y-4">
                  {['Custom Designs & Layouts', 'Advanced App Features', 'Seamless User Experience', 'Performance Optimized'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-light opacity-80">
                      <div className="w-1.5 h-1.5 bg-cyan-500"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Web Dev Card */}
            <motion.div variants={fadeIn} className="group relative bg-[#050505] p-10 hover:bg-white/5 transition-colors overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Globe className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] text-cyan-500 font-bold mb-4 block tracking-widest">02 / SERVICE</span>
                <h3 className="text-3xl font-medium mb-4">Web Development</h3>
                <p className="text-sm opacity-50 font-light leading-relaxed mb-8">
                  Establish a strong online presence with our professional and custom web development services tailored to your needs.
                </p>
                <ul className="space-y-4">
                  {['Professional & Custom Websites', 'E-commerce Stores', 'Business & Corporate Sites', 'Responsive & Fast Loading'].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-light opacity-80">
                      <div className="w-1.5 h-1.5 bg-cyan-500"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">WHY CHOOSE US?</h2>
            <p className="opacity-60 max-w-2xl mx-auto font-light">We are committed to delivering excellence with every project we undertake.</p>
          </div>

          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10"
          >
            {[
              { icon: Clock, title: 'Timely Delivery', desc: 'We respect your deadlines and deliver on time.' },
              { icon: Tag, title: 'Affordable Prices', desc: 'Premium quality work at highly competitive rates.' },
              { icon: ShieldCheck, title: 'Quality Work', desc: 'Uncompromising standard of code and design.' },
              { icon: MessageCircle, title: 'Free Consultation', desc: 'Discuss your idea with us at zero cost.' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeIn} className="bg-[#050505] p-8 hover:bg-white/5 transition-colors">
                <div className="w-10 h-10 border border-cyan-500/50 flex items-center justify-center mb-6 text-cyan-400">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-medium mb-3">{item.title}</h4>
                <p className="text-sm opacity-50 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/20"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            READY TO START?
          </h2>
          <p className="opacity-60 text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Get in touch with MTZ App Creatives today for a free consultation. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Message on WhatsApp</span>
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-5 border border-white/20 hover:border-cyan-500 transition-colors group"
            >
              <Phone className="w-5 h-5 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs uppercase tracking-widest font-bold group-hover:text-cyan-400 transition-colors">{displayPhone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
        <div className="text-[10px] opacity-30 font-medium space-y-1 text-center md:text-left">
          <p>MTZ APP CREATIVES © {new Date().getFullYear()}</p>
          <p>ENGINEERED FOR EXCELLENCE</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <div className="flex flex-col items-center sm:items-end">
            <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Connect</span>
            <div className="flex space-x-4">
              <a href={whatsappLink} className="text-xs font-semibold tracking-wide hover:text-cyan-400 transition-colors">WHATSAPP</a>
              <a href={`tel:${phoneNumber}`} className="text-xs font-semibold tracking-wide hover:text-cyan-400 transition-colors">CALL</a>
            </div>
          </div>
          <div className="hidden sm:block h-12 w-px bg-white/10"></div>
          <div className="text-center sm:text-right">
            <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-1">Headquarters</span>
            <span className="text-xs font-semibold tracking-wide">GLOBAL OPERATIONS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
