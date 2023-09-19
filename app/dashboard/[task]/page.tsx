import Button from "@/app/components/Button";
import ItemsCard from "@/app/components/cards/itemscard";
import { ChevronLeftIcon, UserPlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Page({}) {
  return (
    // <h1>Task Page</h1>;
    // <h1>Task Page</h1>;

    <div className="w-full px-2 py-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <Link href="/dashboard" className="cursor-pointer">
            <ChevronLeftIcon className="h-12 w-12 text-slate-500" />
          </Link>
          <h1 className="text-[20px] font-semibold">Task Details</h1>
        </div>
        <div className="flex gap-x-4">
          <div className="flex items-center -space-x-4">
            <Image
              src="/assets/images/avatar.png"
              alt=""
              height={30}
              width={30}
              className="rounded-xl w-full h-full"
            />
            <Image
              src="/assets/images/avatar.png"
              alt=""
              height={30}
              width={30}
              className="rounded-xl w-full h-full"
            />
            <Image
              src="/assets/images/avatar2.png"
              alt=""
              height={30}
              width={30}
              className="rounded-xl w-full h-full"
            />
          </div>
          <Button
            icon={<UserPlusIcon className="h-4 w-4 text-white" />}
            className="bg-[#D2691E] text-white px-4 py-1 rounded-3xl"
          />
        </div>
      </div>
      <div className="max-w-full overflow-x-auto flex gap-x-4 px-2 py-2 mt-10 mx-10">
        <ItemsCard title="Product Backlog" />
        <ItemsCard title="On Going" />
        <ItemsCard title="Verify" taskdescription="Registeration Page" />
        <ItemsCard title="Done" taskdescription="Design" />
      </div>
      {/* <div className="grid grid-cols-4 gap-x-2 mt-10"> */}
      {/* <div className="shadow-lg rounded-2xl">On Going</div>
        <div className="shadow-lg rounded-2xl">Verify</div>
        <div className="shadow-lg rounded-2xl">Done</div> */}
      {/* </div> */}
    </div>
  );
}
