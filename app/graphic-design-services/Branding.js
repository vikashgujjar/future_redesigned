import React from "react";

import devops from "../Assets/graphic-design.webp";
import brand from "../Assets/branding-.webp";
import service1 from "../Assets/logo-design.webp";
import service2 from "../Assets/packaging-design.webp";
import service3 from "../Assets/brochure-.webp";
import service4 from "../Assets/flyer-.webp";
import Image from "next/image";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

import ChooseFuture from "../components/ChooseFuture";
import Counter from "../components/Counter";
import GetNewInsight from "../components/GetNewInsight";
import OverviewSection from "../components/OverviewSection";

const Branding = () => {
  return (
    <>
      <div className="h-24 max-sm:h-[57px] max-md:h-20 max-lg:h-24 bg-white"></div>
      <div className=" relative overflow-hidden bg-[#442a79] xl:min-h-96 max-lg:h-auto">
        <div className="flex items-center max-sm:block max-lg:block  px-5 md:px-12 xl:px-28   max-sm:py-7 gap-10  pt-12 max-pt-1   max-xl:py-5">
          <div className="  ">
            <h1 className="text-white font-bold text-4xl  max-lg:text-2xl">
              Graphic Design Services
            </h1>

            <div className="text-[#dcd7f8]  mt-3 text-lg text-justify ">
              <p>
                Simplicity, creativity, a dash of humor and good typography are
                essential elements of graphic designs at
                <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-hue">
                  Future IT Touch Pvt. Ltd.
                </span>
                . Effective Design plays a vital role in distinguishing your
                business from the rest to give you, The Design Edge. With right
                aesthetics prompting visual perception, your business is bound
                to be valued more. It is our passion to infuse fun and colors
                into our designs that ensures every single design is packed with
                a message. As a leading Graphic Designing Company in Chandigarh,
                our team is always more than ready to jump with brilliant ideas
                and thoughts to convey a story through design.
              </p>
            </div>
            <div className="flex gap-3 mt-5">
              <Link
                href="/contact"
                className="flex items-center bg-[#dc3545] justify-center bg-red text-white py-2 px-4 sm:px-8 font-heading transition duration-400 ease-in-out rounded-md text-base font-base focus:outline-none hover:bg-gray-300 hover:bg-gradient-to-r from-teal-400 to-indigo-700"
              >
                Quick Enquiry
              </Link>
              <Link href="tel:+917056937000" legacyBehavior>
                <a className="flex items-center bg-dark-200 justify-center border text-white py-2 px-2  sm:px-8 font-heading ">
                  Call us - 7056937000
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Counter />

      <OverviewSection
        image={devops}
        imageAlt="Graphic Design Services"
        badgeText="Custom Graphic Design Services"
        heading="Custom Graphic Design"
        headingHighlight="Services We Offer"
        paragraphs={[
          "Are you looking for the best graphic design company in Chandigarh? Future IT Touch Pvt. Ltd. is one of the leading graphic design agencies that gives your business a distinct expression and shows it to the world on a branded platter of your own.",
          "We have been ranked amongst the top graphic design companies in Chandigarh. We invest creativity, innovative minds, and technology at the helm of our graphic designers, aimed towards attaining clients’ graphic design outsourcing requisites.",
          "Our team of expert designers crafts visuals that communicate your brand message effectively — from brochures and logos to social media assets and marketing collateral, all tailored to your business needs.",
        ]}
        ctaText="Request A Quote"
        ctaHref="/contact"
      />

      <div className="grid grid-cols-7 max-lg:block  gap-20  px-5 md:px-12 xl:px-28 pb-14">
        <div className="col-span-4">
          <h4 className="text-2xl sm:text-3xl lg:text-4xl  text-center lg:text-start font-bold mb-3 text-[#050748]">
            We use advanced graphic designing tools to create impressive ideas
            for you
          </h4>

          <div className="Website text-[17px] text-justify text-[#6a6a8e] mt-5 ">
            <p>
              Vibrant, high-resolution pictures, engaging videos and explanatory
              graphics can assist potential customers to better understand your
              products and services, and aid them see—accurately—the advantages
              they offer. We never compromise on the quality of our graphic
              design services. That makes our services finest as the best
              graphic design company in Chandigarh of all time
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 pt-10">
              <ul className="font-semibold list-none">
                <li># 800+ Mobile Delivered</li>
                <li># 200+ Team Strength</li>
                <li># User-Friendly Interface</li>
              </ul>
              <ul className="font-semibold list-none">
                <li># 400 Happy Clients</li>
                <li># 95% Repeat business</li>
                <li># Quality Service UX</li>
              </ul>
            </div>
          </div>

          <Link href="/contact" className="inline-block">
            <button className="bg-gradient-to-r from-[#f92c8b] to-[#b02cd6]   flex justify-center items-center mt-7 text-white px-6 py-4 text-base font-semibold  rounded-full">
              Request A Quote <FaAngleRight className="ml-2" />
              <span className="circle dkpr"></span>
            </button>
          </Link>
        </div>

        <div className="mt-10 lg:mt-0 flex justify-center lg:col-span-3 max-sm:mt-10">
          <Image src={brand} width={400} height={400} alt="Branding" className="w-full h-auto" />
        </div>
      </div>

      <section className="service-section py-16 px-4 sm:px-6 lg:px-16 xl:px-28">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="mb-2 text-base sm:text-lg text-[#ff1f8e]">Service</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#050748] uppercase">
            Graphic Design Services We Offer
          </h2>
          <p className="text-sm sm:text-base mt-4 mb-8 text-[#6a6a8e]">
            We think big and have hands in all leading technology platforms to
            provide you a wide array of services.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Service Card 1 */}
          <div className="flex flex-col lg:flex-row bg-[#e9ddff] rounded-xl shadow-lg p-6 gap-6">
            <div className="flex-shrink-0 w-full lg:w-1/3 mx-auto sm:mx-0">
              <Image
                src={service1}
                width={400}
                height={400}
                alt="Logo Design"
                className="w-full"
              />
            </div>
            <div className="text-[#6a6a8e] flex-1 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 text-[#050748]">
                Logo Designing
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                A logo is considered to be a brand’s silent ambassador. As an
                experienced Graphic Designing company in Chandigarh, our logos
                have created an enviable market appeal while delivering messages
                spontaneously.
              </p>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="flex flex-col lg:flex-row bg-[#ffdadb] rounded-xl shadow-lg p-6 gap-6">
            <div className="flex-shrink-0 w-full lg:w-1/3 mx-auto sm:mx-0">
              <Image
                src={service2}
                width={400}
                height={400}
                alt="Packaging Design"
                className="w-full"
              />
            </div>
            <div className="text-[#6a6a8e] flex-1 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 text-[#050748]">
                Business Stationery Design
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                The right design on corporate stationery creates a professional
                impression. Our expertise as a leading graphic design company in
                Chandigarh has elevated many brands with creative stationery
                designs.
              </p>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="flex flex-col lg:flex-row bg-[#d6edff] rounded-xl shadow-lg p-6 gap-6">
            <div className="flex-shrink-0 w-full lg:w-1/3 mx-auto sm:mx-0">
              <Image
                src={service3}
                width={400}
                height={400}
                alt="Brochure Design"
                className="w-full"
              />
            </div>
            <div className="text-[#6a6a8e] flex-1 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 text-[#050748]">
                Brochure Design
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Our compelling brochure designs capture attention, ensure
                visibility, and create excellent brand recall with clean
                layouts, great images, and innovative ideas.
              </p>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="flex flex-col lg:flex-row bg-[#ffede1] rounded-xl shadow-lg p-6 gap-6">
            <div className="flex-shrink-0 w-full lg:w-1/3 mx-auto sm:mx-0">
              <Image
                src={service4}
                width={400}
                height={400}
                alt="Flyer Design"
                className="w-full"
              />
            </div>
            <div className="text-[#6a6a8e] flex-1 text-center sm:text-left">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 text-[#050748]">
                Social Media Post
              </h4>
              <p className="text-sm sm:text-base leading-relaxed">
                Our visually-arresting social media posts boost engagement and
                brand recall. We design impactful, witty, and topical posts that
                stand out in crowded feeds.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-card mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Hire a <span className="font-bold">Dedicated Developer</span>
          </h3>
          <Link
            href="#"
            className="btn-outline flex items-center border-2 border-black text-black px-6 py-2 rounded-full bg-white shadow-md hover:bg-gradient-to-r from-teal-400 to-indigo-700 hover:text-white hover:border-current transition-all"
          >
            Hire Now <FaAngleRight className="ml-2" />
          </Link>
        </div>
      </section>

      <ChooseFuture />

      <GetNewInsight />
    </>
  );
};

export default Branding;
