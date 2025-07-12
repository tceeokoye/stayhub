"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


import dropdownIcon from "@/assets/icon/dropdown-icon.svg";
import logoImg from "@/assets/logo/logo.svg";
import QuestionMark from "@/assets/icon/message-question-circle.svg";
import manueIcon from "@/assets/icon/manueIcon.svg"
import closeIcon from "@/assets/icon/x-close.svg"

// Fix: Wrap icons in JSX-compatible components

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 inset-y-0 z-50 md:h-[68px] h-[66px] flex items-center justify-between border-b-4 border-[#FAFAFA] bg-white px-[20px]  py-5 md:px-[70px]">
        <Link href="/" aria-label="Home">
          <Image
            src={logoImg}
            alt="Logo"
            className="h-[40px] w-[143px] md:h-8 md:w-auto"
            priority
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="flex items-center gap-2 text-base leading-6 text-black font-geistNormal">
            Become an agent
            <Image src={dropdownIcon} alt="" className="h-4 w-4" />
          </button>

          <Link
            href="/login"
            className="flex h-[44px] w-[140px] items-center justify-center rounded-2xl bg-[#0f0f0f] text-white font-geistMedium"
          >
            Login/Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((prev) => !prev)} //  <-- toggle instead of “open only”
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden w-10.5 h-10.5 rounded-full bg-FAFAFA flex items-center justify-center"
          
        >
          {open ? (
            <Image src={closeIcon } alt={closeIcon} className="h-7 w-7" />
          ) : (
              <Image src={manueIcon} alt={manueIcon} className="h-7 w-7" />
          )}
        </button>
      </header>

      {/* Mobile dropdown modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute top-[68px] mt-[3px] left-0 right-0 z-40  px-[20px] py-[3px] md:hidden"
        >
          <nav className="flex flex-col justify-between px-6 py-6 gap-6 shadow-custom bg-ffffff rounded-3xl h-[238px]">
            <button className="flex items-center gap-5  font-geistNormal text-base text-black">
              <Image src={QuestionMark} alt="" className="h-6 w-6" />
              Become an agent
            </button>
            <span className="w-full h-0.5 bg-FAFAFA"></span>
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex h-11 text-base w-full items-center justify-center rounded-2xl bg-[#0f0f0f] text-white font-geistMedium"
            >
              Login/Sign Up
            </Link>
            <span className="w-full h-0.5 bg-FAFAFA"></span>
            <div className="flex gap-6">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className=" text-[#71717A] font-geistMedium text-sm"
              >
                Terms used
              </Link>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className=" text-[#71717A] font-geistMedium text-sm"
              >
                Privacy policy
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
