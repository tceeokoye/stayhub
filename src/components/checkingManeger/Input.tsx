"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import searchIcon from "@/assets/icon/searchButton.svg";
import locationIcon from "@/assets/icon/location-icon.svg";
import MobileSearchIcon from "@/assets/icon/marker-pin-02.svg";

interface Suggestion {
  id: number;
  name: string;
  location: string;
  imagePath: string;
}

interface InputProps {
  onSearch: (value: string) => void;
  suggestions?: Suggestion[]; // Optional, but defaults to []
}

export default function Input({ onSearch, suggestions = [] }: InputProps) {
  const [value, setValue] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [closing, setClosing] = useState(false);



  // Handle responsive placeholder text
  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 768);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // Filter suggestions based on input value
  const filtered = useMemo(() => {
    if (!value.trim()) return [];
    return suggestions
      .filter((h) =>
        h.location.toLowerCase().includes(value.trim().toLowerCase())
      )
      .slice(0, 5);
  }, [value, suggestions]);
  useEffect(() => {
    const hasResults = value.trim() && filtered.length > 0;

    if (hasResults) {
      setClosing(false);
      setShowDropdown(true);
    } else if (showDropdown && !closing) {
      // start exit animation, then unmount after it finishes
      setClosing(true);
      const t = setTimeout(() => {
        setShowDropdown(false);
        setClosing(false);
      }, 350); // keep in sync with CSS duration
      return () => clearTimeout(t);
    }
  }, [value, filtered, showDropdown, closing]);
  // When user types or clicks a result
  const triggerSearch = (term: string) => {
    setValue(term);
    onSearch(term);
  };

  return (
    <div className="w-full md:w-[358px] mx-auto pb-6">
      <label className="hidden md:block mb-2 text-xs font-geistMedium text-[#090909]">
        Location
      </label>

      <div className="relative flex items-center gap-2">
        {/* Input field */}
        <div className="relative flex-1 px-[7px] md:px-0">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
            <Image src={locationIcon} alt="" className="hidden md:block" />
            <Image src={MobileSearchIcon} alt="" className="md:hidden" />
          </div>

          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={isMobile ? "Search here" : "Where are you going?"}
            className="w-full h44 border border-[#efefef] pl-8 md:pl-[40px] rounded12 text-sm outline-none font-geistNormal"
          />

          {/* Modal dropdown for top 3 results */}
          {showDropdown && (
            <div
              className={`absolute z-50 w-full bg-white border px-[12px] py-[18px] border-gray-200 rounded-3xl shadow-md mt-3
                ${closing ? "animate-slideUpModal" : "animate-slideDownModal"}`}
            >
              {filtered.map((h) => (
                <button
                  key={h.id}
                  onClick={() => {
                    triggerSearch(h.location);
                    setClosing(true); // close after selection
                  }}
                  className="flex w-full items-center gap-3 p-3 hover:bg-gray-50 text-left"
                >
                  <span className="relative w-4 h-4 shrink-0">
                    <Image
                      src={locationIcon}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm text-gray-600">{h.location}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search icon (desktop only) */}
        <button
          onClick={() => triggerSearch(value)}
          className="hidden md:flex items-center justify-center"
        >
          <Image src={searchIcon} alt="search" />
        </button>
      </div>
    </div>
  );
}
