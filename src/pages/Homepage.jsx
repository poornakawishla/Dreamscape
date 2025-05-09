import React from "react";
import heroImage from "../assets/heroimage.svg";
import AboutImage from "../assets/About.svg"; // Import the About.svg image
import Primarybutton from "../components/primarybutton/Primarybutton";
import HousePlanning from "../assets/House_Planning.svg";
import InteriorDesign1 from "../assets/Interior_Design-1.svg";
import InteriorDesign from "../assets/Interior_Design.svg";
import SpacePlanning from "../assets/Space_Planning.svg";
import featured from "../assets/featured.mp4";

function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container px-[5%] w-[90%] h-[90vh] min-h-[90vh] mx-auto mt-15 rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          overflow: "hidden",
        }}
      >
        <div className="flex justify-between items-center h-full w-[100%] pb-[64px] text-[var(--typo-color-text-inverse)]">
          <div className="text-left self-end w-[70%]">
            <h1 className="Headings-H-1 text-[var(--typo-color-text-inverse)] ">
              Build Your Dream Room <br /> with Dreamscape
            </h1>
          </div>
          <div className="text-right flex flex-col items-start gap-4 self-end pb-8">
            <p className="text-left Body-B-3 text-[var(--typo-color-text-subtlest)] max-w-xs">
              Unleash your imagination with custom designs that transform your
              space into a magical retreat, from enchanted forests to cosmic
              lofts
            </p>
            <Primarybutton buttonText="Get Started" buttonLink="/contact" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container px-[5%] flex gap-[32px]">
        <div>
          <img src={AboutImage} alt="About" className="w-full h-auto left-0" />
        </div>
        <div className="w-[50%]">
          <h1 className="Headings-H-2 text-[var(--typo-color-text)] mb-[12px]">
            Do you know{" "}
            <span className="text-[var(--typo-color-text-brand)]">
              About us
            </span>
          </h1>
          <p className="text-left Body-B-3 text-[var(--typo-color-text-subtle)] mb-[16px]">
            At Dreamscape, we blend artistry with innovation to create
            personalized living spaces that reflect your unique story. From
            vibrant interiors to serene retreats, our expert designers transform
            your ideas into reality, crafting environments that inspire and
            enchant every day."
          </p>
          <Primarybutton buttonText="Learn More" buttonLink="/about" />
        </div>
      </div>

      {/* Services Section */}
      <div className="container px-[5%] gap-[32px]">
        <h1 className="Headings-H-2 text-[var(--typo-color-text)] mb-[12px] text-center mb-[32px]">
          We are{" "}
          <span className="text-[var(--typo-color-text-brand)]">mastering</span>{" "}
          at
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[8px]">
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
      <div className="p-[5%] w-full h-auto overflow-hidden rounded-[16px]">
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
    </>
  );
}

export default Homepage;
