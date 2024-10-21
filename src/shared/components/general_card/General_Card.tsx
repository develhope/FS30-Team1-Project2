import ShineBorder from '@/components/ui/shine-border';
import './general_card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const GenericCard: React.FC<CardProps> = ({ children, className }) => {
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

export default GenericCard;
