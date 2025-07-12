import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import Link from "next/link";
import { ReactNode } from "react";


interface InputHeaderProps {
  // Path to the image
  title: string; // Header title
  description: ReactNode; // Small description under the title
}

export default function InputHeader({ title, description }: InputHeaderProps) {
  return (
    <div>
      <div className="w-full h4043 flex justify-center items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" className="mobilLogo" />
        </Link>
      </div>
      <div className="w-full h54 m-auto text-center pt-6">
        <h1 className="font-geistMedium text-2xl text-0f0f0f">{title}</h1>
         <p className="font-geistNormal text-sm text-71717a pt-1 ">
          {description}
        </p>
      </div>
    </div>
  );
}
