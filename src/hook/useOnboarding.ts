import { useState, useMemo } from 'react';

interface StepQuestion {
  step: string;
  questions?: { question: string; options: string[] }[];
}

export function useOnboarding(steps: StepQuestion[]) {
  const [curStep, setCurStep] = useState(0);
  const [curQuestionIndex, setCurQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const currentStepData = steps[curStep];
  const currentQuestionData = currentStepData.questions?.[curQuestionIndex];
  const stepInfo = steps.map((s) => ({
    title: s.step,
    questionCount: s.questions?.length ?? 1,
  }));
  const handleOptionChange = (value: string) => {
    const stepName = currentStepData.step;
    const prev = answers[stepName] || [];
    const updated = [...prev];
    updated[curQuestionIndex] = value;
    setAnswers({ ...answers, [stepName]: updated });
  };

  const handleNext = () => {
    const totalQ = currentStepData.questions?.length ?? 0;
    if (totalQ > 0 && curQuestionIndex < totalQ - 1) {
      setCurQuestionIndex((q) => q + 1);
    } else {
      setCurStep((s) => s + 1);
      setCurQuestionIndex(0);
    }
  };
  const handlePrev = () => {
    if (curQuestionIndex > 0) {
      setCurQuestionIndex((q) => q - 1);
    } else if (curStep > 0) {
      const prevStep = steps[curStep - 1];
      const prevLen = prevStep.questions?.length ?? 1;
      setCurStep((s) => s - 1);
      setCurQuestionIndex(prevLen - 1);
    }
  };

  const totalQuestions = useMemo(() => {
    const total = steps.reduce(
      (sum, st) => sum + (st.questions?.length ?? 1),
      0
    );
    const done =
      steps
        .slice(0, curStep)
        .reduce((sum, st) => sum + (st.questions?.length ?? 1), 0) +
      curQuestionIndex;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;
    return { totalQuestions: total, progressPercent: percent };
  }, [steps, curStep, curQuestionIndex]);

  return {
    curStep,
    curQuestionIndex,
    answers,
    currentStepData,
    currentQuestionData,
    handleOptionChange,
    handleNext,
    handlePrev,
    totalQuestions,
    stepInfo,
  } as const;
}
