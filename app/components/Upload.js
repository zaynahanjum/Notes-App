export default function Upload() {
    return (
        <div className="h-100 p-5 w-170 rounded-2xl border border-gray-300 m-auto mt-10">
            <p className="text-lg">Upload Notes</p>
            <p className="text-gray-500">
                Share your study materials with other students
            </p>
            <div className="flex flex-col p-4 gap-2 justify-center items-center w-full h-[70%] mt-10 border-2 border-dashed border-gray-300 rounded-3xl">
                {/* <svg className="h-20 w-20 stroke-[1.6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" role="img">
                    <path fill="none" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" d="M21 15v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
                    <path fill="none" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" d="M7 10l5 5 5-5" />
                    <path fill="none" stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" d="M12 15V3" />
                </svg> */}
                <svg
                    className="h-20 w-20 stroke-[1.6]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="img"
                >
                    <path
                        fill="none"
                        stroke="#9CA3AF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 15v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"
                    />
                    <path
                        fill="none"
                        stroke="#9CA3AF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 10l5 5 5-5"
                    />
                    <path
                        fill="none"
                        stroke="#9CA3AF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 15V3"
                    />
                </svg>
                <p>Drop your files here</p>
                <p className="text-gray-500">or</p>
                <button className="border border-gray-300 py-1 px-2 rounded-md">
                    Choose Files
                </button>
                <p className="text-gray-500">Supports: PDF, DOC, DOCX, PPT, PPTX, TXT, MD</p>


            </div>
        </div>
    )
}