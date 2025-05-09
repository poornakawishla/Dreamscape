import React from "react";
import heroImage from "../assets/heroimage.svg";
import AboutImage from "../assets/About.svg"; // Import the About.svg image
import Primarybutton from "../components/primarybutton/Primarybutton";

function Homepage() {
  return (
 <>
    <div
      className="container w-[90%] h-[90vh] min-h-[90vh] mx-auto mt-15 rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
            space into a magical retreat, from enchanted forests to cosmic lofts
          </p>
          <Primarybutton buttonText="Get Started" buttonLink="/contact"/>
        </div>
      </div>
      
 
    </div>
    <div className="container">
      <div>
        <img src={AboutImage} alt="About" className="w-full h-auto" /> {/* Add the About.svg image */}
      </div>
    </div>
    <div>
      <h1>Welcome to Dreamscape</h1>
      <Primarybutton buttonText="Contact Us" buttonLink="/contact" />
      <Primarybutton buttonText="Learn More" buttonLink="/learn-more" />
    </div>
 </>
  );
}

export default Homepage;
