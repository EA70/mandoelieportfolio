"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { 
  Atom, 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  Server, 
  Database, 
  GitBranch} from "lucide-react";

export default function TechMarquee() {
  const technologies = [
    { name: "Next.js", icon: Code2 },
    { name: "React", icon: Atom },
    { name: "TypeScript", icon: Terminal },
    { name: "Tailwind CSS", icon: Layers },
    { name: "Framer Motion", icon: Cpu },
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Server },
    { name: "PostgreSQL", icon: Database },
    { name: "Git", icon: GitBranch }
  ];

  // On duplique la liste pour que le défilement infini se fasse sans coupure visuelle
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section className="w-full my-24 py-12 bg-white overflow-hidden flex items-center border-y border-gray-100">

      <div className="flex whitespace-nowrap w-full relative">
        
        {/* Dégradés blancs transparents pour masquer les bords de l'écran proprement */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />


        {/* Le conteneur qui défile à l'infini en ligne */}
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Ajuste la vitesse ici (plus grand = plus lent)
            repeat: Infinity,
          }}
          className="flex gap-16 pr-16 items-center"
        >
          {duplicatedTechs.map((tech, index) => {
            const IconComponent = tech.icon;
            
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center min-w-[90px] group cursor-default"
              >
                {/* Logo de la techno */}
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  <IconComponent size={32} strokeWidth={1.5} />
                </div>
                
                {/* Nom en bas du logo en gray-600 */}
                <span className="text-xs font-semibold text-gray-600 tracking-wide mt-2 transition-colors duration-300 group-hover:text-gray-900">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}