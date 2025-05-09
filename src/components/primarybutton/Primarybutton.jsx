import React from "react";

function Primarybutton({ buttonText, buttonLink }) {
 
  return (
 <>
 <a href="{buttonLink}"><button
      className="cursor-pointer group relative 
    bg-[var(--surface-primary-color-surface)] hover:bg-[var(--surface-primary-color-surface-hovered)] 
    text-[var(--typo-color-text-inverse)]
    px-6 py-3 rounded-[8px] transition-all duration-200 ease-in-out w-[147px] h-[40]"
    >
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative inline-block overflow-hidden">
          <span
            className="Body-B-2-Bold block transition-transform duration-300 
          group-hover:-translate-y-full"
          >
           {buttonText}
          </span>

          <span className="Body-B-2-Bold absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
          {buttonText}
          </span>
        </span>
      </div>
    </button></a>
 </>
  );
};

export default Primarybutton;
