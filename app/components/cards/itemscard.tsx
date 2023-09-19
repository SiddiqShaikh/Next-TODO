import { PlusCircleIcon } from "@heroicons/react/20/solid";
import Button from "../Button";
import TaskDesc from "../controller/taskdesc";

interface ItemsCardProps {
  title: string;
  taskdescription?: string;
}
export default function ItemsCard({ title, taskdescription }: ItemsCardProps) {
  return (
    <div className="shadow-lg rounded-2xl flex flex-col p-4 border-cyan-100 border-2 gap-y-4 h-fit w-[900px]">
      <h1 className="text-[16px] font-bold flex justify-center">{title}</h1>
      {/* <div className="w-full bg-black h-1"></div> */}
      <TaskDesc title={title} taskdescription={taskdescription} />

      {title === "Product Backlog" && (
        <div className="flex gap-x-2 justify-end items-center">
          <h1 className="text-[14px] font-semibold">Add More</h1>
          <Button
            icon={<PlusCircleIcon className="h-6 w-6 " />}
            className="bg-[#D2691E] text-[#FFFFFF] rounded-3xl"
          />
        </div>
      )}
    </div>
  );
}
