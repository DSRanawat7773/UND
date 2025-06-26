import React from "react";

const Hero = () => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center py-10 px-0 md:py-7">
      {/* Video Container */}
      <div className="w-[150vh] h-full md:h-[80vh] overflow-hidden rounded-lg shadow-lg">
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Call to Action */}
      <div className="text-center text-black mt-6 px-4">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide drop-shadow-md">
          Yes!! We Do Customization
        </h1>
        <p className="mt-2 text-lg md:text-xl font-light">
          Transform your space with tailored designs, crafted just for you.
        </p>
        <button className="mt-4 bg-[#C39A66] text-black px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-[#b0834d] transition-all duration-300">
          <a href="https://wa.me/919024576893?text=Hi%2C%20I'm%20interested%20for%20mural%20art!" target="_blank" rel="noopener noreferrer">
            SHOP NOW
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
