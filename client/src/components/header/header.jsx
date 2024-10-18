import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { Button } from "@material-tailwind/react";
export default function Header() {
  return (
    <header className="relative z-50 mb-10 flex min-h-[70px] bg-white px-4 py-4 font-[sans-serif] tracking-wide shadow-lg sm:px-10">
      <div className="flex w-full flex-wrap items-center justify-between gap-4">
        <Link to={"/"}>
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </Link>

        <div
          id="collapseMenu"
          className="max-lg:fixed max-lg:hidden max-lg:w-full max-lg:before:fixed max-lg:before:inset-0 max-lg:before:z-50 max-lg:before:bg-black max-lg:before:opacity-50 lg:!block"
        >
          <ul className="z-50 max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-full max-lg:w-1/2 max-lg:min-w-[300px] max-lg:space-y-3 max-lg:overflow-auto max-lg:bg-white max-lg:p-6 max-lg:shadow-md lg:flex lg:gap-x-5">
            <li className="mb-6 hidden max-lg:block">
              <a>
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <Link
                to={"/"}
                className="block text-[15px] font-semibold text-[#007bff] hover:text-[#007bff]"
              >
                Home
              </Link>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <a className="block text-[15px] font-semibold text-[#333] hover:text-[#007bff]">
                Team
              </a>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <a className="block text-[15px] font-semibold text-[#333] hover:text-[#007bff]">
                Feature
              </a>
            </li>
            <li className="px-3 max-lg:border-b max-lg:py-3">
              <a className="block text-[15px] font-semibold text-[#333] hover:text-[#007bff]">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-auto flex items-center space-x-6">
          {
            <Button onClick={() => Auth.logout()}>Sign Out</Button>
          }
        </div>
      </div>
    </header>
  );
}
