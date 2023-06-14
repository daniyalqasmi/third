import Image from "next/image"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="bg-gradient-to-r from-purple-400  to-blue-500 via-95%">
            <footer className="text-gray-600 body-font">
                
                <div className="bg-gradient-to-r from-purple-400  to-blue-500 via-95%">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <Image
                                src={require("../../../public/assests/pic/logo-01.jpg")} alt="MDQ" width={70} height={70} className="rounded-full"
                            />

                            <span className="ml-3 text-xl">MDQ</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                            © 2023 MDQ —
                            <a
                                href="https://twitter.com/knyttneve"
                                rel="noopener noreferrer"
                                className="text-gray-600 ml-1"
                                target="_blank"
                            >
                                @MuhammadDaniyalQasmi
                            </a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-white p-500">
                                <a href="https://www.facebook.com/Daniyalqasmi5327">
                                    <FaFacebookF className="text-xl hover:text-blue-700" />
                                </a>
                            </a>
                            <a className="ml-3 text-white p-500">
                                <a href="https://www.instagram.com/muhammaddaniyalqasmi5327">
                                    <FaInstagram className="text-xl hover:text-red-700  " />
                                    
                                </a>
                            </a>

                            <a className="ml-3 text-white p-500">
                                <a href="">
                                    <FaGithub className="text-xl hover:text-black" />
                                </a>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}
