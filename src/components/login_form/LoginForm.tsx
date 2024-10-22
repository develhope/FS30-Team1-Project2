import GeneralButton from '@/shared/components/generalButton/GeneralButton';
import Google from '../google_logo/Google';
import { useState } from 'react';
import ShineBorder from '../ui/shine-border';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  return (
    <>
      <form className="flex flex-col">
        <ShineBorder
          color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
          borderWidth={2}
          className="m-2 p-0"
        >
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          ></input>
        </ShineBorder>

        <GeneralButton className="m-2">Login with Magic Email</GeneralButton>
        <span className="text-neutral-50 text-center font-semibold text-lg">
          or
        </span>
        <GeneralButton className="m-2">
          <Google></Google>
          <span className="ml-2">Login with Google</span>
        </GeneralButton>
      </form>
    </>
  );
};

export default LoginForm;
