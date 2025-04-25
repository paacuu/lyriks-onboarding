"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const quizQuestions = [...];

const FunnelAnimation = () => (...);

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
