import { useFunnel, Step } from '@hook/useFunnel';
import Signup from './components/Signup';
import Signup2 from './components/Signup2';

const SignupFunnel = () => {
  const { Funnel, setStep } = useFunnel('signup');

  return (
    <Funnel>
      <Step name="signup">
        <Signup onNext={() => setStep('signup2')} />
      </Step>

      <Step name="signup2">
        <Signup2 />
      </Step>
    </Funnel>
  );
};

export default SignupFunnel;
