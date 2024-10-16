import { RainbowButton } from "@/components/ui/rainbow-button";
type GeneralButtonProps = {children:React.ReactNode}//sto dichiarando il tipo
const GeneralButton: React.FC<GeneralButtonProps> = ({children}) => {//destrutturazione
  return  <>
  <RainbowButton className="flex justify content px-3">{children}</RainbowButton></>//
};

export default GeneralButton;
