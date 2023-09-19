"use client";
import { useState } from "react";
import Modal from "./Modal";
export default function AddNewTask() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* <Modal open={open} setOpen={setOpen} /> */}
      <button
        className="bg-[#D2691E] px-4 py-2 rounded-3xl text-[#FFFFFF]"
        onClick={() => setOpen(true)}
      >
        + Add New Task
      </button>
    </>
  );
}
