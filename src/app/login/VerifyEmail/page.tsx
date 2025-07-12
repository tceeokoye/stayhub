import InputHeader from "../../../components/logins/InputHeader";
import VerifyInput from "../../../components/logins/VerifyInput";

export default function EmailVerification() {
 
  return (
    <main className="w-full h-full pt92 flex justify-center">
      <div className=" w-full max-w-350h483 px-[32px] box-border h483 m-auto">
        <InputHeader
          title="Verify your email address"
          description={
            <>
              Enter the verification code we sent to{" "} <br/>
              <span className="text-0f0f0f font-geistMedium  ">
                chidera@gmail.com.
              </span>
            </>
          }
        />
        <div className="pt-10">
          <VerifyInput />
        </div>
      </div>
    </main>
  );
}
