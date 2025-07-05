import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwPG-3WaqWlTfpt4zCu2_E1b0X46ENpW0YrVtHTGg2Ox6OuJHpIYQlrZlsLiQ0DQ7WA/exec", {
        method: "POST",
        mode: "no-cors", 
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      if (result.result === "success") {
        setSuccessMsg("🎉 Inquiry submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "",
          comment: "",
        });
      } else {
        setSuccessMsg("❌ Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMsg("❌ Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          We’d love to hear from you! Whether you’re looking for a{" "}
          <strong>custom 3D wall mural, temple decor, or interior artistry</strong>,
          our team is here to bring your vision to life.
        </p>

        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            📩 Fill out the form below, and we’ll get in touch with you soon!
          </h2>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-gray-700 font-medium">Name*</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Contact Number*
              </label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email (optional)"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Location*</label>
              <input
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your city or area"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700 font-medium">Comment</label>
              <textarea
                name="comment"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Tell us about your requirements"
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:border-[#C39A66] focus:ring-2 focus:ring-[#C39A66]"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#C39A66] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-[#b18350] transition"
              >
                {loading ? "Submitting..." : "Submit Inquiry"}
              </button>
              {successMsg && (
                <p className="mt-4 text-green-600 font-medium">{successMsg}</p>
              )}
            </div>
          </form>
        </div>

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
