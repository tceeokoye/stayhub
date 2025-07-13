"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import dropdownIcon from "@/assets/icon/dropdown-Icon.svg";
import logoImg from "@/assets/logo/logo.svg";
import QuestionMark from "@/assets/icon/message-question-circle.svg";
import manueIcon from "@/assets/icon/manueIcon.svg";
import closeIcon from "@/assets/icon/x-close.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setOpen(false);
      setIsClosing(false);
    }, 400); // match your animation duration
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowStickyHeader(currentY > 66);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderHeaderContent = () => (
    <>
      <Link href="/" aria-label="Home">
        <Image
          src={logoImg}
          alt="Logo"
          className="h-[40px] w-[143px] md:h-8 md:w-auto"
          priority
        />
      </Link>
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

      <button
        onClick={() => {
          if (open) {
            handleClose();
          } else {
            setOpen(true);
          }
        }}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="md:hidden w-10.5 h-10.5 rounded-full bg-[#FAFAFA] flex items-center justify-center relative overflow-hidden"
      >
        {/* Menu Icon (visible when closed) */}
        <Image
          src={manueIcon}
          alt="Menu"
          className={`h-7 w-7 absolute transition-all transform duration-300 ease-in-out ${
            open
              ? "scale-0 opacity-0 delay-150"
              : "scale-100 opacity-100 delay-0"
          }`}
        />

        {/* Close Icon (visible when open) */}
        <Image
          src={closeIcon}
          alt="Close"
          className={`h-7 w-7 absolute transition-all transform duration-300 ease-in-out ${
            open
              ? "scale-100 opacity-100 delay-0"
              : "scale-0 opacity-0 delay-150"
          }`}
        />
      </button>
    </>
  );

  return (
    <>
      {/* Main Header — hides when scroll past 66px and scrolling up */}
      <div
        className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100 shadow-md
    ${showStickyHeader ? "animate-slideUp" : "translate-y-0"}
  `}
      >
        <div className="h-[66px] md:h-[68px] px-[20px] md:px-[70px] flex items-center justify-between">
          {renderHeaderContent()}
        </div>
      </div>

      {/* Sticky Header — replaces main when scrolling up past threshold */}
      {showStickyHeader && (
        <div className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-200 px-5 md:px-[70px] py-3 flex items-center justify-between shadow-sm animate-slideDown">
          {renderHeaderContent()}
        </div>
      )}

      {/* Mobile Modal Dropdown */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed top-[66px] inset-x-0 z-40 px-[20px] py-[3px] md:hidden ${
            isClosing ? "animate-slideUpModal" : "animate-slideDownModal"
          }`}
        >
          <nav className="flex flex-col justify-between px-6 py-6 gap-6 shadow-custom bg-white rounded-3xl h-[238px]">
            <button className="flex items-center gap-5 font-geistNormal text-base text-black">
              <Image src={QuestionMark} alt="" className="h-6 w-6" />
              Become an agent
            </button>
            <span className="w-full h-0.5 bg-[#FAFAFA]"></span>
            <Link
              href="/login"
              onClick={handleClose}
              className="flex h-11 text-base w-full items-center justify-center rounded-2xl bg-[#0f0f0f] text-white font-geistMedium"
            >
              Login/Sign Up
            </Link>
            <span className="w-full h-0.5 bg-[#FAFAFA]"></span>
            <div className="flex gap-6">
              <Link
                href="/login"
                onClick={handleClose}
                className="text-[#71717A] font-geistMedium text-sm"
              >
                Terms used
              </Link>
              <Link
                href="/login"
                onClick={handleClose}
                className="text-[#71717A] font-geistMedium text-sm"
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
