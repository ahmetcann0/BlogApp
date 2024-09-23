import React from 'react';
import homeImage from '../assets/blog_home_image.png';

const Home: React.FC = () => {
  return (
    <>
      <div className='flex'>

      <div className='flex-row'>
      <div className= 'text-base md:text-6xl lg:text-8xl'>
        Human
      </div>
      <div className= 'text-base md:text-6xl lg:text-8xl'>
      stories & ideas
      </div>
      <div>
      A place to read, write, and deepen your understanding
      </div>
      </div>
      
      <img src={homeImage} alt="Description of image" />

      </div>
    
      
    </>
  );
};

export default Home;
