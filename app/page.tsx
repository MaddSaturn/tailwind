import Image from "next/image";
import { LucideUserRound } from "lucide-react"
import Button from "@/componets/button";


export default function Home() {
  return (
    <div className=" bg-blue-400 flex flex-col flex-1 items-center justify-evenly">
      <div className="bg-red-300 flex w-full h-25 flex-row px-10 gap-4 justify-between">
        <img className="h-full items-start" src="https://radcolombia.org/web/sites/default/files/archivos/instituciones/politecnico-grancolombiano/logo-pg.png" />
        <div className="bg-yellow-200  flex flex-row gap-8 p-3 items-center ">
          <p>Home</p>
          <p>Sobre</p>
          <p>Ranking</p>
          <p>Galeria</p>
          <p className="w-15 h-10 bg-[#7EC35F] rounded-md">Logout</p>
          <Button text="xd"/>

          
        </div>
      </div>
      <div className="flex flex-row gap-5 items-center bg-yellow-100 flex-1 justify-center">

        <div className="w-100 h-52 flex pl-6 pt-6 gap-2 flex-col rounded-xl bg-white border-[#7CC161] border shadow-md">
          <div className="flex flex-row gap-2 items-end">
            <LucideUserRound className=" bg-white text-[#7CC161]" />
            <p>Sobre</p>
          </div>
          <div className="w-10 h-0.5 bg-[#7CC161] rounded-xl place-self-start"></div>
          <p className="text-[#565656]"><span className="font-semibold text-[#5A5A5A]">Edad:</span> 25 años</p>
          <p className="text-[#565656]"><span className="font-semibold text-[#5A5A5A]">Tierra natal:</span> Planeta tierra</p>
          <p className="text-[#565656]"><span className="font-semibold text-[#5A5A5A]">Compañero:</span> LMAG</p>
          <p className="text-[#565656]"><span className="font-semibold text-[#5A5A5A]">Útima vez:</span> Hoy 10:16PM</p>
        </div>

        <div className="w-35 h-52 bg-white  rounded-xl border-[#7CC161] border shadow-md">
          <h1 className="text-center m-2 text-[#3C4E4D] font-medium">Insígnias</h1>
          <div className="w-10 h-0.5 bg-[#7CC161] rounded-xl place-self-center"></div>
          <p className="text-center m-3 text-[#818181] font-medium text-sm"> Todavia no has ganado ninguna insignia :c</p>
          <div className="w-6 h-6 bg-white rounded-full border-[#7CC161] border-2  place-self-center">
            <p className="text-center text-[#7CC161]">!</p>
          </div>
          <p className="text-center m-3 text-[#4D4D4D] font-medium text-sm">Sigue intentando!</p>
        </div>

      </div>
    </div>
  );
}
