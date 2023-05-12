import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-50">
      <div>
        <img src={logo} alt="logo-image" style={{ width: "50px" }} />
      </div>
      {/*Menu*/}
      <ul className="hidden md:flex ">
        <li className="hover:text-blue-500">Home</li>
        <li className="hover:text-blue-500">About</li>
        <li className="hover:text-blue-500">Skills</li>
        <li className="hover:text-blue-500">Work</li>
        <li className="hover:text-blue-500">Contact</li>
      </ul>
      {/*Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/*Mobile Menu */}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#cedbeb] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl ">Home</li>
        <li className="py-6 text-4xl ">About</li>
        <li className="py-6 text-4xl ">Skills</li>
        <li className="py-6 text-4xl ">Work</li>
        <li className="py-6 text-4xl ">Contact</li>
      </ul>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-blue-400">
            <a href="/" className="flex justify-between items-center w-full">
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-slate-400">
            <a href="/" className="flex justify-between items-center w-full">
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-red-400">
            <a href="/" className="flex justify-between items-center w-full">
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a className="flex justify-between items-center w-full" href="/">
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
