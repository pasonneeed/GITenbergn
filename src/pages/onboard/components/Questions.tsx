import OnboardCharacter from '@assets/images/onboarding.png';
import OptionSelector from '@pages/onboard/components/OptionSelector';

interface QuestionsProps {
  question: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

const Questions = ({ question, options, value, onChange }: QuestionsProps) => {
  return (
    <div className="flex w-full items-start gap-4">
      <img
        src={OnboardCharacter}
        alt="캐릭터"
        className="hidden h-[100px] w-[100px] shrink-0 md:block"
      />

      <div className="flex flex-1 flex-col space-y-8">
        <h2 className="text-gray-900 font-T03-SB">{question}</h2>

        <OptionSelector options={options} value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Questions;
