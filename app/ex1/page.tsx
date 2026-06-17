export default function Ex1 () {
    return (
        <div className=" bg-blue-400 flex flex-col flex-1 items-center justify-evenly">
            <div className="bg-amber-100 h-150 w-150 flex flex-col p-5 gap-4">
                <div className=" bg-red-300 flex-1 w-full h-18 "></div>
                <div className="bg-amber-300 flex-3 flex flex-row p-5 gap-4">
                    <div className="bg-black flex-1"></div>
                    <div className="bg-white flex-1 flex flex-col p-5 gap-4">
                        <div className="bg-blue-300 flex-1"></div>
                        <div className="bg-blue-300 flex-1"></div>
                    </div>
                </div>
                <div className="bg-red-300 flex-3 w-full h-18 flex flex-row gap-4 p-5">
                    <div className="bg-red-500 flex-1"></div>
                    <div className="bg-red-500 flex-1"></div>
                    <div className="bg-red-500 flex-1"></div>
                </div>
                <div className="bg-red-300 flex-1 w-full h-18">
                </div>
            </div>

        </div>
    )
}