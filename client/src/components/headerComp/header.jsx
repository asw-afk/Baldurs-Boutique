import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import SignIn from "./SignIn";
import { Button } from "@material-tailwind/react";
export default function Header() {
  return (
    <header className="flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50 mb-10">
      <div className="flex flex-wrap items-center justify-between gap-4 w-full">
        <Link to={"/"}>
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </Link>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to={"/"}
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[#333] block font-semibold text-[15px]"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-6">
          {Auth.loggedIn() ? (
            <Button onClick={() => Auth.logout()}>Sign Out</Button>
          ) : (
            <SignIn />
          )}
        </div>
      </div>
    </header>
  );
}
