"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import Image from "next/image";

import Error from "@/assets/icon/error.svg";
import CloseM from "@/assets/icon/Close.svg";
import Button from "./Buttons";
export default function VerifyInput() {
  const router = useRouter();
  const [code, setCode] = useState(["", "", "", ""]);
  const [isInvalid, setIsInvalid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setIsInvalid(false);
    setShowModal(false);
    if (value && index < 3) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    if (code.some((c) => c === "")) return;
    setLoading(true);
    setTimeout(() => {
      const enteredCode = code.join("");
      if (enteredCode !== "1234") {
        setIsInvalid(true);
        setShowModal(true);
      } else {
        router.push("/SignUp");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-[210px]  flex flex-col items-center justify-center w-full max-w-[350px] m-auto">
      <div className="flex gap-[12px] mb-6 ">
        {code.map((digit, index) => {
          const isFocused = focusedIndex === index;
          const isFilled = digit !== "";
          const borderColor = isInvalid
            ? "border-ff0000"
            : isFocused
            ? "border-318af7"
            : "border-efefef";
          const boxShadow = isInvalid
            ? "shadow-[0_0_0_3px_#FF000054]"
            : isFocused
            ? "shadow-[0_0_0_3px_#318AF754]"
            : "";

          return (
            <div key={index} className="relative w-[73px] h44">
              {!isFilled && (
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-636363 font-geistNormal text-sm pointer-events-none select-none">
                  -
                </span>
              )}
              <input
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                type="password"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                className={`w785 bg-g h44 text-center rounded12 font-geistNormal text-base bg-eaf3fe2e text-050505 z-10 relative outline-none border transition-all ${borderColor} ${boxShadow}`}
              />
            </div>
          );
        })}
      </div>

      <Button
        onClick={handleSubmit}
        disabled={code.some((c) => c === "")}
        isLoading={loading}
      >
        Continue
      </Button>

      <p className="text-sm font-geistNormal text-71717a text-left w-full mt-4">
        Didn’t get the code?{" "}
        <span className="text-318af7 cursor-pointer">Resend to email</span>
      </p>

      {showModal && (
        <div className="mt-2 w-full h-[84px] bg-[#ffe6e669] border border-ff0000 px-4 py-4 rounded-[12px] relative">
          <div className="flex gap-4 items-baseline">
            <Image src={Error} alt="error" />
            <div>
              <p className="font-geistMedium text-base text-ff0000">
                Input the correct pin
              </p>
              <span className="font-geistNormal text-sm text-ff0000">
                Type in your correct mail
              </span>
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4"
          >
            <Image src={CloseM} alt="Close" />
          </button>
        </div>
      )}
    </div>
  );
}
