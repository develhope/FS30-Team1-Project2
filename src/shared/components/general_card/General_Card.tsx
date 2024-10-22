import ShineBorder from '@/components/ui/shine-border';
import './general_card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
//todo : fix shine border by doing it with pure css then substituting all the shineborder with new divs
const GeneralCard: React.FC<CardProps> = ({ children, className }) => {
  return (
    <>
      <ShineBorder
        className={`card bg-neutral-800 ${className ?? ''}`}
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
        borderWidth={3}
      >
        {children}
      </ShineBorder>
    </>
  );
};

export default GeneralCard;
