import LoginInput from "../../components/logins/LoginInput";
import InputHeader from "@/components/logins/InputHeader";

export default function Logings() {
  return (
    <main className="w-full h-full  pt-[55px] pb-10 box-border">
      <div className="w-full max-w330  h483 px-[32px] m-auto box-border">
        <InputHeader
          title="Login or sign up"
          description="Seamless stay management, all in one hub."
        />
        <div className="pt-10">
          <LoginInput />
        </div>
      </div>
    </main>
  );
}
