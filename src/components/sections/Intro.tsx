"use client";

import { motion } from "framer-motion";
import { Code2, Blocks, Rocket } from "lucide-react";

const cards = [
  {
    icon: <Code2 size={24} className="text-accent" />,
    number: "01",
    title: "Build",
    description: "Modern, scalable web applications with React, Next.js and TypeScript."
  },
  {
    icon: <Blocks size={24} className="text-accent" />,
    number: "02",
    title: "Integrate",
    description: "Connect enterprise systems through APIs, authentication, SOAP/REST services and secure integrations."
  },
  {
    icon: <Rocket size={24} className="text-accent" />,
    number: "03",
    title: "Deliver",
    description: "Transform complex business requirements into maintainable production-ready software."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Intro() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-y border-[#1f1f1f]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            From complex requirements to reliable software.
          </h2>
          <p className="text-lg text-[#a1a1aa]">
            I work across frontend, backend, databases, APIs, authentication, enterprise integration, and government digital services.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => (
            <motion.div 
              key={card.number}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-[#0f0f0f] border border-[#1f1f1f] hover:bg-[#0a0a0a] hover:shadow-lg hover:border-transparent transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-[#0a0a0a] rounded-xl shadow-sm border border-[#1f1f1f] group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <span className="text-sm font-bold text-gray-300 font-mono">
                  — {card.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
