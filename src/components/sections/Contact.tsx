"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-accent/5 blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project or system to build? Send me a message and I'll get back to you as soon as possible."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Send Message Form */}
          <div className="lg:col-span-2 bg-[#0a0a0a] rounded-2xl p-8 border border-[#1f1f1f] shadow-2xl relative">
            <div className="absolute top-8 right-8 text-accent animate-pulse">
              <Send size={48} className="rotate-[-20deg]" />
            </div>

            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 rounded-xl border border-[#1f1f1f] bg-[#111111] text-[#f8fafc] placeholder-[#52525b] focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-4 rounded-xl border border-[#1f1f1f] bg-[#111111] text-[#f8fafc] placeholder-[#52525b] focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-sm"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="sr-only">Personal Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-[#1f1f1f] bg-[#111111] text-[#f8fafc] placeholder-[#52525b] focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all text-sm resize-none"
                  placeholder="Personal Message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl bg-accent hover:bg-accent/80 text-white font-bold tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Connect Info */}
          <div className="lg:col-span-1 bg-[#0a0a0a] rounded-2xl p-8 border border-[#1f1f1f] shadow-2xl flex flex-col">
            <h3 className="text-xl font-bold text-foreground mb-8">Connect Info</h3>
            
            <div className="space-y-8 flex-1">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#1f1f1f] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Email</h4>
                  <a href="mailto:chalageta21@gmail.com" className="text-xs text-[#a1a1aa] hover:text-accent transition-colors">chalageta21@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#1f1f1f] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Phone</h4>
                  <a href="tel:+251955350910" className="text-xs text-[#a1a1aa] hover:text-accent transition-colors">+251 955 350 910</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#111111] border border-[#1f1f1f] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Location</h4>
                  <p className="text-xs text-[#a1a1aa]">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#1f1f1f] flex items-center gap-4">
              <a href="https://github.com/chalageta" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-[#1f1f1f] flex items-center justify-center text-[#a1a1aa] hover:text-white hover:border-white transition-all">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/chala-geta/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#111111] border border-[#1f1f1f] flex items-center justify-center text-[#a1a1aa] hover:text-[#0a66c2] hover:border-[#0a66c2] transition-all">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
