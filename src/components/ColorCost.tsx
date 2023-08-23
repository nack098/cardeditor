import React, { ReactElement } from "react";

type Props = {
  colors: {
    orange: number;
    cyan: number;
    magenta: number;
    lime: number;
    ivory: number;
    any: number;
  };
};

const ColorCost: React.FC<Props> = ({ colors }) => {
  return (
    <>
      {Array.from(Array(colors.orange), (e, i) => {
        return (
          <span
            key={`orange - ${i}`}
            className="p-5 ml-1 bg-smart_orange rounded-full"
          />
        );
      })}
      {Array.from(Array(colors.cyan), (e, i) => {
        return (
          <span
            key={`cyan - ${i}`}
            className="p-5 ml-1 bg-smart_cyan rounded-full"
          />
        );
      })}
      {Array.from(Array(colors.magenta), (e, i) => {
        return (
          <span
            key={`magenta - ${i}`}
            className="p-5 ml-1 bg-smart_magenta rounded-full"
          />
        );
      })}
      {Array.from(Array(colors.lime), (e, i) => {
        return (
          <span
            key={`lime - ${i}`}
            className="p-5 ml-1 bg-smart_lime rounded-full"
          />
        );
      })}
      {Array.from(Array(colors.ivory), (e, i) => {
        return (
          <span
            key={`ivory - ${i}`}
            className="p-5 ml-1 bg-smart_ivory rounded-full"
          />
        );
      })}
      <span className="text-5xl text-center translate-y-[-4px] ml-1 mr-3 font-bold">
        {colors.any > 0 ? colors.any : ""}
      </span>
    </>
  );
};

export default ColorCost;
