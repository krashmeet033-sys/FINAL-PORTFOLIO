import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

const ContactLink = ({ icon: Icon, label, value, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group flex items-center justify-between p-8 glass-card rounded-3xl border-white/5 hover:border-white/20 transition-all duration-500"
  >
    <div className="flex items-center gap-6">
      <div className="p-4 rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Icon size={24} />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">{label}</p>
        <p className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{value}</p>
      </div>
    </div>
    <ArrowUpRight size={20} className="text-gray-600 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-black tracking-tighter uppercase italic mb-8">Get In Touch</h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
            I'm always interested in hearing about new projects and opportunities. 
            Let's create something <span className="text-white font-medium italic">extraordinary</span> together.
          </p>

          <div className="grid gap-4">
            <ContactLink 
              icon={Mail} 
              label="Email" 
              value="krashmeet033@gmail.com" 
              href="mailto:krashmeet033@gmail.com" 
            />
            <ContactLink 
              icon={Github} 
              label="GitHub" 
              value="@krashmeet033-sys" 
              href="https://github.com/krashmeet033-sys" 
            />
            <ContactLink 
              icon={Linkedin} 
              label="LinkedIn" 
              value="RASHMEET KAUR" 
              href="https://www.linkedin.com/in/rashmeet-kaur-738281396" 
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-12 rounded-[48px] border-white/10 relative"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Send size={120} />
          </div>

          <form className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black ml-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-700"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black ml-1">Message</label>
              <textarea 
                rows="5" 
                placeholder="Tell me about your project..." 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none placeholder:text-gray-700"
              ></textarea>
            </div>
            <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-primary/80 hover:shadow-[0_20px_40px_rgba(155,77,255,0.3)] transition-all duration-500 flex items-center justify-center gap-3 group">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
