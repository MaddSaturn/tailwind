type Props={
    text:string 
}
export default function Button (props:Props){
    return (
        <div className="bg-[#7EC35F] rounded-md flex justify-center items-center px-2 py-2 hover:bg- ">
            <p className="text-white font-medium ">{props.text}</p>
        </div>
    )
}