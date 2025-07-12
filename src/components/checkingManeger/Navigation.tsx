"use client";

import Image from "next/image";
import PrevButton from "@/assets/icon/prevButton.svg";
import JumpInput from "./JumpInput";

interface NavigationProps {
  currentPage: number;
  total: number;
  setCurrentPage: (page: number) => void;
}

export default function Navigation({
  currentPage,
  total,
  setCurrentPage,
}: NavigationProps) {
  const totalPages = Math.ceil(total / 6); // 6 hotels per page

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center p-[22px] md:px-[70px] md:justify-between items-center">
      {/* Next Button (Always visible) */}
      <div>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`w140 h44 rounded-2xl font-geistMedium text-base flex justify-center items-center ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#0f0f0f] text-white"
          }`}
        >
          Next page
        </button>
      </div>

      {/* Prev + Page Indicator + Jump (Only on md and up) */}
      <div className="hidden md:flex items-center gap-2">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
        >
          <Image src={PrevButton} alt="Previous Page" className="w23 h23" />
        </button>

        <p className="font-geistMedium text-sm text-[#71717a]">
          Page {currentPage} of {totalPages}
        </p>

        <JumpInput
          onJump={(page) => {
            if (page >= 1 && page <= totalPages) {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        />
      </div>
    </div>
  );
}
