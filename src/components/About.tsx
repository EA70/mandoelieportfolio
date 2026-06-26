"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export default function About() {
  const stats = [
    { value: "10+", label: "Projets terminés" },
    { value: "2+", label: "Ans d'expérience" },
    { value: "5+", label: "Technologies maîtrisées" },
    { value: "100%", label: "Engagement" },
  ];

  const experiences: TimelineItem[] = [
    {
      role: "Développeur Full-Stack Freelance",
      company: "Projets Indépendants",
      period: "2025 - Présent",
      description: "Conception et déploiement d'applications web modernes avec differentes technologies web, intégration d'API et optimisation des performances UI/UX.",
    },
    {
      role: "Développeur Frontend & Design",
      company: "Ecole de Formation des cadres, Tunis, Tunisie.",
      period: "2024",
      description: "Création d'interfaces utilisateur interactives et dynamiques.",
    },
  ];

  const containerVariants: Record<string, any> = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Record<string, any> = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="my-24 py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Partie Gauche : Texte & Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">
              À Propos de moi
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-6">
              Passionné par la tech, orienté <span className="text-blue-500">performance</span>
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed text-sm sm:text-base">
              Mon objectif est de concevoir des architectures applicatives solides et de créer des interfaces fluides qui marquent les esprits. J'allie logique backend rigoureuse et esthétique frontend moderne.
            </p>
          </div>

          {/* Grille des Statistiques (Comme sur la maquette) */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-black text-blue-500 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Partie Droite : Parcours / Expériences */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 space-y-10"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block mb-3">
              Mon Parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Expérience du terrain
            </h2>
          </div>

          {/* Ligne temporelle (Timeline vertical) */}
          <div className="relative border-l border-slate-800 pl-6 sm:pl-8 ml-2 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative group"
              >
                {/* Le point indicateur sur la ligne */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 bg-slate-950 border-2 border-blue-500 rounded-full w-4 h-4 group-hover:bg-blue-500 transition-colors duration-300" />
                
                <div className="space-y-2">
                  {/* Badge Période */}
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold bg-slate-900 text-slate-400 border border-slate-800">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  
                  {/* Poste & Entreprise */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors mt-2">
                    {exp.role} <span className="text-slate-500 font-medium text-base">| {exp.company}</span>
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed font-medium pt-1 max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}