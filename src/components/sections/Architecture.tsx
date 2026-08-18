"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { Monitor, Server, Database, ArrowRight, ArrowDown } from "lucide-react";

export function Architecture() {
  return (
    <section className="py-24 bg-[#0f0f0f] border-t border-[#1f1f1f] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              title="How I Build" 
              subtitle="Engineering approach for scalable digital solutions."
            />
            
            <div className="space-y-8 mt-12">
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gray-300 font-mono">01</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Understand</h4>
                  <p className="text-[#a1a1aa]">Understand business requirements, workflows, and system constraints before writing code.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gray-300 font-mono">02</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Design</h4>
                  <p className="text-[#a1a1aa]">Translate requirements and Figma designs into scalable interfaces and robust system architecture.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gray-300 font-mono">03</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Build</h4>
                  <p className="text-[#a1a1aa]">Develop frontend interfaces, backend services, APIs, and database layers with modern technologies.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-xl font-bold text-gray-300 font-mono">04</span>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Integrate & Deliver</h4>
                  <p className="text-[#a1a1aa]">Connect systems, test workflows, resolve issues, and deliver maintainable production-ready software.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Visual */}
          <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-3xl shadow-sm border border-[#1f1f1f] relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
            <div className="relative z-10 flex flex-col items-center gap-4">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-sm bg-[#0f0f0f] border border-[#27272a] p-6 rounded-2xl flex flex-col items-center shadow-sm"
              >
                <Monitor className="w-8 h-8 text-accent mb-3" />
                <span className="font-bold text-foreground">Frontend</span>
                <span className="text-sm text-[#a1a1aa] mt-1">React / Next.js</span>
              </motion.div>

              <ArrowDown className="text-gray-300 w-6 h-6 animate-pulse" />

              <div className="w-full max-w-sm flex gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 bg-[#0a0a0a] border border-accent/20 p-4 rounded-xl flex flex-col items-center shadow-sm"
                >
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-1">API Layer</span>
                  <span className="text-sm text-[#a1a1aa]">REST / SOAP</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex-1 bg-[#0a0a0a] border border-accent/20 p-4 rounded-xl flex flex-col items-center shadow-sm"
                >
                  <span className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Integration</span>
                  <span className="text-sm text-[#a1a1aa] text-center">Enterprise / Government</span>
                </motion.div>
              </div>

              <ArrowDown className="text-gray-300 w-6 h-6 animate-pulse" />

              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-full max-w-sm bg-[#1f1f1f] text-white p-6 rounded-2xl flex flex-col items-center shadow-md"
              >
                <Server className="w-8 h-8 text-white/80 mb-3" />
                <span className="font-bold">Backend</span>
                <span className="text-sm text-[#71717a] mt-1">Spring Boot / Node.js</span>
              </motion.div>

              <ArrowDown className="text-gray-300 w-6 h-6 animate-pulse" />

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-sm bg-[#1a1a1a] border border-[#27272a] p-6 rounded-2xl flex flex-col items-center shadow-inner"
              >
                <Database className="w-8 h-8 text-[#a1a1aa] mb-3" />
                <span className="font-bold text-[#d4d4d8]">Database</span>
                <span className="text-sm text-[#a1a1aa] mt-1">PostgreSQL / MySQL / Oracle</span>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
