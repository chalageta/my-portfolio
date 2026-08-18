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
                I am a full-stack software developer focused on building practical, scalable digital solutions. My work spans modern frontend applications, backend services, enterprise systems, database-driven platforms, and integrations between organizations and government services.
              </p>
              <p>
                Alongside application development, I work with complex integration flows involving authentication, APIs, databases, middleware, and external systems.
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
