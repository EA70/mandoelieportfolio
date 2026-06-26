"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BusinessCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Conteneur exact de la maquette "Portfolio mandoelie.jpg" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-2xl p-10 sm:p-16 flex flex-col lg:flex-row justify-between items-center gap-12"
        >
          {/* Bloc Texte à gauche */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Un projet en tête ? <br />
              <span className="text-blue-600">Parlons-en maintenant</span>
            </h2>
            <p className="text-gray-400 font-medium text-sm sm:text-base max-w-xl leading-relaxed">
              Prenez un premier rendez-vous de cadrage gratuit pour échanger sur vos problématiques techniques, l'architecture de votre future plateforme et planifier les étapes de votre développement.
            </p>
          </div>

          {/* Bloc Bouton à droite */}
          <div className="w-full lg:w-auto flex justify-center flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-sm px-8 py-4 rounded hover:bg-blue-700 transition-all shadow-sm active:scale-95 w-full sm:w-auto"
            >
                Contactez-moi <ArrowRight size={16} />
            </Link>
          </div>

        </motion.div>

      </div>
    </section>
  );
}