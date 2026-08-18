"use client";

import { skillCategories } from "@/data/skills";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillCard } from "../ui/SkillCard";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="A practical stack for building modern applications and enterprise systems."
        />
        
        <motion.div 
          className="flex flex-col mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants}>
              <SkillCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
