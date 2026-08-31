import Image from "next/image";
const Features = () => {
  return (
    <div className="bg-[#393D39] flex md:flex-row justify-center items-center">
      <div className="flex md:flex-row flex-col max-w-275 mx-auto px-6 py-14 justify-center items-center gap-4 ">
        <div className="border border-[#99A69E] rounded-2xl p-8 w-200  ">
          <div className="relative w-full h-64 ">
             <Image
              className="rounded-lg obect-cover object-top border border-[#99A69E]"
              src={"/image1.png"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="image 1"
              priority
            ></Image>
          </div>
          <h1 className="text-[#FFFFFF] m-4 font-black">Manage Tasks</h1>
          <p className="text-[#99A69E] mt-4 mx-4">
            Add, edit, and delete tasks in seconds with a clean,
            distraction-free interface.
          </p>
        </div>

        <div className="border border-[#99A69E] rounded-2xl p-8 w-200">
          <div className="relative w-full h-64 ">
            <Image
              className="rounded-lg obect-cover object-top border border-[#99A69E]"
              src={"/image2.png"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="image 2"
              priority
            ></Image>
          </div>
          <h1 className="text-[#FFFFFF] m-4 font-black">Set Priorities</h1>
          <p className="text-[#99A69E] mt-4 mx-4">
            Tag every task as No Priority, Low, Medium, or High and sort your day the way you want.
          </p>
        </div>

        <div className="border border-[#99A69E] rounded-2xl p-8 w-200 ">
          <div className="relative w-full h-64 ">
            <Image
              className="rounded-lg obect-cover object-top border border-[#99A69E] "
              src={"/image3.png"}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt="image 3"
              priority
            ></Image>
          </div>
          <h1 className="text-[#FFFFFF] m-4 font-black">Track Progress</h1>
          <p className="text-[#99A69E] mt-4 mx-4">
            Watch your completion ring fill up as you knock tasks off your list, one by one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
