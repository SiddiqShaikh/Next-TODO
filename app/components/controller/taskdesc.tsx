interface TaskDescProps {
  title?: string;
  taskdescription?: string;
}
export default function TaskDesc({ title, taskdescription }: TaskDescProps) {
  return (
    <div
      className={` ${
        title === "On Going"
          ? "bg-[green]"
          : title === "Verify"
          ? "bg-[red]"
          : "bg-slate-500"
      } rounded-2xl px-2 py-3 gap-x-4 items-center text-[#FFFFFF] ${
        taskdescription ? "flex" : "hidden"
      }  `}
    >
      <input type="checkbox" className="rounded-full" id="description1" />
      <label htmlFor="description1" className="text-[14px]">
        {taskdescription}
      </label>
    </div>
  );
}
