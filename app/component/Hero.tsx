import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-[#2B2D2A] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center p-20 max-w-[1200px]">
        <h1 className="bg-[#2D312D] rounded-2xl px-4 py-1 text-[#99A69E] border border-[#99A69E]">Your tasks organized</h1>
        <h1 className="text-6xl font-bold m-8">
          <span className="text-[#FFFFFF]">Stay on top of</span>
          <span className="text-[#7A9E7E]"> your workflow</span>
        </h1>
        <p className="text-2xl text-[#99A69E] m-4 ">
          KIVO keeps your to-dos simple. Add tasks, set priorities, mark them
          done, and let the built-in calendar keep you grounded — all in one
          calm, minimal space.
        </p>
        <Link href={"/signup"} className="bg-[#7A9E7E] px-6 py-2 rounded-lg text-[#393D39] m-6">Get Started Free</Link>
      </div>
    </div>
  );
};

export default Hero;
