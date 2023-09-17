import Image from "next/image";

export default function Header({}) {
  return (
    <div className="shadow-md h-[60px] flex px-2 items-center justify-between fixed w-full z-[100] bg-white">
      <div className="flex items-center gap-x-3">
        <div className="w-[20px]">
          <Image
            src="/assets/icons/logo.png"
            alt=""
            height={100}
            width={100}
            className="w-full"
          />
        </div>
        <h1 className="">Taskooo</h1>
      </div>
      <div className="flex gap-x-2">
        <button className="bg-[#D2691E] rounded-2xl px-2 py-1 w-[100px] text-[#FFFFFF]">
          Login
        </button>
        <button className="bg-[#D2691E] rounded-2xl px-2 py-1 w-[100px] text-[#FFFFFF]">
          Signup
        </button>
      </div>
    </div>
  );
}
