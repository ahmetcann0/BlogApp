import React from "react";
import homeImage from "../assets/blog_home_image.png";
import AppButton from "../components/app_button";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="ml-36">
          <div className="text-base md:text-6xl lg:text-8xl ">Human</div>
          <div className="text-base md:text-6xl lg:text-8xl">
            stories & ideas
          </div>
          <div className="mt-10 space-y-10">
            <div className="text-base md:text-l lg:text-xl">
              A place to read, write, and deepen your understanding
            </div>
            <AppButton text="Join Us" to="/signup" />
          </div>
        </div>

        <img
          src={homeImage}
          alt="Description of image"
          className="w-auto h-4/5 object-cover"
        />
      </div>
    </>
  );
};

export default Home;
