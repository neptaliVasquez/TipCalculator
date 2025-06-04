import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipPercentageForm({
  setTip,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((el) => (
          <div className="flex gap-2" key={el.id}>
            <input
              type="radio"
              name="tip"
              value={el.value}
              id={el.id}
              onChange={(e) => setTip(+e.target.value)}
              checked={el.value === tip}
            />
            <label htmlFor={el.id}>{el.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}
