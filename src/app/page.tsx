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

const FunnelAnimation = () => (
  <div className="w-full flex justify-center mt-4">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-[#FC9600] via-[#F6D117] to-[#C640F4] w-64 h-64 rounded-b-full flex flex-col justify-between text-white font-bold p-4 text-sm shadow-lg"
    >
      <div className="text-center">🔬 Préparation</div>
      <div className="text-center">🤝 Découverte</div>
      <div className="text-center">🧠 Démo F7</div>
      <div className="text-center">✅ Validation</div>
      <div className="text-center">💼 Closing</div>
    </motion.div>
  </div>
);

export default function OnboardingApp() {
  const [step, setStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [pitchText, setPitchText] = useState("");
  const [sector, setSector] = useState("");

  const isQuizStep = step === 6;
  const isPitchStep = step === 7;
  const isPromptStep = step === 8;
  const isFinalStep = step === 9;
  const isFunnelVisualStep = step === 2;

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
                <span className="text-black">{opt}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    ))}
    <p className="text-sm text-gray-600">
      ✅ {quizAnswers.filter((a, i) => a === quizQuestions[i].answer).length} / {quizQuestions.length} bonnes réponses
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
        👉 &quot;Et si {sector} pouvait enfin aligner ses specs avec la vision produit ?&quot;
      </p>
    )}
  </div>
);
  const renderFinal = () => (
  <div className="space-y-4">
    <p className="text-[#333] text-base font-medium">
      🎉 Tu as complété l&rsquo;onboarding Lyriks !
    </p>
    <p className="text-sm text-gray-600">
      Tu es prêt à prendre la main sur des RDV, pitcher un use case et faire vivre une démo immersive.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button onClick={() => alert("Pitch copié dans le presse-papier !")}>📋 Copier mon pitch</Button>
      <Button variant="outline" onClick={() => window.open("https://cal.com/romainlyriks/onboarding", "_blank")}>📅 Prendre un RDV</Button>
    </div>
  </div>
);

  const next = () => {
    if (step < 10) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const currentTitle = [
  "Bienvenue chez Lyriks 🚀",
  "Notre Mission 🎯",
  "Le Process Sales Lyriks 🔥",
  "Le Framework Lyriks : Orchestrer la clarté, closer avec impact 🎼",
  "Facette (F7) : Ta Force IA 💡",
  "Ce qu'on attend de toi 🧠",
  "C’est parti ! 🎬",
  "🎓 Quiz de validation",
  "🧪 Cas d’usage à pitcher",
  "🎯 Générateur d'accroche Lyriks",
  "✅ Onboarding terminé"
];
  const currentDescription = [
  "Tu fais désormais partie de l'équipe Sales la plus stratégique du marché SaaS B2B. Ici, on ne vend pas un outil, on change la manière dont les projets IT sont pensés et pilotés.",
  "Lyriks accélère la prise de décision, clarifie les specs et automatise l'orchestration des projets. Ta mission ? Rendre ça irrésistible pour un CEO, un PM ou un CTO.",
  "Un parcours clair et engageant, pensé pour projeter le client vers sa réussite.",
  "Lyriks, c’est le langage visuel pour transformer n’importe quel projet en une spécification claire, actionnable et collaborative.",

"👉 Ta mission : le faire découvrir à un CEO, un PM ou un CTO, et leur montrer que comprendre, décider et aligner n’a jamais été aussi simple.",
  "Avec F7, tu montres la puissance de l'automatisation : génération de diagrammes, specs PDF, prompts IA, tout ça en live. Une arme redoutable pour closer sans friction.",
  "Être stratégique, comprendre les enjeux business, et créer du lien humain. Tu es là pour guider, convaincre et accompagner nos futurs clients vers la clarté totale.",
  "Prépare ton pitch, maîtrise le funnel, et compose ton succès avec nous. Bienvenue chez Lyriks, là où chaque deal est une partition parfaitement orchestrée.",
  "Réponds à ces 3 questions pour valider ton onboarding :",
  "Tu es face à un CEO de LegalTech en série A. Il a 6 prestataires, 4 outils, et aucune vision consolidée. Rédige ton approche commerciale.",
  "Tape un secteur pour générer une accroche sectorielle dans l’esprit Lyriks.",
  "Bravo 👏 Tu as coché toutes les étapes."
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
{step === 0 && (
  <motion.img
    src="/Logo.png"
    alt="Logo.png"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    className="mx-auto mt-2 w-12 h-12"
/>
)}
            <p className="text-[#333] text-base whitespace-pre-line">
              {currentDescription[step]}
            </p>
{step === 3 && (
  <img
    src="/a4e2ded2-50c4-435e-a5d5-437a3c1b1675.png"
    alt="Diagramme Facette F7"
    className="mx-auto rounded-lg shadow-md w-full max-w-md mt-4"
  />
)}

            {isQuizStep && renderQuiz()}
            {isPitchStep && renderPitch()}
            {isPromptStep && renderPrompt()}
            {isFinalStep && renderFinal()}
            {isFunnelVisualStep && <FunnelAnimation />}

            <div className="flex justify-between mt-6">
  {step > 0 ? (
    <Button variant="outline" onClick={back} className="border-[#FC9600] text-[#FC9600]">
      Précédent
    </Button>
  ) : <div />}
  <Button 
    onClick={next} 
    disabled={step === currentTitle.length - 1} 
    className={`bg-[#FC9600] text-white hover:bg-[#bb46f5] ${step === 0 ? 'mx-auto' : ''}`}
  >
    Suivant
  </Button>
</div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
