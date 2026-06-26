"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000); // Le message reste 5 secondes avant de laisser la place au formulaire
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white border-t border-slate-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Colonne Gauche : Textes et Infos (Fidèle à l'image) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 space-y-12"
        >
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Votre message <br />
              compte pour moi...
            </h2>
            <p className="text-slate-400 font-medium text-sm sm:text-base leading-relaxed max-w-sm">
              Une question, une proposition de collaboration ou simplement envie
              de saluer ? N'hésitez pas à m'envoyer un message. Je vous
              répondrai dans les plus brefs délais.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-900 space-y-4">
            <h3 className="text-lg font-bold tracking-tight">
              Travaillons ensemble
            </h3>
            <a
              href="mailto:contact@mandoelie.de"
              className="inline-flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium group"
            >
              <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg group-hover:border-blue-500/30 transition-colors">
                <Mail size={16} className="text-blue-400" />
              </div>
              contact@mandoelie.de
            </a>
          </div>
        </motion.div>

        {/* Colonne Droite : Formulaire (Fidèle à l'image) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 w-full"
        >
          <motion.div
            className="w-full relative"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                // --- Message de succès ---
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full py-20 bg-slate-900 rounded border border-slate-800 flex flex-col items-center justify-center text-center px-6"
                >
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 text-blue-400">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-slate-400 text-sm font-medium">
                    Merci, je traiterai votre demande sous peu.
                  </p>
                </motion.div>
              ) : (
                // --- Formulaire ---
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-5"
                >
                  <div className="space-y-1">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-900 px-4 py-3.5 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent transition-all"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-900 px-4 py-3.5 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="subject"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Objet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-900 px-4 py-3.5 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white text-gray-900 px-4 py-3.5 rounded text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent transition-all resize-none"
                      placeholder="Votre message ici..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-sm px-8 py-3.5 rounded hover:bg-blue-700 transition-all shadow-md active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send size={14} />
                      {status === "sending"
                        ? "Envoi en cours..."
                        : "Envoyer le message"}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 font-bold text-sm text-center">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
