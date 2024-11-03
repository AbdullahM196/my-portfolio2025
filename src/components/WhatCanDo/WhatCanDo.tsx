import { CSSProperties } from "react";
import Styles from "./styles.module.css";
type Props = {
  text: string;
  index: number;
  quantity: number;
};
interface customCssProperties extends CSSProperties {
  "--position": number;
  "--quantity": number;
  "--width": string;
}

export default function WhatCanDo({ text, index, quantity }: Props) {
  console.log(text.length * 10 + "px")
  console.log(quantity)
  return (
    <div
      className={Styles.ability}
      style={
        {
          "--position": index,
          "--quantity": quantity,
          "--width": text.length * 10 + "px",
        } as customCssProperties
      }
    >
      <div className="flex">
        <p>{text}</p>
        <span className="px-4">|</span>
      </div>
    </div>
  );
}
