import InputHeader from "@/components/logins/InputHeader"

export default function SignUp(){
    return(
       <main className="w-full h-full  pt-[55px] pb-10 ">
             <div className=" w-full max-w330  h483 px-[32px] m-auto">
               <InputHeader
                 title="Create Account"
                 description="Let’s get to know each other."
               />
              
             </div>
           </main> 
    )
}