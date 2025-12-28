import { ReactElement, ReactNode, useState } from 'react';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const Step = ({ children }: StepProps): ReactNode => {
  return children;
};
export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);

  const Funnel = ({ children }: FunnelProps): JSX.Element | null => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );

    return targetStep ?? null;
  };

  return { Funnel, setStep, currentStep: step } as const;
};
