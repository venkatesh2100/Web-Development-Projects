import AppBar from "@/components/appbar";
// import VideoCard from "@/components/vediocard";
import { VideoCardHorizontal } from "@/components/vedioHorizantal";
import { VIDEOS } from "@/vedio";

export default function VideoPage() {
    return <div className="p-4">
        <AppBar />
        <div className="grid gap-4 grid-cols-12 pt-5">
            <div className="col-span-12 md:col-span-9 sm:col-span-8">
                <video width={"100%"} height={"720px"} controls src="https://dxip4wcd8mhk4.cloudfront.net/These+Coding+Projects+Give+You+An+Unfair+Advantage.mp4" />
                <div className="text-2xl">
                    How to get better at coding
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 sm:col-span-4">
                {VIDEOS.map(x => <VideoCardHorizontal video={x} />)}
            </div>
        </div>
    </div>
}