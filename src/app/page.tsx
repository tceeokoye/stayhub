import CheckingManager from "@/components/checkingManeger/ChekingManager";
import Header from "@/components/Header";


import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="w-full h-full  p-header">
      <Header />
      <CheckingManager />

     <Footer/> 
    </main>
  );
}
