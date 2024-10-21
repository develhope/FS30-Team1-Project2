import React, { useState } from 'react';
import GeneralCard from '../general_card/General_Card';
import GeneralButton from '../generalButton/GeneralButton';

interface TransformingButtonProps {
  card_children: React.ReactNode;
  button_children: React.ReactNode;
  className?: string;
}
const TransformingButton: React.FC<TransformingButtonProps> = ({
  card_children,
  button_children,
  className,
}) => {
  const [isCard, setIsCard] = useState(false);

  return (
    <>
      {isCard ? (
        <div
          onClick={() => {
            setIsCard(false);
          }}
          className={`fixed w-full h-full flex justify-end m-4 bg-transparent`}
        >
          <GeneralCard className={`z-50 ${className ?? ''}`}>
            {card_children}
          </GeneralCard>
        </div>
      ) : (
        <GeneralButton onClick={() => setIsCard(true)}>
          {button_children}
        </GeneralButton>
      )}
    </>
  );
};
export default TransformingButton;
