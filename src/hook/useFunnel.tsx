import { ReactElement, ReactNode, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const Step = ({ children }: StepProps) => children;

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );

    return { targetStep };
  };

  return { Funnel, setStep, currentStep: step } as const;
};
