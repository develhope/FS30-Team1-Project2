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
      {isCard && (
        <>
          <div
            onClick={() => {
              setIsCard(false);
            }}
            className={`opacity-10 fixed z-30 w-full h-screen flex justify-end  bg-black`}
          ></div>
          <div className="absolute m-2">
            <GeneralCard className={`z-50 ${className ?? ''}`}>
              {card_children}
            </GeneralCard>
          </div>
        </>
      )}
      <GeneralButton className="m-4" onClick={() => setIsCard(true)}>
        {button_children}
      </GeneralButton>
    </>
  );
};
export default TransformingButton;
