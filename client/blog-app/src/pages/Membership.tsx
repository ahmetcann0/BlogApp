import React from 'react';
import backgroundImage from '../assets/blog_dream.jpg'; // Adjust path as needed

const Membership: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgba(128, 0, 128, 0.1), rgba(128, 0, 128, 0.1)), rgba(0, 0, 0, 0.2)',
        }}
      ></div> {/* Purple overlay with black for better text readability */}

      <div className="relative container mx-auto px-4 py-16 text-white flex flex-col items-center justify-start min-h-screen">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">MEMBERSHIP</h1>
          <p className="text-xl mb-8">
            JOIN OUR COMMUNITY. SHARE YOUR PASSION.
          </p>
        </header>

        <main className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">BENEFITS OF MEMBERSHIP</h2>
          <p className="text-xl mb-8">
            ENJOY EXCLUSIVE CONTENT, CONNECT WITH LIKE-MINDED INDIVIDUALS, AND CONTRIBUTE TO A BLOGAPP COMMUNITY.
          </p>
          <a
            href="#join-now"
            className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            JOIN NOW
          </a>
        </main>
      </div>
    </div>
  );
};

export default Membership;
