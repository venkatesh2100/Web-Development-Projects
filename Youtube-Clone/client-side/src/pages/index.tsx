import { Inter } from "next/font/google";
// import VideoCard from "@/components/vediocard";
import VedioGrid from "@/components/vediogrid";
import AppBar from "@/components/appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <AppBar/>
      <VedioGrid/>

    </>
  );
}
