import React from "react";
type numberProps = positiveNumber | negativeNumber | zeroNumber;

type numberType = {
  value: number;
};

type negativeNumber = numberType & {
  isNegative: boolean;
  isPositive?: never;
  zero?: never;
};
type positiveNumber = numberType & {
  isNegative?: never;
  isPositive: boolean;
  zero?: never;
};
type zeroNumber = numberType & {
  isNegative?: never;
  isPositive?: never;
  zero: boolean;
};
export function RandomNumber(props: numberProps) {
  const { value, isNegative, isPositive, zero } = props;
  return (
    <div>
      {value}
      {isNegative && "isNegative"}
      {isPositive && "isPositive"}
      {zero && "zero"}
    </div>
  );
}


