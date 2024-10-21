import GeneralButton from '@/shared/components/generalButton/GeneralButton';
import Google from '../google_logo/Google';

const LoginForm: React.FC = () => {
  return (
    <>
      <form className="flex flex-col">
        <h2>Login</h2>
        <input type="email" name="email"></input>
        <span>or</span>
        <GeneralButton>
          <Google></Google>
          <span className="ml-2">Login with Google</span>
        </GeneralButton>
      </form>
    </>
  );
};

export default LoginForm;
