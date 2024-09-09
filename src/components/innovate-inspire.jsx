import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Innovate", "Impact", "Inspire"];

  return (
      <div className="text-2xl mx-auto text-white font-slussenLight font-semibold">
        <FlipWords words={words} /> <br />
      </div>
  );
}
