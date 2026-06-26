import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Politique de Confidentialité | Mandoelie",
  description: "Mentions légales et gestion des données personnelles.",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-white text-gray-900 pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Bouton retour à l'accueil */}
 
        {/* Contenu textuel */}
        <article className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 mb-2">
            Politique de <span className="text-blue-600">Confidentialité</span>
          </h1>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider pb-6 border-b border-gray-100">
            Dernière mise à jour : Juin 2026
          </p>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">1. Introduction</h2>
            <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">
              La présente politique de confidentialité a pour but d'informer les utilisateurs du site sur la manière dont leurs données personnelles sont collectées et traitées.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">2. Collecte des données</h2>
            <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">
              Dans le cadre de l'utilisation du formulaire de contact, les données suivantes peuvent être collectées : votre nom, votre adresse e-mail ainsi que le contenu de votre message. Ces informations servent uniquement à répondre à vos demandes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">3. Hébergement</h2>
            <p className="text-gray-500 font-medium leading-relaxed text-sm sm:text-base">
              Ce site est hébergé par une plateforme conforme aux normes de sécurité et de confidentialité en vigueur.
            </p>
          </section>
        </article>

      </div>
    </main>
  );
}