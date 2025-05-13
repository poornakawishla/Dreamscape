import React from "react";
import heroImage from "../assets/heroimage.svg";
import bg from "../assets/BG.svg";
import AboutImage from "../assets/About.svg";
import Primarybutton from "../components/primarybutton/Primarybutton";
import Footer from "../components/footer/Footer";
import HousePlanning from "../assets/House_Planning.svg";
import InteriorDesign1 from "../assets/Interior_Design-1.svg";
import InteriorDesign from "../assets/Interior_Design.svg";
import SpacePlanning from "../assets/Space_Planning.svg";
import arrowright from "../assets/arrow-right.svg";
import featured from "../assets/featured.mp4";
import Recent_1 from "../assets/Recent_1.svg";
import Recent_2 from "../assets/Recent_2.svg";
import Recent_3 from "../assets/Recent_3.svg";

function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container px-[5%] w-[90%] md:h-[90vh] min-h-[90vh] mx-auto mt-15 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          overflow: "hidden",
        }}
      >
        <div className="flex flex-col md:m[88px] md:flex-row justify-between items-center h-full w-[100%] pb-[64px] text-[var(--typo-color-text-inverse)]">
          <div className="text-left self-end w-full md:w-[70%]">
            <h1 className="Headings-H-1 text-[var(--typo-color-text-inverse)]">
              Build Your Dream Room <br /> with Dreamscape
            </h1>
          </div>
          <div className="text-left md:text-right flex flex-col items-start md:items-end gap-4 self-end pb-8">
            <p className="Body-B-3 text-[var(--typo-color-text-subtlest)] max-w-xs">
              Unleash your imagination with custom designs that transform your space into a magical retreat, from enchanted forests to cosmic lofts
            </p>
            <Primarybutton buttonText="Get Started" buttonLink="/contact" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container px-[5%] flex flex-col md:flex-row gap-[32px]">
        <div className="w-full md:w-auto">
          <img src={AboutImage} alt="About" className="w-full h-auto" />
        </div>
        <div className="w-full md:w-[50%]">
          <h1 className="Headings-H-2 text-[var(--typo-color-text)] mb-[12px]">
            Do you know{" "}
            <span className="text-[var(--typo-color-text-brand)]">About us</span>
          </h1>
          <p className="Body-B-3 text-[var(--typo-color-text-subtle)] mb-[16px]">
            At Dreamscape, we blend artistry with innovation to create personalized living spaces that reflect your unique story...
          </p>
          <Primarybutton buttonText="Learn More" buttonLink="/about" />
        </div>
      </div>

      {/* Services Section */}
      <div className="px-[5%] container gap-[32px]">
        <h1 className="Headings-H-2 text-[var(--typo-color-text)] mb-[12px] text-center">
          We are{" "}
          <span className="text-[var(--typo-color-text-brand)]">mastering</span>{" "}
          at
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[8px]">
          {/* House Planning Card */}
          <div
            className="bg-cover bg-center rounded-lg h-[448px] flex items-end p-[12px]"
            style={{
              backgroundImage: `url(${HousePlanning})`,
            }}
          >
            <h1
              className="body-b-2 text-[var(--typo-color-text)] w-full h-[60px] relative flex items-center 
              bg-[var(--background-color-background)]/20 backdrop-blur-sm text-white p-[10px] rounded-md"
            >
              House Planning
            </h1>
          </div>

          {/* Space Planning Card */}
          <div
            className="bg-cover bg-center rounded-lg h-[448px] flex items-end p-[12px]"
            style={{
              backgroundImage: `url(${SpacePlanning})`,
            }}
          >
            <h1
              className="body-b-2 text-[var(--typo-color-text)] w-full h-[60px] relative flex items-center 
              bg-[var(--background-color-background)]/20 backdrop-blur-sm text-white p-[10px] rounded-md"
            >
              Space Planning
            </h1>
          </div>

          {/* Interior Design Card */}
          <div
            className="bg-cover bg-center rounded-lg h-[448px] flex items-end p-[12px]"
            style={{
              backgroundImage: `url(${InteriorDesign})`,
            }}
          >
            <h1
              className="body-b-2 text-[var(--typo-color-text)] w-full h-[60px] relative flex items-center 
              bg-[var(--background-color-background)]/20 backdrop-blur-sm text-white p-[10px] rounded-md"
            >
              Interior Design
            </h1>
          </div>

          {/* Furnisher Design Card */}
          <div
            className="bg-cover bg-center rounded-lg h-[448px] flex items-end p-[12px]"
            style={{
              backgroundImage: `url(${InteriorDesign1})`,
            }}
          >
            <h1
              className="body-b-2 text-[var(--typo-color-text)] w-full h-[60px] relative flex items-center 
              bg-[var(--background-color-background)]/20 backdrop-blur-sm text-white p-[10px] rounded-md"
            >
              Furnisher Design
            </h1>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="px-[5%] container  w-full h-auto overflow-hidden rounded-[16px]">
        <video
          className="w-full h-full object-none rounded-[8px]"
          style={{
            width: "100%",
            height: "600px",
          }}
          src={featured}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Recent */}
      <div className="flex flex-col lg:flex-row gap-[8px] mt-[32px]">
        <div className="px-[5%] container w-full lg:w-[44%] h-auto overflow-hidden">
          <h1 className="Headings-H-3 text-[var(--typo-color-text)]">
            Our{" "}
            <span className="text-[var(--typo-color-text-brand)]">Recent</span>{" "}
            Projects to Inspire You
          </h1>
          <p className="Body-B-2">
            Discover some of our favorite creations, where imagination meets craftsmanship...
          </p>
          <Primarybutton
            buttonText={<img className="py-3" src={arrowright} alt="arrow" />}
            buttonLink="/contact"
            className="rounded-full mt-[24px]"
          />
        </div>
        <div className="flex flex-wrap gap-[8px] w-full lg:w-[50%] h-auto overflow-hidden">
          <img
            src={Recent_1}
            alt="Featured"
            className="w-full sm:w-[48%] lg:w-auto overflow-hidden rounded-[16px]"
          />
          <img
            src={Recent_2}
            alt="Featured"
            className="w-full sm:w-[48%] lg:w-auto overflow-hidden rounded-[16px]"
          />
          <img
            src={Recent_3}
            alt="Featured"
            className="w-full sm:w-[48%] lg:w-auto overflow-hidden rounded-[16px]"
          />
        </div>
      </div>

      {/* CTA */}
      <div
        className="flex flex-col justify-center items-center gap-[8px] mt-[32px] container px-[5%] w-[90%] h-[90vh] min-h-[90vh] mx-auto rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          overflow: "hidden",
        }}
      >
        <div className="text-center w-full md:w-[70%] flex flex-col items-center justify-center">
          <h1 className="Headings-H-1 text-[var(--typo-color-text-inverse)]">
            Ready to Create Your Dream Space
          </h1>
          <p className="mt-4 text-[var(--typo-color-text-inverse)]">
            Let’s bring your vision to life with Dreamscape’s magic touch...
          </p>
          <Primarybutton
            buttonText="Get Started"
            buttonLink="/contact"
            className="mt-[24px]"
          />
        </div>
      </div>

      {/* Footer */}

      <Footer />
    </>
  );
}

export default Homepage;
