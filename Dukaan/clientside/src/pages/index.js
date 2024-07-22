import Image from "next/image";
import { Inter } from "next/font/google";
import { RevenueCard } from "./components/revenueCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="grid grid-cols-4">
      <RevenueCard title={"Amount pending"} amount={"82,374"} orderCount={13} />
    </main>
  );
}
