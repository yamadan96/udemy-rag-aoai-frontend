import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col text-grey-800 w-full h-full overflow-y-auto">
      <div className="flex bg-slate-300 h-5/6 p-4 justify-center">
        MessageArea
      </div>
      <div className="flex h-1/6 p-4 justify-center items-center">
        FormArea
      </div>
    </div>
  );
}
