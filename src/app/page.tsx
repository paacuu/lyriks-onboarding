"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Bienvenue chez Lyriks 🚀",
    description:
      "Tu fais désormais partie de l'équipe Sales la plus stratégique du marché SaaS B2B. Ici, on ne vend pas un outil, on change la manière dont les projets IT sont pensés et pilotés.",
  },
  {
    title: "Notre Mission 🎯",
    description:
      "Lyriks accélère la prise de décision, clarifie les specs et automatise l'orchestration des projets. Ta mission ? Rendre ça irrésistible pour un CEO, un PM ou un CTO.",
  },
  {
    title: "Le Process Sales Lyriks 🔻",
    description:
      "Préparation stratégique → Découverte impactante → Démo immersive avec F7 → Validation → Closing. Chaque étape est optimisée pour la projection client.",
  },
  {
    title: "Facette (F7) : Ta Force IA 💡",
    description:
      "Avec F7, tu montres la puissance de l'automatisation : génération de diagrammes, specs PDF, prompts IA, tout ça en live. Une arme redoutable pour closer sans friction.",
  },
  {
    title: "Ce qu'on attend de toi 🧠",
    description:
      "Être stratégique, comprendre les enjeux business, et créer du lien humain. Tu es là pour guider, convaincre et accompagner nos futurs clients vers la clarté totale.",
  },
  {
    title: "C’est parti ! 🎬",
    description:
      "Prépare ton pitch, maîtrise le funnel, et compose ton succès avec nous. Bienvenue chez Lyriks, là où chaque deal est une partition parfaitement orchestrée.",
  },
];

export default function OnboardingApp() {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#C640F4] to-[#006DFE] p-4">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl"
      >
        <Card className="rounded-2xl shadow-lg bg-white border border-[#F6D117]">
          <CardContent className="p-8 text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#006DFE]">
              {steps[step].title}
            </h2>
            <p className="text-[#333] text-base">
              {steps[step].description}
            </p>
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={back} disabled={step === 0} className="border-[#FC9600] text-[#FC9600]">
                Précédent
              </Button>
              <Button onClick={next} disabled={step === steps.length - 1} className="bg-[#FC9600] text-white hover:bg-[#bb46f5]">
                Suivant
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
