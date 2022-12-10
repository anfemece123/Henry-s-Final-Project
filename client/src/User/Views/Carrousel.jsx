import React, { useRef } from "react";

const Carrusel = () => {
  const slider = useRef();
  const images = [...Array(25).keys()];

  return (
    <div className="mx-24">
      <div className="flex items-center justify-center w-full h-full ">
        <button
          className="bg-gray-500 mx-2"
          onClick={() => (slider.current.scrollLeft -= 200)}
        >
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fillRule="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div
          ref={slider}
          class="snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start"
        >
          {images.map((e, i) => (
            <div key={i} className="snap-start flex flex-shrink-0 w-auto mx-4">
              <img
                src={`https://picsum.photos/id/${i}/300/300`}
                alt={`images${i}`}
                className="object-cover object-center w-full"
              />
            </div>
          ))}
        </div>
        <button
          className="bg-gray-500 mx-2"
          onClick={() => (slider.current.scrollLeft += 200)}
        >
          <svg
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fillRule="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Carrusel;
