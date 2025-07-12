"use client";

import { useState } from "react";
import Image from "next/image";
import nextIcon from "@/assets/icon/JumpButton.svg"

interface JumpInputProps {
  onJump: (page: number) => void;
}

export default function JumpInput({ onJump }: JumpInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const page = parseInt(input);
    if (!isNaN(page)) {
      onJump(page);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" border rounded-md flex items-center gap-2.5 border-[#EFEFEF] w-[111px] h-[43px] justify-center">
  <input
  type="number"
  min={1}
  value={input}
  onChange={(e) => setInput(e.target.value)}
  className="w-[46px] text-[10px] text-[#71717A] font-geistMedium border border-gray-300 focus:outline-none focus:border-transparent [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance]:textfield"
  placeholder="Jump to..."
/>

      <button
        type="submit"
       
      >
       <Image src={nextIcon} alt={nextIcon}/>
      </button>
    </form>
  );
}
