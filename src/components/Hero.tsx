"use client";

import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  // Variantes d'animation pour faire apparaître les éléments un par un (effet cascade)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Délai entre chaque élément (badge, titre, boutons...)
      },
    },
  };

  // : Record<string, any> = pour resoudre le avec le variants soulignant rouge ., mais le code marche quand meme sans ca
  const itemVariants: Record<string, any>  = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 flex items-center overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Contenu texte (Gauche sur PC, Centré sur Mobile) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          {/* Badge du haut */}
          <motion.span 
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 px-3 py-1.5  text-xs text-gray-600 uppercase tracking-wider mb-6"
          >
            Developpeur - Fullstack - Web
          </motion.span>

          {/* Grand Titre accrocheur */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6"
          >
            La <span className="text-blue-600">transformation</span> de vos idées en expériences web <span className="text-blue-600">modernes</span>
          </motion.h1>

          {/* Descriptif court */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-500 font-medium max-w-xl mb-10 leading-relaxed"
          >
            Développeur full-stack spécialisé dans la création d'applications web ultra-rapides, interactives et adaptées à vos besoins business.
          </motion.p>

          {/* Boutons d'actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link 
              href="/projets"
              className="bg-blue-600 text-white font-semibold text-sm px-8 py-4 rounded text-center hover:bg-blue-700 transition-all shadow-md shadow-blue-200 hover:shadow-lg active:scale-95"
            >
              Voir mes projets
            </Link>
            <Link 
              href="/#contact"
              className="border border-blue-600 text-gray-700 font-semibold text-sm px-8 py-4 rounded text-center hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95"
            >
              Me contacter
            </Link>
          </motion.div>
        </motion.div>

        {/* Illustration (Droite sur PC, Masquée ou en dessous sur mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center items-center w-full"
        >
          <div className="relative w-full max-w-[450px] aspect-square lg:max-w-none">
            <Image
              src="/illustration.png"
              alt="Illustration Développeur"
              fill
              priority
              className="object-contain"
              sizes="(max-w-7xl) 100vw, (max-w-lg) 50vw, 33vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}