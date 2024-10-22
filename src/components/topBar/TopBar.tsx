import TransformingButton from '@/shared/components/transforming_button/TransformingButton';
import LoginForm from '../login_form/LoginForm';

const TopBar: React.FC = () => {
  return (
    <>
      <div className="flex justify-end ">
        <TransformingButton
          card_children={<LoginForm/>}
          button_children={'Login'}
        ></TransformingButton>
      </div>
    </>
  );
};
export default TopBar;
