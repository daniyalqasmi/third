"use client"
import Image from "next/image"
import Typewriter from "typewriter-effect";
import via from "tailwindcss";

export default function Hero() {
  return (
    <div className="pl-24 bg-gradient-to-r from-purple-400  to-blue-500 via-95%" >
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-sl text-sl mb-4 font-medium text-gray-900">
              Hi its me
            </h1>
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-white p-500">
              
            <Typewriter 
              options={{
                strings: ["Web Developer", "Graphic Designer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
              
              
            />
            
            </h1>
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-black">Muhammad Daniyal Qasmi</h1>
            <p className="mb-8 leading-relaxed">
             

            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
