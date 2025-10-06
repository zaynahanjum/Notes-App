export default function View() {
    const notes = [
        {
            "id": 1,
            "title": "Chapter 1 - Introduction",
            "desc": "Comprehensive notes covering the fundamentals and basic concepts.",
            "uploaded": "2024-01-15",
            "memory": "2.4 MB",
            "docType": "PDF"
        },
        {
            "id": 2,
            "title": "Chapter 2 - Algebra Basics",
            "desc": "Detailed explanation of algebraic expressions, equations, and properties.",
            "uploaded": "2024-02-10",
            "memory": "3.1 MB",
            "docType": "DOCX"
        },
        {
            "id": 3,
            "title": "Chapter 3 - Calculus Foundations",
            "desc": "Introduction to limits, derivatives, and continuity with examples.",
            "uploaded": "2024-03-02",
            "memory": "4.8 MB",
            "docType": "PDF"
        },
        {
            "id": 4,
            "title": "Chapter 4 - Geometry Concepts",
            "desc": "Covers angles, theorems, and coordinate geometry fundamentals.",
            "uploaded": "2024-03-25",
            "memory": "2.9 MB",
            "docType": "PPTX"
        },
        {
            "id": 5,
            "title": "Chapter 5 - Probability & Statistics",
            "desc": "Summarized formulas and solved examples for probability and statistics.",
            "uploaded": "2024-04-12",
            "memory": "3.7 MB",
            "docType": "TXT"
        }
    ]

    return (
        <div className="">
            {
                notes.map((note) => {
                    return (
                        <div
                            key={note.id}
                            className="border-2 my-6 rounded-md py-4 px-4 gap-4 border-gray-300 flex flex-row items-start"
                        >
                            <div className="bg-gray-300 p-2 rounded-md">
                                <img
                                    src="/document.png"
                                    className="h-5 w-5"
                                ></img>
                            </div>
                            <div>
                                <h2 className="text-lg">
                                    {note.title}
                                </h2>
                                <p className="text-gray-500 text-md">
                                    {note.desc}
                                </p>
                                <div className="text-gray-500 text-sm flex items-center gap-7">
                                    <p>Uploaded {note.uploaded}</p>
                                    <p>{note.memory}</p>
                                    <p
                                        className="bg-gray-200 py-1 px-2 rounded-sm"
                                    >{note.docType}</p>
                                </div>
                            </div>
                            <button className="bg-black text-white cursor-pointer py-1 px-2 rounded-md ml-auto">
                                <svg
                                    className="inline-block mr-3 stroke-[1.4]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    role="img"
                                >
                                    <path
                                        fill="none"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 15v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"
                                    />
                                    <path
                                        fill="none"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 10l5 5 5-5"
                                    />
                                    <path
                                        fill="none"
                                        stroke="white"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 15V3"
                                    />
                                </svg>
                                Download
                            </button>
                        </div>
                    )

                })
            }
        </div>

    )
}