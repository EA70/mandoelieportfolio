"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function BlogSection() {
  const posts: Post[] = [
    {
      id: 1,
      title: "L'art du clean code en architecture logicielle",
      excerpt: "Découvrez les principes fondamentaux pour structurer vos projets web de manière scalable, lisible et facilement maintenable sur le long terme.",
      date: "24 Juin 2026",
      readTime: "5 min de lecture",
      image: "/architectureLogiciel.jpg",  
      slug: "clean-code-architecture",
    },
    {
      id: 2,
      title: "Pourquoi Next.js est devenu le standard du web moderne",
      excerpt: "Analyse approfondie des performances, du Server-Side Rendering (SSR) et de l'optimisation SEO native qui font la force de Next.js.",
      date: "18 Juin 2026",
      readTime: "4 min de lecture",
      image: "/nextjs.png", 
      slug: "pourquoi-nextjs-standard",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* En-tête centré (Style de la maquette) */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">
            Partage de connaissances
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
            Un <span className="text-blue-600">Blog</span> est pour les indies...
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base mt-4 leading-relaxed">
            Articles, tutoriels et réflexions sur les coulisses du développement web et la gestion d'infrastructures numériques.
          </p>
        </div>

        {/* Grille des Articles de Blog */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              className="flex flex-col group cursor-pointer"
            >
              {/* Conteneur de l'image de l'article */}
              <div className="relative aspect-[16/10] w-full rounded overflow-hidden bg-gray-50 border border-gray-100 mb-6 shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Métadonnées (Date & Temps de lecture) */}
              <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>

              {/* Titre & Description */}
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug mb-3">
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* Lien "Lire l'article" */}
                <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mt-auto group-hover:underline"
                >
                Lire l'article <ArrowUpRight size={14} />
                </Link>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-6 sm:p-8 bg-blue-50/50 border border-blue-100 rounded flex items-center gap-6"
        >
          <div>
            <h4 className="text-lg font-black text-gray-900 tracking-tight">
              Une plateforme de blog complète arrive bientôt
            </h4>
            <p className="text-gray-500 font-medium text-sm leading-relaxed mt-1">
              Je travaille actuellement sur une section blog dédiée pour partager mes réflexions techniques et tutoriels en profondeur. 
              Restez connectés pour le lancement prochain !
            </p>
          </div>
        </motion.div>

        {/* Bloc d'accroche additionnel du bas (Inspiré de la maquette sur l'IA & Génie Logiciel) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-tight">
              Le rôle indispensable et incontournable de l'IA aujourd'hui dans le <span className="text-blue-600">développement web</span> et <span className="text-blue-600">génie logiciel</span>.
            </h3>
            <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
              L'intelligence artificielle ne remplace pas les ingénieurs : elle décuple leur potentiel. Comprendre comment intégrer les modèles LLM et automatiser les pipelines de code devient une compétence stratégique.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative aspect-[4/3] w-full mx-auto lg:max-w-none rounded overflow-hidden shadow-sm">
            <Image
              src="/ki.jpg" 
              alt="Intelligence Artificielle et Génie Logiciel"
              fill
              sizes="(max-w-7xl) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}