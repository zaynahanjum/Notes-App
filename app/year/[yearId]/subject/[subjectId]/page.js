"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import View from "../../../../components/View"
import Upload from "../../../../components/Upload"
import {Header} from "../../../../components/Header"
import {Footer} from "../../../../components/Footer"

export default function NotesPage() {
    const [activeTab, setActiveTab] = useState("view")

    return (
        <div>
            <Header />
            <div className="my-4 mx-20">
                <Head />
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab == "view" && <View />}
                {activeTab == "upload" && <Upload />}
            </div>
            <Footer />

        </div>
    )
}

function Head() {
    const router = useRouter()

    return (
        <div className="flex flex-row items-center gap-6">
            <div
                onClick={() => {
                    router.push('/year/1')
                }}
                className="flex justify-center items-center h-8 w-8 p-2 border border-gray-300 rounded-md cursor-pointer">
                <img
                    className="h-5 w-5"
                    src="/arrow.png"
                >
                </img>
            </div>
            <div>
                <h1 className="text-3xl font-bold">
                    Maths 101 Notes
                </h1>
                <p className="text-gray-500">
                    Year 1 &nbsp; • &nbsp;Manage and access study materials
                </p>
            </div>

        </div>
    )
}

function Tabs({ activeTab, setActiveTab }) {
    return (
        <div className="mt-4 flex flex-row items-center w-[500px] rounded-full bg-gray-200 p-1">
            <div
                onClick={() => setActiveTab("view")}
                className={`rounded-full py-1 cursor-pointer flex-1 text-center ${activeTab == "view" ? "bg-white" : ""}`}
            >
                <img className="h-4 w-4 inline-block mr-1.5" src="/document.png"></img>
                <p className="p-0 inline-block">View Notes</p>
            </div>
            <div
                onClick={() => setActiveTab("upload")}
                className={`py-1 rounded-full cursor-pointer flex-1 text-center ${activeTab == "upload" ? "bg-white" : ""}`}
            >
                <img className="h-4 w-4 inline-block mr-1.5" src="/upload.png"></img>
                <p className="p-0 inline-block">Upload</p>
            </div>
        </div>
    )
}