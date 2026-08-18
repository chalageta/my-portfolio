import { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group relative flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a] shadow-2xl transition-all hover:border-accent/40 hover:shadow-accent/5 cursor-pointer mb-12"
      onClick={onClick}
    >
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/20 transition-colors"></div>

      <div className="flex flex-col p-8 lg:p-10 flex-1 z-10 w-full lg:w-1/2">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded bg-accent/20 text-accent text-xs font-bold font-mono">
            {project.number}
          </div>
          <p className="text-sm font-medium text-[#a1a1aa] uppercase tracking-wider">{project.category}</p>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
          {project.title}
        </h3>
        
        <div className="mb-8">
          <ul className="space-y-3">
            {(project.highlights?.slice(0, 3) || project.features?.slice(0, 3) || []).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#a1a1aa] text-sm">
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs py-1 px-3 border-[#1f1f1f] bg-[#111111] text-[#e4e4e7]">
                {tech}
              </Badge>
            ))}
          </div>

          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111111] border border-[#1f1f1f] text-[#e4e4e7] text-sm font-medium hover:bg-[#1a1a1a] hover:border-accent transition-colors">
            <FolderGit2 size={16} className="text-accent" />
            View Project Details
          </button>
        </div>
      </div>

      {/* Visual Representation of the Project */}
      <div className="relative h-64 lg:h-auto w-full lg:w-1/2 bg-[#111111] border-l border-[#1f1f1f] flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] opacity-50 group-hover:scale-105 transition-transform duration-700" />
            <span className="relative z-10 text-[#27272a] font-mono text-8xl md:text-9xl font-black tracking-tighter">
              {project.number}
            </span>
          </>
        )}
        {/* Subtle gradient overlay to mimic the image fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent w-24"></div>
      </div>
    </div>
  );
}
