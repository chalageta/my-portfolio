import Link from "next/link";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-[#27272a] py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="#home" className="text-2xl font-black tracking-tighter text-foreground mb-2">
            CHALA GETA
          </Link>
          <p className="text-sm text-[#a1a1aa] font-medium">
            Full-Stack Developer & Enterprise Integration Engineer
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#home" className="text-sm font-medium text-[#a1a1aa] hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="#projects" className="text-sm font-medium text-[#a1a1aa] hover:text-accent transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="text-sm font-medium text-[#a1a1aa] hover:text-accent transition-colors">
            Experience
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/chalageta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#71717a] hover:text-accent hover:bg-[#0a0a0a] rounded-full transition-all border border-transparent hover:border-[#27272a]"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/chala-geta/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#71717a] hover:text-accent hover:bg-[#0a0a0a] rounded-full transition-all border border-transparent hover:border-[#27272a]"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 max-w-7xl mt-12 pt-8 border-t border-[#27272a] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#71717a]">
          © {new Date().getFullYear()} Chala Geta. All rights reserved.
        </p>
       
      </div>
    </footer>
  );
}
