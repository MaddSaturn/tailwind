export default function Flexbox() {
    return (
        <div className="bg-amber-300 flex-1 flex flex-row gap-4 items-center justify-evenly">
            <div className="w-150 h-150 bg-white flex flex-row">
                <div className="h-full flex-1 bg-gray-300 flex flex-col gap-4">

                    <div className="bg-amber-200 flex-1 w-full">
                        <p>Estos son datos del usuario</p>
                    </div>
                    <div className="bg-amber-200 flex-1 w-full">
                        <p>Estos son datos del usuario</p>
                    </div>
                    <div className="bg-amber-200 flex-1 w-full">
                        <p>Estos son datos del usuario</p>
                    </div>
                    <div className="bg-amber-200 flex-1 w-full">
                        <p>Estos son datos del usuario</p>
                    </div>
                    <div className="bg-amber-200 flex-1 w-full">
                        <p>Estos son datos del usuario</p>
                    </div>

                </div>
                <div className="h-full flex flex-col flex-1 bg-red-300 gap-4">
                    <div className="bg-amber-100 flex-3 w-full">
                        <p>Estos son mas datos</p>
                    </div>
                    <div className="bg-amber-100 flex-1 w-full">
                        <p> Estos son mas datos</p>

                    </div>
                </div>
            </div>
        </div>
    )
}