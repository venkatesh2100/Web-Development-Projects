import { Inter } from "next/font/google";
// import VideoCard from "@/components/vediocard";
import VedioGrid from "@/components/vediogrid";
import AppBar from "@/components/appbar";
import { LeftBar } from "@/components/Leftbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
          <AppBar/>
          <div className="flex">
          <LeftBar />
          <VedioGrid/>
          </div>


    </main>
  );
}


