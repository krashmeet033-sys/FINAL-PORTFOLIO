import React from 'react';
import { motion } from 'framer-motion';

import { Music, Coffee, Heart, Palette, Globe, Smartphone, Code2, Zap, LayoutGrid, Disc } from 'lucide-react';

import TechOrbit from './TechOrbit';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Parallax Elements */}
      <motion.div 
        initial={{ y: 0 }}
        whileInView={{ y: -100 }}
        transition={{ ease: "linear" }}
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div 
        initial={{ y: 0 }}
        whileInView={{ y: 100 }}
        transition={{ ease: "linear" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10"
      />
      
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-12">
            <h2 className="text-6xl font-black tracking-tighter uppercase italic">About Me</h2>
            <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-primary"></div>
          </div>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              I am a <span className="text-white font-semibold">B.Tech Computer Science student</span> at <span className="text-primary font-semibold">ITM Skills University, School of Future Tech</span>. I am a passionate 
              <span className="text-white font-semibold"> Full Stack Developer</span> dedicated to crafting digital experiences through creativity & code.
            </p>
            <p>
              Beyond coding, I am obsessed with <span className="text-primary font-medium italic">aesthetic UI inspiration</span>. 
              I believe that technology should be a blend of aesthetics, logic, and innovation. 
              Currently focused on building elegant interfaces with clean code and creative vision.
            </p>
            <p>
              My goal is to leverage AI and modern web technologies to create impactful software. 
              Whether it's a complex system or a smooth user interface, I strive to make every interaction meaningful.
            </p>
          </div>

          <div className="mt-12 p-8 glass-card rounded-3xl border-primary/20 bg-primary/5">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-primary font-black mb-4">Why My Portfolio is Different</h4>
            <p className="text-sm text-gray-300 font-light italic leading-relaxed">
              "I believe development is not only about writing code — it's about creating meaningful and engaging experiences. Every pixel, every transition, and every line of code in this portfolio is a testament to my commitment to excellence and innovation."
            </p>
          </div>

          <div className="flex gap-x-2 sm:gap-x-12 gap-y-6 mt-12 pt-12 border-t border-white/5 flex-wrap">
            {[
              { label: "Repos", value: "20+" },
              { label: "DSA", value: "100+" },
              { label: "Certificates", value: "1" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-8">Creative Focus</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {[
                 { icon: Globe, title: "Modern Dashboards", desc: "Complex data-driven systems with clean UI." },
                 { icon: Code2, title: "Interactive UI", desc: "Crafting engaging and fluid user interfaces." },
                 { icon: Smartphone, title: "Responsive Apps", desc: "Mobile-first experiences that feel native." },
                 { icon: Zap, title: "AI Integrations", desc: "Smart features powered by modern LLMs." },
                 { icon: Palette, title: "UI/UX Design", desc: "Creating aesthetically pleasing and user-centric designs." },
                 { icon: LayoutGrid, title: "Bento Layouts", desc: "Implementing modern and organized grid structures." }
               ].map((item, i) => (
                 <div key={i} className="glass-card p-6 rounded-3xl border-white/5 group hover:border-primary/20 transition-all">
                   <div className="flex items-center gap-4 mb-3">
                     <item.icon size={20} className="text-primary/70 group-hover:text-primary transition-colors" />
                     <h5 className="font-bold text-white uppercase italic text-sm tracking-tight">{item.title}</h5>
                   </div>
                   <p className="text-gray-500 text-xs font-light leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Card Stack */}
          <div className="absolute -top-10 -left-10 w-full h-full glass-card rounded-[40px] -z-10 transform -rotate-3 border-white/5"></div>
          <div className="absolute -bottom-6 -right-6 w-full h-full glass-card rounded-[40px] -z-10 transform rotate-2 border-white/5"></div>
          
          <div className="glass-card p-10 rounded-[40px] border-white/10 backdrop-blur-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-xl">Technical Philosophy</h3>
                <p className="text-xs text-gray-500 font-mono">system.initialize()</p>
              </div>
            </div>

            <div className="code-block border-none bg-black/40 p-6 rounded-2xl">
              <div className="flex gap-2 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <pre className="text-xs md:text-sm font-mono leading-loose">
                <span className="text-primary italic">// My approach to building</span><br />
                <span className="text-purple-400">while</span> (curious) {'{'}<br />
                &nbsp;&nbsp;build();<br />
                &nbsp;&nbsp;test();<br />
                &nbsp;&nbsp;optimize();<br />
                &nbsp;&nbsp;learn();<br />
                {'}'}<br />
                <br />
                <span className="text-accent italic">// Future Goals</span><br />
                aspiring = [<span className="text-green-300">"FullStack-Architect"</span>, <span className="text-green-300">"AI-Researcher"</span>];
              </pre>
            </div>
          </div>

          <div className="mt-12 p-8 glass rounded-3xl border-white/5 relative overflow-hidden">
             <div className="relative z-10">
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-black mb-4">Floating Tech Stack</h4>
                <TechOrbit />
             </div>
          </div>

          {/* Personality & Fun Facts Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { icon: Coffee, text: "Coffee + Coding" },
               { icon: Palette, text: "UI/UX Obsessed" },
               { icon: Music, text: "Lo-fi Beats" },
               { icon: LayoutGrid, text: "Bento Layouts" }
             ].map((fact, i) => (
               <div key={i} className="glass rounded-2xl p-4 flex items-center gap-3 border-white/5 group hover:border-primary/20 transition-all">
                 <fact.icon size={16} className="text-primary/50 group-hover:text-primary transition-colors" />
                 <span className="text-[10px] uppercase tracking-widest font-black text-gray-500 group-hover:text-white transition-colors">{fact.text}</span>
               </div>
             ))}
          </div>
          {/* Now Playing Widget */}
          <div className="mt-12 p-6 glass rounded-3xl border-white/5 flex items-center gap-6 group hover:border-primary/20 transition-all">
             <div className="relative">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center animate-spin-slow">
                   <Disc size={24} className="text-primary/50" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-background border border-white/20"></div>
                </div>
             </div>
             <div>
                <p className="text-[8px] uppercase tracking-widest text-gray-500 font-black mb-1">Currently Coding To</p>
                <h6 className="text-sm font-bold text-white tracking-tight">Lo-fi • Ambient • Synthwave</h6>
                <div className="flex gap-1 mt-2">
                   {[...Array(4)].map((_, i) => (
                     <motion.div 
                        key={i}
                        animate={{ height: [4, 12, 4] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="w-1 bg-primary/40 rounded-full"
                     />
                   ))}
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
