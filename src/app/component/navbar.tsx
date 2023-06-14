import Link from "next/link";
import React from "react";
import Image from "next/image";
import  rawListeners  from "process";
import { AiOutlineCloudDownload } from "react-icons/ai";



export default function Navbar() {
    return (
        <div id="home">
            <header className="text-black body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-gradient-to-r from-purple-400  to-blue-500 via-95%">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={require("../../../public/assests/pic/logo-01.jpg")} alt={"MDQ"} width={70} height={70} className="hover:text-black-200 rounded-full" />
                        <span className="ml-3 text-7xl">MDQ</span>

                        <span className="ml-3 text-xl"></span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={"#home"} className="mr-5 hover:text-white p-200">Home</Link>
                        <Link href={"#About"} className="mr-5 hover:text-white p-200">About</Link>
                        <Link href={"#Skills"} className="mr-5 hover:text-white p-200">Skills</Link>
                        <Link href={"#projects"} className="mr-5 hover:text-white p-200">Projects</Link>
                        <Link href={"#contact"} className="mr-5 hover:text-white p-200">Contact Us</Link>
                    </nav>
                    <a href="/assests/cv/cv.pdf">
                    <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-white  text-white hover:text-black rounded text-base mt-4 md:mt-0 ">
                    
                    Download CV 
                    <AiOutlineCloudDownload className="text-xl ml-2 "/>
                    </button>
                    </a>
                    
                </div>
            </header>
        </div>
    )
}