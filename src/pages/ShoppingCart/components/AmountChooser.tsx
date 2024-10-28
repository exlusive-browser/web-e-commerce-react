import React, { useState } from "react";

interface AmountChooserProps {
  onAmountChange: (amount: number) => void;
  initialAmount?: number;
}

export const AmountChooser: React.FC<AmountChooserProps> = ({
  onAmountChange,
  initialAmount = 1,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);

  const handleIncrease = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  const handleDecrease = () => {
    if (amount > 1) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      onAmountChange(newAmount);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleDecrease}
        className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        -
      </button>
      <span className="text-l font-semibold text-gray-600">{amount}</span>
      <button
        onClick={handleIncrease}
        className="bg-blue-400 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        +
      </button>
    </div>
  );
};
