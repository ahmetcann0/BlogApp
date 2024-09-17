import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
  
    >
      <div
        className="absolute inset-0"
       
      ></div> {/* Purple overlay with black for better text readability */}

      <div className="relative container mx-auto px-4 py-16 text-black flex flex-col items-center justify-start min-h-screen">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">OUR STORY</h1>
          <p className="text-xl mb-8">
            SHARING STORIES, SPARKING IDEAS
          </p>
        </header>

        <main className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">READ WRITE CONNECT</h2>
          <p className="text-xl mb-8">
            DISCOVER A PLACE FOR YOUR VOICE.
          </p>
          <a
            href="#get-started"
            className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            GET STARTED
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;