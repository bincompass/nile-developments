"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import { motion } from "framer-motion";
import StaggerContainer, {
  StaggerItem,
} from "@/components/shared/StaggerContainer";

const countries = [
  { code: "EG", dial: "+20", name: "Egypt" },
  { code: "SA", dial: "+966", name: "Saudi Arabia" },
  { code: "AE", dial: "+971", name: "United Arab Emirates" },
  { code: "KW", dial: "+965", name: "Kuwait" },
  { code: "QA", dial: "+974", name: "Qatar" },
  { code: "BH", dial: "+973", name: "Bahrain" },
  { code: "OM", dial: "+968", name: "Oman" },
  { code: "JO", dial: "+962", name: "Jordan" },
  { code: "LB", dial: "+961", name: "Lebanon" },
  { code: "US", dial: "+1", name: "United States" },
  { code: "GB", dial: "+44", name: "United Kingdom" },
];

export default function RegisterInterest() {
  const [primaryCountry, setPrimaryCountry] = useState(countries[0]);
  return (
    <section
      id="register-interest"
      className="relative py-12 md:py-20 px-4 md:px-20 bg-[#2a2a2a] overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        <Image
          src="/assets/images/register-bg.jpg"
          alt="Register Background"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2a2a2a]/80" />
      </motion.div>

      <div className="container p-0 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
          {/* Left Side: Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <h2 className="text-white text-2xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-wider uppercase">
              Register Your Interest
            </h2>
          </motion.div>

          {/* Right Side: Form */}
          <div className="lg:w-2/3">
            <StaggerContainer staggerDelay={0.1} initialDelay={0.3}>
              <form className="space-y-4">
                {/* Full Name */}
                <StaggerItem direction="right">
                  <div className="relative h-10">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className="w-full h-full bg-transparent border border-[#91724a]/30 text-white px-4 focus:outline-none focus:border-[#91724a] transition-colors placeholder:text-gray-500 text-sm"
                    />
                  </div>
                </StaggerItem>

                {/* Mobile Inputs Row */}
                <StaggerItem direction="right">
                  <div className="flex h-10 border border-[#91724a]/30 focus-within:border-[#91724a] transition-colors">
                    <div className="relative flex items-center gap-2 px-3 border-r border-[#91724a]/30 bg-black/20">
                      <select
                        value={primaryCountry.code}
                        onChange={(e) => {
                          const country = countries.find(
                            (c) => c.code === e.target.value,
                          );
                          if (country) setPrimaryCountry(country);
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name} {country.dial}
                          </option>
                        ))}
                      </select>
                      <ReactCountryFlag
                        countryCode={primaryCountry.code}
                        svg
                        style={{
                          width: "1.25rem",
                          height: "1.25rem",
                          borderRadius: "2px",
                        }}
                        title={primaryCountry.name}
                      />
                      <span className="text-white text-xs">
                        {primaryCountry.dial}
                      </span>
                      <ChevronDown className="w-3 h-3 text-[#91724a]" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className="w-full h-full bg-transparent text-white px-4 focus:outline-none placeholder:text-gray-500 text-sm"
                    />
                  </div>
                </StaggerItem>

                {/* Interested In & Email Row */}
                <StaggerItem direction="right">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative h-10 border border-[#91724a]/30 focus-within:border-[#91724a] transition-colors">
                      <select className="w-full h-full bg-transparent text-gray-500 px-4 focus:outline-none appearance-none cursor-pointer text-sm">
                        <option value="">Interested In</option>
                        <option value="tycoon-center">Tycoon Center</option>
                        <option value="nile-business-city">
                          Nile Business City
                        </option>
                        <option value="nile-boulevard">Nile Boulevard</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#91724a] pointer-events-none" />
                    </div>
                    <div className="h-10">
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full h-full bg-transparent border border-[#91724a]/30 text-white px-4 focus:outline-none focus:border-[#91724a] transition-colors placeholder:text-gray-500 text-sm"
                      />
                    </div>
                  </div>
                </StaggerItem>

                {/* Submit Button */}
                <StaggerItem direction="scale">
                  <div className="pt-2 flex justify-center lg:justify-start">
                    <button
                      type="submit"
                      className="bg-[#91724a] text-white rounded-full flex items-center transition-all hover:bg-[#7d613e] group cursor-pointer overflow-hidden h-10"
                    >
                      <div className="px-4 h-full flex items-center border-r border-white/20">
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                      <span className="px-8 uppercase text-[13px] font-bold tracking-[0.2em]">
                        Submit
                      </span>
                    </button>
                  </div>
                </StaggerItem>
              </form>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
