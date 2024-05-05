import Link from "next/link";
import Image from "next/image";
import { LinearGradient } from "react-text-gradients";
export const Navebar = () => {
  return (
    <>
      <div className="navbar bg-base-100 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="hover:no-underline" href="">
                  Dashboard
                </a>
              </li>
              <li>
                <a className="hover:no-underline">services</a>
              </li>
              <li>
                <a className="hover:no-underline">About Us</a>
              </li>
            </ul>
          </div>
          <a className="mx-2 display inline-flex font-bold text-2xl cursor-pointer hover:no-underline">
            <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
              <span>
                <span className="text-3xl ">T</span>rade
                <span className="text-3xl ">T</span>rackers
              </span>
            </LinearGradient>
            <Image src="/logo.gif" alt="app-logo" height={40} width={40} />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link href="/" className="hover:no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Landing" className="hover:no-underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/Landing" className="hover:no-underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Landing" className="hover:no-underline">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href={"/signup"}
            className="btn bg-blue-900 rounded-md text-white hover:no-underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};
