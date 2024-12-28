import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { TbBrandFiverr } from "react-icons/tb";
import { usetDetails } from "../../Utils/Details/UserDetails";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-darkBg mt-4 xl:mt-8">
        <div className="container mx-auto text-center  px-5    py-4    ">
          <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-2  items-center justify-between">
            <div>
              <ul className="space-x-1">
                <li className="list-none inline-block">
                  <a
                    className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                    target="_blank"
                    href={usetDetails.fiver}
                  >
                    <TbBrandFiverr className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0" />
                    <TbBrandFiverr className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100" />
                  </a>
                </li>
                <li className="list-none inline-block">
                  <a
                    className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                    target="_blank"
                    href={usetDetails.linkedIn}
                  >
                    <FaLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0" />
                    <FaLinkedin className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100" />
                  </a>
                </li>
                <li className="list-none inline-block">
                  <a
                    className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                    target="_blank"
                    href={`mailto:${usetDetails.email}`}
                  >
                    <BiLogoGmail className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0" />
                    <BiLogoGmail className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100" />
                  </a>
                </li>
                <li className="list-none inline-block">
                  <a
                    className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                    href={`https://wa.me/${usetDetails.mobileNumber}`}
                  >
                    <FaWhatsapp className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0" />
                    <FaWhatsapp className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100" />
                  </a>
                </li>
                <li className="list-none inline-block">
                  <a
                    className="inline-block group w-[44px] h-[44px] rounded-full bg-white/15 text-white relative z-[1] overflow-hidden before:content-[''] before:absolute before:-z-[1] before:left-0 before:top-0 before:w-full before:h-full before:bg-themeGradient before:opacity-0 hover:before:opacity-20 before:transition-all before:ease-linear before:duration-100"
                    href={`tel:+91${usetDetails.mobileNumber}`}
                  >
                    <IoCall className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 group-hover:top-0 group-hover:invisible group-hover:opacity-0" />
                    <IoCall className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease-out duration-200 invisible opacity-0 group-hover:top-1/2 group-hover:visible group-hover:opacity-100" />
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-white/70">
              &copy; 2024 {usetDetails.userName}, All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
