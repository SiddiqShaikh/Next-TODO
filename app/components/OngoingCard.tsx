import Image from "next/image"
interface OngoingCard{
    title:string
    time:string
    days:string
  }
 export default function OngoingCard({title,time,days}:OngoingCard){
    return(
      <div className="flex flex-col gap-y-2 shadow-lg px-4 py-4 rounded-xl">
        <div className="flex justify-between"><h1 className="font-bold text-[20px]">{title}</h1><button className="bg-[#D2691E] w-[50px] rounded-3xl text-[#FFFFFF]">{days}</button></div>
      <div className="flex flex-col gap-y-2"><h1 className="text-[grey]">Team members</h1>
      <div className="flex gap-x-2">
  
      <Image
      src="/assets/images/avatar.png"
      alt=""
      height={20}
      width={20}
      className="rounded-lg"
      />
      <Image
      src="/assets/images/avatar.png"
      alt=""
      height={20}
      width={20}
      className="rounded-lg"
      />
      </div>
      </div>
      <div className="flex items-center gap-x-2 mt-4">
        <Image
        src="/assets/icons/clock.png"
        alt="clock icon"
        height={20}
        width={20}
        />
        <p>{time}</p>
      </div>
      </div>
    )
  }