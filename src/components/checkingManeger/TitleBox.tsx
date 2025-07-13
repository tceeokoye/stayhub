import Image from "next/image";
import titleImg from "@/assets/icon/titleImg.svg";
import MobiLeTitleImg from "@/assets/icon/mobileImage.png";

export default function TitleBox() {
  return (
    <div className="w-full md:px-[99.55px]  mb-8 md:pt-[17.46px] pt-[21px] ">
      <div className="w-full flex justify-between bg-FAFAFA backgroundimg md:h96 items-center rounded-2xl h-31 overflow-hidden">
        <div className="ml-[20px] md:ml-[32px]">
          <h1 className="font-geistBold text-[24px] text-nowrap text-0f0f0f pb-2">Find Your Perfect Stay</h1>
          <p className="font-geistNormal text-base text-71717a">Discover amazing hotels with the best prices</p>
        </div>
        <Image src={titleImg} alt="titleImg"  className="mr65 hidden h-full md:block"/>
        <Image src={MobiLeTitleImg} alt="mobile image" className="md:hidden object-cover h-full "/>
      </div>
    </div>
  );
}
