// "use client";
import Link from "next/link";
import Button from "../components/Button";
import Image from "next/image";
import Card from "../components/Card";
import OngoingCard from "../components/OngoingCard";
import Modal from "../components/Modal";
import AddNewTask from "../components/AddNewTask";
// import { useState } from "react";
export default function Page() {
  // const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col mx-4 my-4 gap-y-6">
      {/* <Modal open={showModal} setOpen={setShowModal} /> */}
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold">Hi Rakib</h1>
          <p
            className="text-[#D2691E] font-semibold"
            // onClick={() => setShowModal(true)}
          >
            Good Morning
          </p>
        </div>
        <Image
          src="/assets/images/avatar.png"
          alt=""
          height={50}
          width={50}
          className="rounded-full"
        />
      </div>
      <div className="flex justify-between items-center gap-x-2">
        <input
          placeholder="Search"
          className="bg-white border-2 border-slate-500 px-4 py-2 flex-1 rounded-full outline-none"
        />
        <div className="bg-[#D2691E] rounded-full w-[40px] p-2">
          <Image
            src="/assets/icons/filter.png"
            alt=""
            height={50}
            width={50}
            className="w-full"
          />
        </div>
      </div>
      <div>
        {/* <AddNewTask /> */}
        <Modal />
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="text-[20px] font-semibold">Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Mobile App" subtitle="10 Tasks" />
          <Card title="Web App" subtitle="20 Tasks" />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <div className="flex justify-between gap-x-2">
          <h1 className="text-[20px] font-semibold">On going Tasks</h1>
          <div className="flex gap-x-1 items-center cursor-pointer">
            <h1 className=" font-semibold">View All</h1>
            <Image src="/assets/icons/play.png" height={10} width={10} alt="" />
          </div>
        </div>
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <OngoingCard
            title="Wallet App Design"
            time="2:30 PM - 6:30 PM"
            days="6d"
          />
          <OngoingCard
            title="Social Media App"
            time="1:00 PM - 4:00 PM"
            days="1w"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={"/"}
          className="bg-[#D2691E] text-white px-2 py-1 rounded-3xl"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
}

// Ongoing Card
