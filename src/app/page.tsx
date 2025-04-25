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

  const isQuizStep = step === 7;
  const isPitchStep = step === 8;
  const isPromptStep = step === 9;
  const isFinalStep = step === 10;
  const isFunnelVisualStep = step === 3;

  const handleQuizSelect = (...) => {...};

  const renderQuiz = () => (...);
  const renderPitch = () => (...);
  const renderPrompt = () => (...);
  const renderFinal = () => (...);

  const next = () => {
    if (step < 10) setStep(step + 1);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const currentTitle = [...];
  const currentDescription = [...];

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
            {isFinalStep && renderFinal()}
            {isFunnelVisualStep && <FunnelAnimation />}

            <div className="flex justify-between mt-6">
              {step > 0 ? (
                <Button variant="outline" onClick={back} className="border-[#FC9600] text-[#FC9600]">
                  Précédent
                </Button>
              ) : <div />}
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

