"use client";
import { useRouter } from "next/navigation";

interface Card {
  title: string;
  subtitle: string;
}
export default function Card({ title, subtitle }: Card) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col shadow-md rounded-lg px-4 py-4 flex-1 "
      onClick={() => router.push("/dashboard/task")}
    >
      <h1 className="text-[30px] font-bold">{title}</h1>
      <p className="text-[#D2691E] ">{subtitle}</p>
      {/* <div className="flex justify-end mt-4"><Image src="/assets/images/homepage.png" height={120} width={120} alt=""/></div> */}
    </div>
  );
}
