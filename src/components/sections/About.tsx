import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0f0f0f]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <SectionHeading title="About Me" />
            <div className="prose prose-lg text-[#a1a1aa] space-y-6">
              <p>
                I am a Senior Full Stack Software Developer with strong self-commitment and a continuous passion for learning new technologies. I have hands-on experience designing, developing, and delivering scalable web applications across both frontend and backend systems.
              </p>
              <p>
                I have worked on several impactful projects, including the ECC Integrated Library System, MOR & ECC Alumni Management Systems, and Arifget.com E-Learning Platform. Currently, I am working on the Ethiopian Single Window (ESW) project as a Senior Software Developer, contributing to national-level digital transformation initiatives.
              </p>
              <p>
                My technical expertise includes Next.js, React.js, Tailwind CSS, Node.js, Spring Boot, and backend systems using MySQL and Oracle databases. I am highly motivated, adaptable, and always eager to expand my skill set while building reliable, secure, and user-focused solutions.
              </p>
              <p>
                I thrive in collaborative environments and enjoy turning complex requirements into efficient, maintainable software solutions.
              </p>
              <p className="font-medium text-foreground">
                Experience highlights:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Enterprise applications
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Government digital services
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Ethiopian Single Window
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> API development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Authentication & Identity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Database architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Full-stack development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Business websites
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 shadow-sm border border-[#1f1f1f]">
            <h3 className="text-xl font-bold text-foreground mb-8 pb-4 border-b border-[#1f1f1f]">
              Quick Facts
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6 border-b border-[#141414]">
                <div className="text-sm font-semibold text-[#71717a] uppercase tracking-wider">Location</div>
                <div className="md:col-span-2 text-foreground font-medium">Ethiopia</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6 border-b border-[#141414]">
                <div className="text-sm font-semibold text-[#71717a] uppercase tracking-wider">Role</div>
                <div className="md:col-span-2 text-foreground font-medium">Senior Full-Stack Developer</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pb-6 border-b border-[#141414]">
                <div className="text-sm font-semibold text-[#71717a] uppercase tracking-wider">Focus</div>
                <div className="md:col-span-2 text-foreground font-medium">Web Applications & Integration</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="text-sm font-semibold text-[#71717a] uppercase tracking-wider">Architecture</div>
                <div className="md:col-span-2 text-foreground font-medium leading-relaxed">
                  Frontend + Backend + Database + Integration
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
