import { RainbowButton } from '@/components/ui/rainbow-button';
type GeneralButtonProps = { children: React.ReactNode; className?: string }; //sto dichiarando il tipo

const GeneralButton: React.FC<GeneralButtonProps> = ({
  children,
  className,
}) => {
  //destrutturazione
  return (
    <>
      <RainbowButton className={`flex justify content px-3 ${className ?? ''}`}>
        {children}
      </RainbowButton>
    </>
  );
};

export default GeneralButton;
