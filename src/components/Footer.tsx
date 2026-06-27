"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Accueil", href: "/" },
        { name: "Projets", href: "/#projects" },
        { name: "À propos", href: "/#about" },
        { name: "Blog", href: "/#blog" },
      ],
    },
    {
      title: "Réseaux",
      links: [
        { name: "GitHub", href: "https://github.com/EA70" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/elie-mando-110a11108/" },
        { name: "Twitter / X", href: "https://x.com/koyabandaelie?s=11" },
      ],
    },
    {
      title: "Légal",
      links: [
        { name: "Confidentialité", href: "/confidentialite" },
      ],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12">
          
          {/* Bloc de gauche (Logo + Description + Réseaux) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="text-2xl font-black text-blue-500 tracking-tight">
              Mando Elie
            </Link>
            <p className="text-slate-400 font-medium my-5 text-sm leading-relaxed max-w-sm">
              Conception d'applications web modernes et performantes. Développeur full-stack spécialisé dans l'écosystème Next.js et React.
            </p>
            
            {/* Icônes Réseaux Sociaux (Bas de l'image) */}
            <div className="flex items-center gap-4 ">
              <a 
                href="https://github.com/EA70" 
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/elie-mando-110a11108/" 
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <Link 
                href="https://x.com/koyabandaelie?s=11" 
                className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Liens à droite (Colonnes dynamiques) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Ligne inférieure de Copyright (Bas absolu de ton image) */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mandoelie. Tous droits réservés.
          </p>
          
          {/* Bouton retour en haut fluide */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-blue-400 transition-colors group"
          >
             
            <div className="p-1.5 bg-slate-900 border border-slate-800 rounded-md group-hover:border-slate-700 transition-colors">
              <ArrowUp size={12} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}