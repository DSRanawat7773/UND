import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          About Us
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Welcome to <strong>Urban Nest Designs</strong>, where art meets elegance to transform spaces into breathtaking masterpieces. 
          We specialize in <strong>3D wall mural art</strong>, offering <strong>custom-designed, handcrafted murals</strong> 
          that bring life, spirituality, and sophistication to any interior.
        </p>

        {/* Who We Are Section */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Who We Are</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At <strong>Urban Nest Designs</strong>, we are passionate about redefining interior spaces with 
            <strong> exquisite murals and artistic decor</strong>. Our team of skilled artisans and designers meticulously 
            craft each piece, ensuring a perfect blend of <strong>tradition and modern artistry</strong>.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-semibold text-[#C39A66]">✨ 3D Wall Murals</h3>
              <p className="text-gray-700 mt-2">
                Handcrafted, intricately detailed murals for homes, offices, and sacred spaces.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-semibold text-[#C39A66]">🛕 Spiritual & Temple Decor</h3>
              <p className="text-gray-700 mt-2">
                Divine artworks that add serenity and elegance to your space.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-semibold text-[#C39A66]">🏡 Custom Interior Art</h3>
              <p className="text-gray-700 mt-2">
                Bespoke designs tailored to match your style and vision.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-[#C39A66]">✅ Unbreakable & Dust Resistant</h3>
              <p className="text-gray-700 mt-2">
                Built to last, ensuring durability and low maintenance.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-[#C39A66]">✅ Premium Craftsmanship</h3>
              <p className="text-gray-700 mt-2">
                Designed with high-quality materials for a <strong>lifespan of 20-25 years</strong>.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-[#C39A66]">✅ Customization</h3>
              <p className="text-gray-700 mt-2">
                Every piece is uniquely crafted to suit your personal space.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            At <strong>Urban Nest Designs</strong>, we turn walls into <strong>timeless works of art</strong>.
          </h3>
          <p className="text-gray-700 mb-6">Let’s create something extraordinary together!</p>
          <button className="px-6 py-3 bg-[#C39A66] text-white text-lg font-semibold rounded-md shadow hover:bg-[#b18350] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
