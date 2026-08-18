"use client";

import { useState } from "react";
import { featuredProjects, additionalWork, Project } from "@/data/projects";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Explore some of the enterprise systems, platforms, and digital experiences I've worked on."
        />

        {/* Featured Projects Grid */}
        <div className="mt-16">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between p-6 border-b border-[#1f1f1f]">
                <div>
                  <p className="text-xs font-bold text-accent mb-1 tracking-wider uppercase">{selectedProject.category}</p>
                  <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-[#a1a1aa] hover:text-white bg-[#111111] hover:bg-[#1a1a1a] border border-[#1f1f1f] rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto">
                {selectedProject.image && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-[#1f1f1f] h-48 sm:h-64 md:h-80 relative bg-[#111111]">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                )}
                
                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-lg leading-relaxed text-[#a1a1aa]">{selectedProject.description}</p>
                </div>
                
                {(selectedProject.highlights || selectedProject.features) && (
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-foreground mb-4">
                      {selectedProject.highlights ? "Key Highlights" : "Features"}
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(selectedProject.highlights || selectedProject.features)?.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[#a1a1aa]">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs py-1.5 px-3 bg-[#111111] border-[#1f1f1f] text-[#e4e4e7]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {selectedProject.website && (
                <div className="p-6 border-t border-[#1f1f1f] bg-[#050505] flex justify-end">
                  <a href={selectedProject.website} target="_blank" rel="noopener noreferrer">
                    <Button className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-white border-none">
                      Visit Website <ExternalLink size={16} />
                    </Button>
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
