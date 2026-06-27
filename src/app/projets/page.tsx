"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

// Structure d'un projet
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
}

// Données de test (Tu pourras y ajouter bookVault et tes futurs projets)
const allProjects: Project[] = [
  {
    id: 1,
    title: "bookVault",
    description: "Une plateforme digitale moderne dédiée aux passionnés de lecture pour gérer leur bibliothèque personnelle.",
    tags: ["React", "Express", "PostgreSQL", "Tailwind CSS", "Node.js"],
    image: "/bookvault.png",
    liveUrl: "https://bookvault-two.vercel.app/",
    githubUrl: "https://github.com/yourusername/bookvault",
  },
  {
    id: 2,
    title: "Clément Anguandia",
    description: "Portfolio de professionnel en cybersécurité, mettant en avant ses compétences, projets et réalisations dans le domaine de la sécurité informatique.",
    tags: [ "Tailwind CSS", "Next.js","Portfolio", "TypeScript"],
    image: "/accessroot.png",
    liveUrl: "https://root-access-portfolio.vercel.app/",
    githubUrl: "https://github.com/yourusername/root_access",
  }
];

// Liste de toutes les technos pour générer les boutons de filtre
const filterCategories = ["Tous", "Portfolio","Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];

export default function AllProjectsPage() {
  const [selectedTech, setSelectedTech] = useState("Tous");

  // Filtrage des projets en fonction de la techno sélectionnée
  const filteredProjects = selectedTech === "Tous"
    ? allProjects
    : allProjects.filter(project => project.tags.includes(selectedTech));

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Titre de la page */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">
            Portfolio complet
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Tous mes <span className="text-blue-600">projets</span>
          </h1>
        </div>

        {/* Barre des Filtres (Horizontal et scrollable sur mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none whitespace-nowrap">
          {filterCategories.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded text-xs font-bold transition-all border ${
                selectedTech === tech
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grille des Projets avec Animation de transition */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col bg-white border border-gray-100 rounded overflow-hidden shadow-sm group"
              >
                {/* Image du Projet */}
                <div className="relative aspect-[16/10] w-full bg-gray-50 overflow-hidden border-b border-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Contenu Texte */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-gray-50 text-gray-500 border border-gray-100 rounded-md text-[11px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Liens */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-50 w-full">
                    <Link
                      href={project.liveUrl}
                      className="inline-flex items-center justify-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded hover:bg-blue-700 transition-colors flex-1 text-center"
                    >
                      Site <ArrowUpRight size={14} />
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        className="inline-flex items-center justify-center gap-1.5 border border-gray-200 text-gray-600 text-xs font-bold px-4 py-2.5 rounded hover:bg-gray-50 transition-colors flex-1 text-center"
                      >
                        <ArrowLeft size={14} /> Code
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </main>
  );
}