"use client";

import { experiences } from "@/data/experience";
import { SectionHeading } from "../ui/SectionHeading";
import { Briefcase, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Experience" 
        />

        <div className="grid grid-cols-1 gap-8 mt-12 max-w-4xl mx-auto">
          
          {/* Professional Activities / Experience */}
          <div className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl p-8 flex flex-col h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase size={120} className="text-accent" />
            </div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="p-2.5 rounded-lg bg-accent/20 text-accent border border-accent/20">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Professional Activities</h3>
            </div>

            <div className="relative pl-6 border-l-2 border-[#1f1f1f] flex-1 z-10 space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-[#0a0a0a]" />
                  
                  <h4 className="text-lg font-bold text-foreground leading-tight mb-1">{exp.title}</h4>
                  <p className="text-sm text-accent font-medium mb-3">{exp.role}</p>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.slice(0, 4).map((resp, i) => (
                      <li key={i} className="text-sm text-[#a1a1aa] flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
