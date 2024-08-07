import Image from "next/image";
import { Inter } from "next/font/google";
import { RevenueCard } from "./components/revenueCard";
import { BlueRevenueCard } from "./components/bluerevenueCard";
import Cardsection from "./components/cardsection";
import TopBar from "./components/topbar";
import { Table } from "./components/Table";
import { DataSection } from "./components/dataSection";
import MainBody from "./components/mainBody";
import SideBar from "./components/sidebar/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex bg-gray-50">
      <SideBar />

      <div className="md:ml-52 w-full">
        <TopBar />
        <div className="mt-5">
        <MainBody /></div>
      </div>
    </main>
  );
}
