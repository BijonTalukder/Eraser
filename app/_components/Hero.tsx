import React from "react";

function Hero() {
  return (
    <section className='bg-black'>
      <div className='flex pt-20 align-middle justify-center '>
        <h1 className='bg-[#253B4D] text-white border border-white inline px-2  py-2 rounded-full'>
          See what’s new <span>|</span>{" "}
          <span className='text-[#94DBFF]'>AI Diagrams</span>{" "}
        </h1>
      </div>
      <div className='mx-auto max-w-screen-xl px-4 lg:flex lg:h-screen pt-20'>
        <div className='mx-auto max-w-xl  text-center'>
          <h1 className='text-[50px] text-[#94DBFF] font-extrabold '>
            Documents & diagrams
            <strong className='font-extrabold text-white sm:block'>
              {" "}
              for engineering teams{" "}
            </strong>
          </h1>

          <p className='mt-4 sm:text-xl/relaxed text-white'>
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4'>
            <a
              className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
              href='#'
            >
              Get Started
            </a>

            <a
              className='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
              href='#'
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
