import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          We’d love to hear from you! Whether you’re looking for a{" "}
          <strong>custom 3D wall mural, temple decor, or interior artistry</strong>,
          our team is here to bring your vision to life.
        </p>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            📩 Fill out the form below, and we’ll get in touch with you soon!
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium">Name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
                required
              />
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-700 font-medium">
                Contact Number*
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email (optional)"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-700 font-medium">Location*</label>
              <input
                type="text"
                placeholder="Your city or area"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
                required
              />
            </div>

            {/* Comment Box */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Comment</label>
              <textarea
                rows="4"
                placeholder="Tell us about your requirements"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button className="px-6 py-3 bg-[#C39A66] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#b18350] transition">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>

        {/* Direct Contact Info */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            📞 Prefer a direct conversation?
          </h3>
          <p className="text-gray-700 text-lg mt-2">
            Feel free to <strong>call or WhatsApp us</strong> for quick assistance!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
