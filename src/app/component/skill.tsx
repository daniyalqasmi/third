import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaPython } from "react-icons/fa"



export default function Skills() {
    return (
        <div id="Skills" className="  bg-gradient-to-r from-pink-500  to-purple-500 via-95%">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-blue-800 tracking-widest font-medium, font-bold title-font mb-1">
                            SKILLS
                        </h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-black">
                            MY SKILLS
                        </h1>
                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg- p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-600 text-white flex-shrink-0">
                                        <FaHtml5 className="text-2xl" />
                                    </div>
                                    <h2 className="text-black text-lg title-font font-bold, font-medium">
                                        HTML
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="first h-2 w-full bg-white rounded-full ">
                                        <div className="second h-2 w-full bg-black rounded-full"></div>
                                    </div>
                                    <p className="mt-3 font-bold text-black text-right">100%</p>
                                </div>
                            </div>
                        </div>


                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg- p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                                        <FaCss3Alt className="text-2xl" />
                                    </div>
                                    <h2 className="text-black text-lg title-font font-bold, font-medium">
                                        CSS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="first h-2 w-full bg-white rounded-full ">
                                        <div className="second h-2 w-[85%] bg-black rounded-full"></div>
                                    </div>
                                    <p className="mt-3 font-bold text-black text-right">85%</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg- p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                                        <DiJavascript className="text-2xl" />
                                    </div>
                                    <h2 className="text-black text-lg title-font font-bold, font-medium">
                                        JS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="first h-2 w-full bg-white rounded-full ">
                                        <div className="second h-2 w-[60%] bg-black rounded-full"></div>
                                    </div>
                                    <p className="mt-3 font-bold text-black text-right">60%</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg- p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-300 text-white flex-shrink-0">
                                        <SiTypescript className="text-xl" />
                                    </div>
                                    <h2 className="text-black text-lg title-font font-bold, font-medium">
                                        TYPESCRIPT
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="first h-2 w-full bg-white rounded-full ">
                                        <div className="second h-2 w-[60%] bg-black rounded-full"></div>
                                    </div>
                                    <p className="mt-3 font-bold text-black text-right">60%</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg- p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                                        <TbBrandNextjs className="text-xl" />
                                    </div>
                                    <h2 className="text-black text-lg title-font font-bold, font-medium">
                                        NEXT.JS
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="first h-2 w-full bg-white rounded-full ">
                                        <div className="second h-2 w-[50%] bg-black rounded-full"></div>
                                    </div>
                                    <p className="mt-3 font-bold text-black text-right">50%</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg- p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to bg-yellow-400 text-white flex-shrink-0">
                                        <FaPython className="text-xl" />
                                    </div>
                                    <h2 className=" text-black text-lg title-font font-bold, font-medium">
                                        PYTHON
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <div className="first h-2 w-full bg-white rounded-full ">
                                        <div className="second h-2 w-[50%] bg-black rounded-full"></div>
                                    </div>
                                    <p className="mt-3 font-bold text-black text-right">50%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}