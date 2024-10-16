import { RainbowButton } from '@/components/ui/rainbow-button';
type GeneralButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}; //sto dichiarando il tipo

const GeneralButton: React.FC<GeneralButtonProps> = ({
  children,
  className,
  onClick,
}) => {
  //destrutturazione
  return (
    <>
      <RainbowButton
        onClick={onClick}
        className={`flex justify content px-3 ${className ?? ''}`}
      >
        {children}
      </RainbowButton>
    </>
  );
};

export default GeneralButton;
