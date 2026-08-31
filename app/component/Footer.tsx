const Footer = () => {
  return (
    <div className=" bg-[#2B2D2A] text-[#99A69E]">
      <div className="p-14  flex flex-col gap-8 max-w-[1200px] mx-auto ">
        <div className="flex gap-16 flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col gap-3 flex-1">
            <p className="font-bold text-2xl">
              <span className="text-[#FFFFFF]">KI</span>
              <span className="text-[#7A9E7E]">VO</span>
            </p>
            <p>
              A calm, minimal task manager that helps you organize your day, set
              priorities, and stay on top of your workflow.
            </p>
          </div>

          <div className="flex flex-col w-full justify-start flex-1">
            <h1 className="text-[#FFFFFF] font-bold pb-3">PRODUCT</h1>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Features
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Integrations
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Changelog
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Roadmap
            </a>
          </div>

          <div className="flex flex-col w-full flex-1">
            <h1 className="text-[#FFFFFF] font-bold pb-3">SUPPORT</h1>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Help Center
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Contact
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              FAQ
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Status
            </a>
          </div>
        </div>

        <div>
          <hr className="border-[#70796d]" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; 2026 KIVO. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Terms
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Privacy
            </a>
            <a className="hover:text-[#FFFFFF] transition" href="#">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
