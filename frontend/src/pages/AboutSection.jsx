import React from "react";
import { Check } from "lucide-react";
import abo from "../assets/abo.png";

const AboutSection = () => {
  const features = [
    "Transparent pricing",
    "Wide range of vehicles",
    "Safe, reliable, and comfortable journeys",
  ];

  return (
    <section
      id="about"
      className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 sm:py-28"
    >
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-snug">
            Your Travel Companion
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            We make travel simpler, smarter, and more affordable for everyone.
            Connect with reliable vehicles and trusted drivers, ensuring
            every journey is safe, transparent, and stress-free.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-500"
              >
                <Check className="w-6 h-6 text-blue-500 animate-pulse" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-8 self-start bg-blue-500 text-white font-semibold px-8 py-3 rounded-3xl hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-lg">
            Know More
          </button>
        </div>

        {/* Image with floating effects */}
        <div className="relative w-full md:w-[500px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-700 group">
          <img
            src={abo}
            alt="About Us"
            className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Decorative floating circles */}
          <div className="absolute -top-6 -left-6 w-28 h-28 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-16 h-16 bg-blue-200 rounded-full opacity-25 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
