import Image from "next/image"


export default function About() {
    return (
        <div id="About" className="bg-gradient-to-r from-purple-400  to-blue-500 via-95%">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                        <Image
                            className="object-cover object-center  mx-auto rounded-full"
                            alt="hero"
                        src={require("../../../public/assests/pic/My Pic.png")}
                        width={200}
                        height={200}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium-bold text-gray-900">
                            ABOUT ME
                            
                        </h1>
                        <p className="mb-8 leading-relaxed text-black">
                            I am a Graphic & Web Designer. I alos work on many projects you can see my project down there.
                        </p>
                        
                    </div>
                </div>
            </section>

        </div>
    )
}
