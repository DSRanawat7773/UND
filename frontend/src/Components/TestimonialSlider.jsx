import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Star } from "lucide-react";

// ✅ Use proper imports for local assets
import rkm from "../assets/RKM_portrait.jpg";
import shivaji from "../assets/shivaji-maharaj.jpg";
import buddha from "../assets/thane_RKM.jpg";
import shreenath from "../assets/shreeji-2.jpg";
import ramdarbar from "../assets/ram darbar z.jpg";

const testimonials = [
  {
    name: "Landscape Radha Krishna Mural",
    client: "Anjali Sharma – Bangalore",
    rating: 5,
    review: "A divine addition to our living room. The finishing and detail are world-class!",
    image: rkm,
  },
  {
    name: "Shivaji Maharaj Mural",
    client: "Rohan Patil – Pune",
    rating: 5,
    review: "Adds royalty and heritage to the space. Loved the depth and carving style.",
    image: shivaji,
  },
  {
    name: "Classic Radha Krishna Muraal",
    client: "Priya Sinha – Hyderabad",
    rating: 4,
    review: "Peaceful and meditative. The glow under warm lighting is unmatched.",
    image: buddha,
  },
  {
    name: "Shreenath Ji Mukharbind",
    client: "Devansh Mehta – Ahmedabad",
    rating: 4,
    review: "Exquisite craftsmanship. It brought a spiritual vibe to my home.",
    image: shreenath,
  },
  {
    name: "Ram Darbar Mural",
    client: "Sunita Joshi – Mumbai",
    rating: 4,
    review: "Beautiful work with traditional touch. Our guests can’t stop praising it.",
    image: ramdarbar,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={18}
        className={i < rating ? "text-[#C39A66]" : "text-gray-300"}
        fill={i < rating ? "#C39A66" : "none"}
      />
    ))}
  </div>
);

const TestimonialSlider = () => {
  return (
    <section className="py-20 px-4 bg-[#f9f6f1]">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#2c2c2c]"
        style={{ fontFamily: "Playfair Display, serif", letterSpacing: "0.05em" }}
      >
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={24}
        className="px-2 md:px-8"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-[#e4dcd3] max-w-sm mx-auto">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-contain hover:scale-105 transition-transform duration-500 bg-[#f0ebe4]"

              />
              <div className="p-5 text-center">
                <h3
                  className="text-lg font-semibold text-[#2c2c2c] mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.name}
                </h3>
                <p className="text-sm text-[#666] mb-1 italic">{item.client}</p>
                <StarRating rating={item.rating} />
                <p className="text-sm text-gray-600 italic mt-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  "{item.review}"
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
