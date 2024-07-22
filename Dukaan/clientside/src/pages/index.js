import Image from "next/image";
import { Inter } from "next/font/google";
import { RevenueCard } from "./components/revenueCard";
import { BlueRevenueCard } from "./components/bluerevenueCard";
import Cardsection from "./components/cardsection";
import TopBar from "./components/topbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <TopBar/>
      <Cardsection/>
    </main>
  );
}
