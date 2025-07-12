import Image from "next/image";
import Link from "next/link";

import footerlogo from "@/assets/logo/logo.svg";
import twiter from "@/assets/icon/XIcon.svg";
import facebook from "@/assets/icon/facebook.svg";
import instagram from "@/assets/icon/instagram.svg";

export default function FooterHead() {
  return (
    <header className="w-full   border-bottom h-[101.43px] md:h6743  ">
      <div className="w-full  h4043 flex flex-col gap-3 md:flex-row justify-between md:items-center ">
        <div className="flex items-center gap-7">
          <Link href="/">
            <Image src={footerlogo} alt="Logo" className="w14296 h4043" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="">
              <Image src={twiter} alt="Logo" className="w24 h24" />
            </Link>
            <Link href="">
              <Image src={facebook} alt="Logo" className="w24 h24" />{" "}
            </Link>
            <Link href="">
              <Image src={instagram} alt="Logo" className="w24 h24" />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/">
            <nav className="font-geistNormal text-sm text-0f0f0f">About Us</nav>
          </Link>
          <Link href="/">
            <nav className="font-geistNormal text-sm text-0f0f0f">Contact</nav>
          </Link>
        </div>
      </div>
    
    </header>
  );
}
