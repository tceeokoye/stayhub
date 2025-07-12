"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import GoogleIcon from "@/assets/icon/GoogleIcon.svg";
import AppleIcon from "@/assets/icon/AppleIcon.svg";
import Error from "@/assets/icon/error.svg";
import CloseM from "@/assets/icon/Close.svg";
import Button from "./Buttons";
import { useRef, useState } from "react";

export default function LoginInput() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleChange = () => {
    const value = inputRef.current?.value || "";
    setEmail(value);
    setIsInvalid(false);
    setShowModal(false);
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleClick = () => {
    if (!isValidEmail(email)) {
      setIsInvalid(true);
      setShowModal(true);
    } else {
      setLoading(true); // ✅ start loading
      setTimeout(() => {
        router.push("/login/VerifyEmail");
      }, 1500);
    }
  };

  const inputBorderColor = isInvalid
    ? "border-ff0000"
    : isFocused
    ? "border-318af7"
    : "border-efefef";

  return (
    <div className="flex flex-col gap-4 w-full max-w-[350px]  pt-3 m-auto">
      <div className="flex flex-col gap-2">
        <label
        htmlFor="email"
        className="text-090909 font-geistMedium text-xs p-0 m-0"
      >
        Email address
      </label>
      <input
        placeholder="Enter your email"
        type="email"
        name="email"
        id="email"
        ref={inputRef}
        value={email}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border ${inputBorderColor} ${
          isFocused ? "shadow-[0px_0px_0px_3px_#318AF754]" : ""
        } ${
          isInvalid ? "shadow-[0px_0px_0px_3px_#FF000054]" : ""
        } rounded12 px-4 font-geistNormal text-sm text-636363 py-2 outline-none transition duration-300`}
      />

      <p className="text-71717a font-geistNormal text-sm ">
        By continuing, you have read and agree to our{" "}
        <Link href="" className="text-318af7">
          Terms and Conditions
        </Link>{" "}
        and{" "}
        <Link href="" className="text-318af7">
          Privacy Statement
        </Link>
        .
      </p>
      </div>

      
      <div className="flex w-full flex-col  gap-2">
        <Button
          onClick={handleClick}
          disabled={!email || loading}
          isLoading={loading}
        >
          Continue
        </Button>

        <div className="flex items-center justify-center gap-1 w-full ">
          <hr className="w1621 h-px bg-e2e2e2 border-none" />
          <p className="text-base font-geistNormal text-71717a">or</p>
          <hr className="w1621 h-px bg-e2e2e2 border-none" />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <button className="flex items-center justify-between bg-ffffff border border-71717a rounded-xl px-6 h-12 w-full">
            <Image src={GoogleIcon} alt="Google Icon" className="w-5 h-5" />
            <span className="text-090909 font-geistNormal w268 text-base">
              Continue with Google
            </span>
          </button>
          <button className="flex items-center justify-between bg-ffffff border border-71717a rounded-xl px-6 h-12 w-full">
            <Image src={AppleIcon} alt="Apple Icon" className="w-5 h-5" />
            <span className="text-090909 font-geistNormal w268 text-base">
              Continue with Apple
            </span>
          </button>
        </div>
      </div>

      {showModal && (
        <div className="mt-2 bg-ffe6e669 border border-ff0000 px-4 py-4 rounded12 relative">
          <div className="flex gap-4 items-baseline">
            <Image src={Error} alt="error" />
            <div>
              <p className="font-geistMedium text-base text-ff0000">
                Invalid Email!
              </p>
              <span className="font-geistNormal text-sm text-ff0000">
                type in your correct mail
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
