import Image from "next/image"

export default function Projects() {
  return (
    <div id="projects" className="bg-gradient-to-r from-purple-400  to-blue-500 via-95%">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium, font-extrabold  title-font mb-4 text-gray-900">
              MY PROJECTS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Within the depths of my project lies a symphony of innovation, meticulous craftsmanship, and boundless imagination, creating a masterpiece that transcends boundaries and sparks awe in all who behold it.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
          {/*Designer*/} 
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative border-fuchsia-600">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/2.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    Designer Project
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    FOLIO
                  </h1>
                  <p className="leading-relaxed text-white">
                  Unlock the power of your creativity with our folio website. Showcase your exceptional work, connect with fellow artists, and ignite inspiration.
                  </p>
                </div>
              </div>
            </div>
          {/*Netflix*/}  
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/netflix.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    NETFLIX PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium ,font-bold text-black mb-3">
                    NETFLIX
                  </h1>
                  <p className="leading-relaxed text-white">
                  Immerse yourself in the world of Netflix. Discover captivating movies, bingeworthy TV shows, and exclusive originals. Start streaming now.
                  </p>
                </div>
              </div>
            </div>
          {/* restaurant */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/restaurant.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    RESTAURANT PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    RASTAURANT
                  </h1>
                  <p className="leading-relaxed text-white">
                  Discover our restaurant website and embark on a gastronomic journey. Explore our menu, make reservations, and learn about our story.
                  </p>
                </div>
              </div>
            </div>
           {/* temerature  */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/Temperature.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    TEMPERATURE PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    TEMPERATURE
                  </h1>
                  <p className="leading-relaxed text-white">
                    This is a TEMERATURE project it claculate the Temperature to celsius, fahrenheit, kelivn.
                  </p>
                </div>
              </div>
            </div>
            {/* Music */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/Wavves.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    Wavves PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    MUSIC STORE
                  </h1>
                  <p className="leading-relaxed text-white">
                    This is a Music project I have created for my portfolio In this project you can buy music instument.
                  </p>
                </div>
              </div>
            </div>
            {/* Portfolio */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/portfolio.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    Nature PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    Nature
                  </h1>
                  <p className="leading-relaxed text-white">
                    This is a Nature project I have created for my portfolio In this project you can see Nature pic.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/Photography.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    PHOTOGRAPHY PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    PHOTOGRAPHY
                  </h1>
                  <p className="leading-relaxed text-white">
                  Unveil the artistry of photography through our website. Witness stunning visuals, browse portfolios, and capture the essence of timeless moments. Inspire your creativity today.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/Photography.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    PHOTOGRAPHY PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    PHOTOGRAPHY
                  </h1>
                  <p className="leading-relaxed text-white">
                  Unveil the artistry of photography through our website. Witness stunning visuals, browse portfolios, and capture the essence of timeless moments. Inspire your creativity today.
                  </p>
                </div>
              </div>
            </div><div className="lg:w-1/3 sm:w-1/2 p-4 ">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/projects/Photography.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-400 bg-gradient-to-r from-blue-500  to-purple-400 via-95% opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-xl title-font font-large font-bold text-white mb-1">
                    PHOTOGRAPHY PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium, font-bold text-black mb-3">
                    PHOTOGRAPHY
                  </h1>
                  <p className="leading-relaxed text-white">
                  Unveil the artistry of photography through our website. Witness stunning visuals, browse portfolios, and capture the essence of timeless moments. Inspire your creativity today.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  )
}
