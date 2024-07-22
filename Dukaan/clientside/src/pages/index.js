import Image from "next/image";
import { Inter } from "next/font/google";
import { RevenueCard } from "./components/revenueCard";
import { BlueRevenueCard } from "./components/bluerevenueCard";
import Cardsection from "./components/cardsection";
import TopBar from "./components/topbar";
import { Table } from "./components/Table";
import { DataSection } from "./components/dataSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main >
      <TopBar/>
      <Cardsection/>
      <DataSection/>
    </main>
  );
}
