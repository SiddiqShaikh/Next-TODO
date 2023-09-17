"use client";
import Image from "next/image";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  // useEffect(()=>{
  //   const timer = setTimeout(() => {
  //     router.push("/dashboard")
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // },[])
  return (
    <main className="absolute top-[60px] w-full z-[10]">
      <div className="w-full flex flex-col gap-y-6 items-center my-2 px-4">
        <h1 className="text-[48px] max-w-[500px] font-semibold leading-[1.1] text-center ">
          Manage your team & Everything with{" "}
          <span className="text-[#D2691E]">taskoo</span>
        </h1>
        <Image
          src="/assets/images/homepage.png"
          width={300}
          height={300}
          alt=""
        />
        <p className="font-semibold max-w-[500px] text-center">
          When you're overwhelmed by the amount of work you have on your plate,
          stop and rethink.
        </p>
        {/* <div className="flex items-center">

          <div className="w-[30px] border-2  border-black rounded-full px-2 py-2">
          <Image
              src="/assets/icons/play.png"
              alt=""
              width={100}
              height={100}
              className="w-full"
              />
          </div>
          <div className="w-[100px] bg-black h-[1px]"></div>
              </div> */}
        {/* <button className="bg-[green] text-teal-50 w-[200px] rounded-3xl py-2 px-4">Lets Start</button> */}
        <Button
          className="bg-[#D2691E] text-teal-50 w-[200px] rounded-3xl py-2 px-4"
          onClick={() => router.push("/dashboard")}
        >
          Lets Start
        </Button>
      </div>
    </main>
  );
}
