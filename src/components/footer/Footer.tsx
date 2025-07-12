import FooterHead from "./FooterHead";
import Address from "./Address";
import Policy from "@/components/footer/Policy";

export default function Footer() {
  return <div className=" md:p-[70px] px-[11px]  w-full pb-[22px] md:p48 md:pb39 ">
      <div className=" h-fit md:h276 bg-FAFAFA rounded32 px-[20px] md:p305 py-8">
        <FooterHead />
        <Address/>
        <Policy />
      </div>
    </div>
 
}
