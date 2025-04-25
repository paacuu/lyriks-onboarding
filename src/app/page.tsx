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
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const quizQuestions = [
  {
    question: "Quel est le rôle de Facette (F7) ?",
    options: [
      "Un outil de gestion de tâches",
      "Une plateforme IA qui automatise les specs et prompts",
      "Un CRM interne pour les commerciaux"
    ],
    answer: 1,
  },
  {
    question: "Quelle est la question magique de closing ?",
    options: [
      "Combien seriez-vous prêt à investir ?",
      "Est-ce que vous êtes disponible semaine prochaine ?",
      "En dehors du prix, êtes-vous prêt à commencer avec Lyriks ?"
    ],
    answer: 2,
  },
  {
    question: "Que faut-il toujours faire pendant la phase de découverte ?",
    options: [
      "Envoyer une plaquette PDF",
      "Créer un lien humain et poser des questions ouvertes",
      "Commencer par parler produit"
    ],
    answer: 1,
  }
];

export default function OnboardingApp() {
  const [step, setStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [pitchText, setPitchText] = useState("");
  const [sector, setSector] = useState("");

  const isQuizStep = step === 6;
  const isPitchStep = step === 7;
  const isPromptStep = step === 8;

  const handleQuizSelect = (qIdx: number, aIdx: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[qIdx] = aIdx;
    setQuizAnswers(newAnswers);
  };

  const renderQuiz = () => (
    <div className="space-y-6">
      {quizQuestions.map((q, qIdx) => (
        <div key={qIdx} className="text-left">
          <p className="font-semibold text-[#006DFE] mb-2">{q.question}</p>
          <div className="space-y-1">
            {q.options.map((opt, optIdx) => (
              <div key={optIdx}>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${qIdx}`}
                    checked={quizAnswers[qIdx] === optIdx}
                    onChange={() => handleQuizSelect(qIdx, optIdx)}
                  />
                  <span>{opt}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <p className="text-sm text-gray-600">
        ✅ {quizAnswers.filter((a, i) => a === quizQuestions[i].answer).length} / 3 bonnes réponses
      </p>
    </div>
  );

  const renderPitch = () => (
    <textarea
      value={pitchText}
      onChange={(e) => setPitchText(e.target.value)}
      placeholder="Écris ton approche face au CEO de LegalTech ici..."
      className="w-full h-32 p-4 border border-gray-300 rounded-xl text-sm text-gray-700"
    />
  );

  const renderPrompt = () => (
    <div className="space-y-4">
      <input
        value={sector}
        onChange={(e) => setSector(e.target.value)}
        placeholder="Ex : HealthTech, EdTech, etc."
        className="w-full p-3 border border-gray-300 rounded-xl text-sm"
      />
      {sector && (
        <p className="text-sm italic text-gray-600">
          👉 "Et si {sector} pouvait enfin aligner ses specs avec la vision produit ?"
        </p>
      )}
    </div>
  );

  const next = () => {
    if (step < 8) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const currentTitle = [
    "Bienvenue chez Lyriks 🚀",
    "Notre Mission 🎯",
    "Le Process Sales Lyriks 🔻",
    "Facette (F7) : Ta Force IA 💡",
    "Ce qu'on attend de toi 🧠",
    "C’est parti ! 🎬",
    "🎓 Quiz de validation",
    "🧪 Cas d’usage à pitcher",
    "🎯 Générateur d'accroche Lyriks"
  ];

  const currentDescription = [
    "Tu fais désormais partie de l'équipe Sales la plus stratégique du marché SaaS B2B. Ici, on ne vend pas un outil, on change la manière dont les projets IT sont pensés et pilotés.",
    "Lyriks accélère la prise de décision, clarifie les specs et automatise l'orchestration des projets. Ta mission ? Rendre ça irrésistible pour un CEO, un PM ou un CTO.",
    "Préparation stratégique → Découverte impactante → Démo immersive avec F7 → Validation → Closing. Chaque étape est optimisée pour la projection client.",
    "Avec F7, tu montres la puissance de l'automatisation : génération de diagrammes, specs PDF, prompts IA, tout ça en live. Une arme redoutable pour closer sans friction.",
    "Être stratégique, comprendre les enjeux business, et créer du lien humain. Tu es là pour guider, convaincre et accompagner nos futurs clients vers la clarté totale.",
    "Prépare ton pitch, maîtrise le funnel, et compose ton succès avec nous. Bienvenue chez Lyriks, là où chaque deal est une partition parfaitement orchestrée.",
    "Réponds à ces 3 questions pour valider ton onboarding :",
    "Tu es face à un CEO de LegalTech en série A. Il a 6 prestataires, 4 outils, et aucune vision consolidée. Rédige ton approche commerciale.",
    "Tape un secteur pour générer une accroche sectorielle dans l’esprit Lyriks."
  ];

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
              {currentTitle[step]}
            </h2>
            <p className="text-[#333] text-base whitespace-pre-line">
              {currentDescription[step]}
            </p>

            {isQuizStep && renderQuiz()}
            {isPitchStep && renderPitch()}
            {isPromptStep && renderPrompt()}

            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={back} disabled={step === 0} className="border-[#FC9600] text-[#FC9600]">
                Précédent
              </Button>
              <Button onClick={next} disabled={step === currentTitle.length - 1} className="bg-[#FC9600] text-white hover:bg-[#bb46f5]">
                Suivant
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
