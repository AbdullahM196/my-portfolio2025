import React, { CSSProperties } from "react";
import WhatCanDo from "./WhatCanDo";
import { abilities } from "../../../public/data";
import Styles from "./styles.module.css";
interface customCssProperties extends CSSProperties {
  "--position": number;
  "--quantity": number;
  "--width": string;
}
const quantity =abilities.length

export default function Abilities() {

  return (
    <div className={Styles.slider}>
      <section className={Styles.list}>
        {abilities.map((ability, idx) => (
          <div
          key={ability}
          className={Styles.ability}
          style={
            {
              "--position": idx,
              "--quantity":quantity,
              "--width": ability.length * 5 + "px",
            } as customCssProperties
          }
        >
          <div className="flex">
            <p>{ability}</p>
            <span className="px-4">|</span>
          </div>
        </div>
        ))}
      </section>
    </div>
  );
}
