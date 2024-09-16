// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-4">Discover Your Voice with BlogApp</h1>
      <p className="text-lg mb-4">
        At BlogApp, we believe that every story deserves to be heard. Our platform is a sanctuary for your thoughts, ideas, and experiences. Whether you’re a seasoned writer or just starting out, BlogApp offers a space where your words can resonate with a global audience.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Why BlogApp?</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Simple and Beautiful:</strong> Our user-friendly interface is designed to let your content shine. With an emphasis on readability and aesthetics, BlogApp ensures that your words are the focal point.</li>
        <li><strong>Community-Driven:</strong> Engage with a community of like-minded individuals who value depth and quality. Whether you're sharing personal insights or professional expertise, you'll find a receptive audience.</li>
        <li><strong>Privacy and Integrity:</strong> We prioritize your privacy. Our commitment is to keep your data safe and to provide a platform free from intrusive ads. We’re supported by a network of dedicated members who share our vision of authentic content.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Join the Conversation</h2>
      <p className="text-lg">
        Dive into a world where ideas flow freely and stories come alive. Explore content that inspires and challenges you. Share your own narrative and contribute to a space where every voice matters.
      </p>
      <p className="text-lg mt-4">
        At BlogApp, we’re not just creating a platform—we’re building a community of thinkers, dreamers, and storytellers. Join us today and be part of a movement that values substance over sensationalism.
      </p>
    </div>
  );
};

export default About;
