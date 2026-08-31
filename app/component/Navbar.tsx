"use client";
import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [Open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <nav className="bg-[#393D39] border-b border-[#70796d] md:px-14 py-3 text-[#99A69E]">
      <div className="flex flex-row justify-between max-w-[1200px] items-center mx-auto px-14">
        {/* Logo */}
        <div>
          <p className="font-bold text-2xl">
            <span className="text-[#FFFFFF]">KI</span>
            <span className="text-[#7A9E7E]">VO</span>
          </p>
        </div>

        {/* menu items */}
        <div className="hidden md:flex gap-12 justify-center items-center">
          <Link
            href={"/"}
            className={`
             ${
               pathname === "/"
                 ? "text-[#7A9E7E] transition"
                 : "hover:text-[#FFFFFF] transition"
             }
            `}
          >
            Home
          </Link>
          {/* <Link
            href={"/about"}
            className={
              pathname === "/about"
                ? "text-[#7A9E7E] transition"
                : "hover:text-[#FFFFFF] transition"
            }
          >
            About
          </Link> */}
          <Link href={"/signup"} className={" bg-[#7A9E7E] text-[#2B2D2A] p-2 px-4 rounded-lg hover:bg-[#6F9473] transition"}>
            Sign Up
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!Open)}>
          ☰
        </button>
      </div>
      {Open && (
        <div className="md:hidden mt-4 flex flex-col w-full gap-4">
          <Link
            href={"/"}
            className={`w-full text-left rounded-md  p-2   ${pathname === "/" ? "text-[#7A9E7E] bg-[#2D312D] transition" : ""}`}
          >
            Home
          </Link>
          {/* <Link
            href={"/about"}
            className={`w-full text-left rounded-md  p-2   ${pathname === "/about" ? "text-[#7A9E7E] bg-[#2D312D] transition" : ""}`}
          >
            About
          </Link> */}
          <Link
            href={"/signup"}
            className={`w-full text-left rounded-md  p-2   ${pathname === "/signup" ? "text-[#7A9E7E] bg-[#2D312D] transition" : ""}`}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
