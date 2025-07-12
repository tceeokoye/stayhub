"use client";

import { useState } from "react";
import Input from "./Input";
import TitleBox from "./TitleBox";
import HotelList, { hotelData } from "../HotelList";
import Navigation from "./Navigation";

export default function CheckingManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="w-full px-5 md:px-[70px] mt-[64.6px]">
      <TitleBox />
      <Input suggestions={hotelData} onSearch={handleSearch} />
      <HotelList searchTerm={searchTerm} currentPage={currentPage} />
      <Navigation
        currentPage={currentPage}
        total={hotelData.length}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
