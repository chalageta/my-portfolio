"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button";
import { MapPin, GraduationCap, Download, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export function Hero() {
  const [codeLength, setCodeLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const tokens = [
    { text: "const ", color: "text-[#c678dd]" },
    { text: "developer ", color: "text-[#e5c07b]" },
    { text: "= ", color: "text-[#56b6c2]" },
    { text: "{\n", color: "text-[#a1a1aa]" },
    { text: "  name", color: "text-[#e06c75]" },
    { text: ": ", color: "text-[#a1a1aa]" },
    { text: "'Chala Geta'", color: "text-[#98c379]" },
    { text: ",\n", color: "text-[#a1a1aa]" },
    { text: "  skills", color: "text-[#e06c75]" },
    { text: ": [", color: "text-[#a1a1aa]" },
    { text: "'React'", color: "text-[#98c379]" },
    { text: ", ", color: "text-[#a1a1aa]" },
    { text: "'Next.js'", color: "text-[#98c379]" },
    { text: ", ", color: "text-[#a1a1aa]" },
    { text: "'Spring Boot'", color: "text-[#98c379]" },
    { text: ", ", color: "text-[#a1a1aa]" },
    { text: "'Integration'", color: "text-[#98c379]" },
    { text: "],\n", color: "text-[#a1a1aa]" },
    { text: "  passion", color: "text-[#e06c75]" },
    { text: ": ", color: "text-[#a1a1aa]" },
    { text: "'Building robust digital systems'", color: "text-[#98c379]" },
    { text: "\n};\n\n", color: "text-[#a1a1aa]" },
    { text: "developer", color: "text-[#e5c07b]" },
    { text: ".", color: "text-[#a1a1aa]" },
    { text: "initialize", color: "text-[#61afef]" },
    { text: "();", color: "text-[#a1a1aa]" }
  ];

  const fullLength = tokens.reduce((acc, token) => acc + token.text.length, 0);

  useEffect(() => {
    const typingSpeed = 50;
    const deletingSpeed = 20;
    const pauseBeforeDelete = 3000;
    const pauseBeforeType = 1000;

    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && codeLength < fullLength) {
      timer = setTimeout(() => {
        setCodeLength(prev => prev + 1);
      }, typingSpeed);
    } else if (!isDeleting && codeLength === fullLength) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && codeLength > 0) {
      timer = setTimeout(() => {
        setCodeLength(prev => prev - 1);
      }, deletingSpeed);
    } else if (isDeleting && codeLength === 0) {
      timer = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBeforeType);
    }

    return () => clearTimeout(timer);
  }, [codeLength, isDeleting, fullLength]);

  const renderTypedCode = () => {
    let remaining = codeLength;
    const elements = [];
    
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (remaining <= 0) break;
      
      if (remaining >= token.text.length) {
        elements.push(<span key={i} className={token.color}>{token.text}</span>);
        remaining -= token.text.length;
      } else {
        elements.push(<span key={i} className={token.color}>{token.text.substring(0, remaining)}</span>);
        remaining = 0;
      }
    }
    
    return elements;
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Abstract dark glow in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10 flex flex-col gap-8">
        
        {/* Code Window */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#0a0a0a] rounded-xl overflow-hidden border border-[#1f1f1f] shadow-2xl"
        >
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#1f1f1f] bg-[#0f0f0f]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-[#a1a1aa] text-xs font-mono">developer.js</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
            {renderTypedCode()}
            <span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1 align-middle"></span>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-2xl relative overflow-hidden"
        >
          {/* Avatar with Glow */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-70 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-accent overflow-hidden bg-[#171717] flex items-center justify-center">
              <Image 
                src="/images/profile.jpg" 
                alt="Chala Geta" 
                fill 
                className="object-cover object-top" 
                priority
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-2 tracking-tight">
              Chala <span className="text-accent">Geta</span>
            </h1>
            <p className="text-[#a1a1aa] font-medium text-lg mb-4">
              Senior Full-Stack Developer | Enterprise Integration Engineer
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-[#71717a] mb-6 md:mb-0">
              <span className="flex items-center gap-1"><MapPin size={16} className="text-blue-500" /> Ethiopia</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 shrink-0 self-center md:self-end">
            <Button size="md" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white border-none" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              <FileText size={16} /> View Portfolio
            </Button>
            <a href="/Chala_Geta_CV.pdf" download="Chala_Geta_CV.pdf" className="w-full">
              <Button size="md" variant="ghost" className="w-full flex items-center justify-center gap-2 text-[#a1a1aa] hover:text-white hover:bg-[#1f1f1f]">
                <Download size={16} /> Download CV
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Intro & Connect Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent mb-4">Intro</h3>
            <p className="text-[#a1a1aa] leading-relaxed">
              A dedicated and motivated Senior Full-Stack Software Developer with a strong foundation in modern web applications, enterprise systems, and secure API integrations. Eager to leverage technical skills to build robust digital solutions that solve real-world problems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="https://github.com/chalageta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[#111111] border border-[#1f1f1f] text-[#a1a1aa] hover:text-white transition-colors">
                <FaGithub size={20} />
                <span className="font-medium text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/chala-geta/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[#111111] border border-[#1f1f1f] text-[#a1a1aa] hover:text-[#0a66c2] transition-colors">
                <FaLinkedin size={20} />
                <span className="font-medium text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
