import React, {SetStateAction} from "react";

const InputQuantityComponent: React.FC<{
  amount: number;
  setAmount: React.Dispatch<SetStateAction<number>>;
}> = ({amount, setAmount}) => {
  return (
    <div className="flex h-[44px] items-center overflow-hidden rounded border border-Primary1">
      <button
        className="h-full w-[41px] border-r border-Primary1 text-2xl"
        disabled={amount <= 0} // Disable nếu amount <= 0
        onClick={() => {
          if (amount > 0) {
            setAmount((prev) => prev - 1);
          }
        }}
      >
        -
      </button>
      <input
        className="text-medium h-full w-20 border text-center"
        value={amount}
        onChange={(e) => {
          const newValue = Number(e.target.value);

          if (!isNaN(newValue) && newValue >= 0 && newValue <= 10) {
            setAmount(newValue);
          }
        }}
      />
      <button
        className="h-full w-[41px] border-Secondary2 bg-Secondary2 text-2xl text-Text"
        disabled={amount >= 10} // Disable nếu amount >= 10
        onClick={() => {
          if (amount < 10) {
            setAmount((prev) => prev + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};

export default InputQuantityComponent;
