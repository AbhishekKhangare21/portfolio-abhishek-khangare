import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Abhishek Khangare, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              Recent bachelor's degree recipient with a background in web
              development and design. Over more than 10 months of learning
              experience in React JS. Top-notch coding skills, self-motivated,
              and proficient with development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
