"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// Structure du contenu complet d'un article
interface ArticleContent {
  title: string;
  date: string;
  readTime: string;
  image: string;
  intro: string;
  paragraphs: string[];
}

// Notre base de données contenant tes deux articles exactement
const articlesData: Record<string, ArticleContent> = {
  "clean-code-architecture": {
    title: "L'art du clean code en architecture logicielle",
    date: "24 Juin 2026",
    readTime: "5 min de lecture",
    image: "/architectureLogiciel.jpg",
    intro: "Écrire du code qui fonctionne est à la portée de n'importe qui. Écrire du code qui dure et que d'autres développeurs prennent plaisir à lire est un art qui demande de la méthode.",
    paragraphs: [
      "La première règle du Clean Code est la lisibilité. Un code propre doit se lire comme une prose bien écrite. Utilisez des noms de variables et de fonctions explicites. Évitez les abréviations obscures : préférez 'getUserData' à 'gUD'.",
      "Le principe de responsabilité unique (SRP) est également crucial. Une fonction ou un composant ne doit faire qu'une seule et unique chose, mais la faire parfaitement. Si votre fonction fait plus de 20 lignes, il est probablement temps de la découper.",
      "Enfin, l'architecture doit être pensée pour le futur. En isolant votre logique métier des frameworks externes, vous vous assurez que votre application pourra évoluer sans nécessiter une réécriture complète à chaque mise à jour technique."
    ]
  },
  "pourquoi-nextjs-standard": {
    title: "Pourquoi Next.js est devenu le standard du web moderne",
    date: "18 Juin 2026",
    readTime: "4 min de lecture",
    image: "/nextjs.png",
    intro: "En l'espace de quelques années, Next.js s'est imposé comme l'outil incontournable pour construire des applications React de production. Analysons les raisons de ce succès.",
    paragraphs: [
      "Le premier atout majeur de Next.js réside dans son modèle de rendu hybride. Contrairement à React classique qui charge une page vide avant de l'exécuter côté client (CSR), Next.js permet le Server-Side Rendering (SSR). Le serveur envoie du HTML déjà prêt au navigateur, ce qui accélère drastiquement le chargement initial.",
      "Cette approche a un impact direct et massif sur le SEO. Les robots des moteurs de recherche indexent instantanément vos pages, ce qui est indispensable pour les sites vitrines, les e-commerces et les portfolios professionnels.",
      "De plus, l'App Router simplifie grandement l'organisation du code grâce au routage basé sur les dossiers, tout en optimisant automatiquement les images, les polices de caractères et les scripts externes pour des performances optimales natives."
    ]
  }
};

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;

  // On récupère l'article correspondant au slug de l'URL
  const article = articlesData[slug];

  // Si l'article n'existe pas dans notre base de données
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Article introuvable</h1>
        <Link href="/#blog" className="text-sm font-bold text-blue-600 hover:underline">
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        
        
        {/* Métadonnées de l'article */}
        <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
          <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8">
          {article.title}
        </h1>

        {/* Grande image d'illustration */}
        <div className="relative aspect-[16/9] w-full rounded overflow-hidden bg-gray-50 border border-gray-100 mb-10 shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-w-7xl) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Corps de texte de l'article */}
        <div className="space-y-6 text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
          {/* L'introduction en gras et légèrement plus grande */}
          <p className="text-gray-900 text-lg sm:text-xl font-bold leading-normal pb-4 border-b border-gray-100">
            {article.intro}
          </p>

          {/* Rendu dynamique des paragraphes */}
          {article.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </main>
  );
}