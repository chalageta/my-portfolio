import { SkillCategory } from "@/data/skills";
import { Code2, Server, Database, GitMerge, Settings } from "lucide-react";

export function SkillCard({ category }: { category: SkillCategory }) {
  
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "frontend": return <Code2 size={18} />;
      case "backend": return <Server size={18} />;
      case "databases": return <Database size={18} />;
      case "integration": return <GitMerge size={18} />;
      case "devops & tools": return <Settings size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-4 md:p-6 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a] shadow-sm mb-4 gap-6 hover:border-accent/50 transition-colors">
      <div className="flex items-center gap-4 min-w-[200px]">
        <div className="p-2.5 rounded-lg bg-[#111111] border border-[#1f1f1f] text-[#a1a1aa]">
          {getIcon(category.title)}
        </div>
        <h3 className="text-base font-bold text-foreground">
          {category.title}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-3 justify-start md:justify-end flex-1">
        {category.skills.map((skill) => (
          <span 
            key={skill} 
            className="inline-flex items-center rounded-full bg-[#111111] px-4 py-1.5 text-xs font-medium text-[#a1a1aa] border border-[#1f1f1f] transition-colors hover:text-white hover:border-accent/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
