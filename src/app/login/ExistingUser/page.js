import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import LoginInput from "./logins/components/LoginInput";

export default function Logings() {
  return (
    <main className="w-full h-full  pt6229">
      <div className="w350  h483 m-auto bg-050505">
        <div className="w-full h4043 flex justify-center items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" className="" />
          </Link>
        </div>
        <div className="w-full h54 m-auto text-center pt-6">
          <h1 className="font-geistMedium text-2xl text-0f0f0f">
            Login or sign up
          </h1>
          <p className="font-geistNormal text-sm text-71717a pt-1 ">
            Seamless stay management, all in one hub.
          </p>
        </div>
        <div className="">
          <LoginInput />
        </div>
      </div>
    </main>
  );
}
