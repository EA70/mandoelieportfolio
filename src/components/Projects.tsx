"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AdIcon, ArrowUpRight } from "lucide-react";

// On définit proprement la structure d'un projet pour TypeScript
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "bookVault",
    description:
      "Une plateforme digitale moderne dédiée aux passionnés de lecture. Permet de gérer sa bibliothèque personnelle, de découvrir de nouvelles œuvres et de partager des avis au sein d'une communauté active.",
    tags: [ "Tailwind CSS", "Node.js", "Express", "React", "PostgreSQL"],
    image: "/bookvault.png",  
    liveUrl: "https://bookvault-two.vercel.app/", 
    githubUrl: "https://github.com",
  },
];

export default function Projects() {
  const cardVariants: Record<string, any> = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="pt-12 bg-white ">
      <div className="max-w-5xl mx-auto px-6">
        {/* En-tête de la section */}
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">
            Mes Réalisations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Projets <span className="text-blue-600">sélectionnés</span>
          </h2>
        </div>

        {/* Liste des projets */}
        <div className="flex flex-col gap-24">
          {projectsData.map((project, index) => {
            // Si l'index est impair (0, 2, 4...), le texte est à gauche.
            // Si l'index est pair (1, 3, 5...), le texte passe à droite sur PC.
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                {/* Contenu Texte du Projet */}
                <div
                  className={`lg:col-span-5 flex flex-col ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  {/* Les Badges de Technos */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-50 text-gray-600 border border-gray-100 rounded text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Liens d'action */}
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded hover:bg-blue-700 transition-all active:scale-95"
                    >
                      Voir le site <ArrowUpRight size={16} />
                    </Link>
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 text-xs sm:text-sm font-semibold px-5 py-3 rounded hover:bg-gray-50 transition-all active:scale-95"
                      >
                        Code source
                      </Link>
                    )}
                  </div>
                </div>

                {/* Visuel du Projet (Mockup) */}
                <div className="lg:col-span-7 relative aspect-[16/10] bg-gray-50 border border-gray-100 rounded overflow-hidden shadow-sm group">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={`Capture de ${project.title}`}
                      fill
                      sizes="(max-w-7xl) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Section CTA "Voir tout" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 flex flex-col items-center justify-center text-center space-y-6"
          >
            <div className="space-y-2">
              <h4 className="text-xl font-black text-gray-900 tracking-tight">
                Envie de voir davantage de réalisations ?
              </h4>
              <p className="text-gray-500 font-medium text-sm max-w-lg mx-auto">
                Explorez l'intégralité de mes travaux, projets open-source et
                expérimentations techniques.
                <span className="block mt-2 italic text-xs text-gray-400">
                  * Note : Certains projets étant soumis à des clauses de
                  confidentialité ou étant privés, ils ne sont pas répertoriés
                  dans cette liste.
                </span>
              </p>
            </div>

            <Link
              href="/projets"
              className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold text-sm px-8 py-3.5 rounded hover:bg-black transition-all active:scale-95 shadow-lg shadow-gray-200"
            >
              Découvrir tous les projets <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
