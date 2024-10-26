import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Scroll function for smooth scrolling
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const HorizontalLine = () => (
  <div className="border-t border-maroon-600 my-8 h-1" />
);

const Navbar = () => (
  <nav className="bg-gradient-to-r from-maroon-600 to-gray-800 shadow-md fixed w-full z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-2xl text-white font-bold">
        DUDU-BUBU Marriage Bureau
      </div>
      <div className="flex space-x-6">
        {["home", "about-us", "partners", "flow", "testimonials", "contact-us"].map((label) => (
          <button
            key={label}
            onClick={() => scrollToSection(label)}
            className="text-white hover:text-pink-400 transition duration-300"
          >
            {label.replace("-", " ").toUpperCase()}
          </button>
        ))}
      </div>
      <a href="/register" className="bg-maroon-600 font-bold text-white px-4 py-2 rounded-full hover:bg-pink-500 transition duration-300">
        Register
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <div className="relative h-[600px] bg-pink-200" id="home">
    <div className="absolute inset-0 bg-gradient from-maroon-200 to-white"></div>
    <div className="absolute inset-0 bg-opacity-50 flex items-center">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold text-black mb-4">Find Your Life Partner</h1>
        <p className="text-lg text-black mb-6">Join us to find your perfect match, because love knows no boundaries!</p>
        <p className="text-lg text-black mb-6">
          At DUDU-BUBU Marriage Bureau, we believe that every individual deserves to find a companion who complements their life.
          Our extensive database of verified profiles makes it easier for you to explore potential matches based on your preferences.
        </p>
        <p className="text-lg text-black mb-6">
          With our user-friendly platform, you can navigate through profiles effortlessly and discover connections that could lead to a beautiful journey of love.
        </p>
        <a href="/register" className="bg-maroon-600 font-bold text-white px-6 py-3 rounded-full hover:bg-pink-500 transition duration-300">
          Get Started
        </a>
      </div>
    </div>
  </div>
);

const Welcome = () => (
  <div className="container mx-auto px-6 py-12 bg-pink-200" id="welcome">
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src="https://via.placeholder.com/500" alt="Welcome" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">Welcome To <span className="text-maroon-600">WP Matrimony.</span></h2>
        <p className="mb-4">We connect individuals seeking life partners, ensuring they find their perfect match among millions of verified profiles.</p>
        <p className="mb-4">Our platform offers a variety of features, including advanced search options, matchmaking algorithms, and personalized recommendations tailored to your preferences.</p>
        <ul className="space-y-2">
          {[
            "Trustworthy and verified profiles",
            "User-friendly design",
            "Dedicated support to assist you",
            "Advanced matching algorithms",
            "In-depth profiles and preferences"
          ].map((item, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-maroon-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const AboutUs = () => (
  <div className="container mx-auto px-6 py-16 bg-pink-200" id="about-us">
    <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
    <div className="max-w-3xl mx-auto">
      <p className="mb-4">WP Matrimony is a premier online matrimonial service dedicated to connecting singles with their perfect life partners. With years of experience in the industry, we have successfully matched thousands of couples, creating countless happy marriages.</p>
      <p className="mb-4">Our mission is to provide a safe, reliable, and user-friendly platform for people to connect, interact, and find their ideal match. We understand the significance of marriage and strive to make your journey of finding a life partner as smooth and enjoyable as possible.</p>
      <p className="mb-4">At WP Matrimony, we value trust, privacy, and authenticity. Our dedicated team works tirelessly to ensure that all profiles are genuine and verified, employing advanced technology and manual screening processes to maintain the quality and integrity of our user base.</p>
      <p className="mb-4">We offer a variety of features that allow you to filter and search for potential matches based on your unique preferences, ensuring a personalized experience. Join us today and take the first step towards finding your life partner!</p>
    </div>
  </div>
);

const Partners = () => (
  <div className="py-16 bg-pink-200" id="partners">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Start Looking For Your Partner</h2>
      <p className="text-center mb-8">Begin your journey of love and companionship with WP Matrimony.</p>
      <p className="text-center mb-4">
        Explore our vast database of profiles and connect with potential matches that suit your preferences.
        Let love guide you to a fulfilling relationship! We are here to assist you at every step.
      </p>
      <p className="text-center mb-4">
        Our dedicated customer service team is always ready to help you with your queries, ensuring a seamless experience.
        Don't wait any longer; your perfect partner awaits you!
      </p>
    </div>
  </div>
);

// New Flow Component
const Flow = () => {
  const steps = ["Register", "Get Details", "Find Partners", "Connect"];
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      console.log('Component is in view');
    }
  }, [isInView]);

  return (
    <div className="py-16 bg-pink-200" id="flow">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <div className="relative flex justify-center items-center" ref={ref}>
          <div className="relative w-full flex justify-around items-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileInView={{ scale: 1.1, rotate: 0, y: 20 }}
                whileHover={{ scale: 1.2 }}
                className="bg-pink-400 shadow-xl rounded-full p-6 w-32 text-center relative"
                style={{
                  transform: `rotate(${(index * 360) / steps.length}deg) translateY(-50%)`,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <h3 className="text-lg font-bold mb-2">{step}</h3>
              </motion.div>
            ))}
          </div>

          {/* Connecting lines */}
          <svg className="absolute inset-0" width="100%" height="100%">
            {steps.map((_, index) => (
              index < steps.length - 1 && (
                <motion.line
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  x1="50%"
                  y1="50%"
                  x2="calc(50% + 30px)"
                  y2="50%"
                  stroke="#8B0000"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform={`rotate(${(index * 360) / steps.length + 90}deg)`}
                />
              )
            ))}
            {/* Connect the last step to the first */}
            <motion.line
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: steps.length * 0.2 }}
              x1="50%"
              y1="50%"
              x2="calc(50% + 30px)"
              y2="50%"
              stroke="#8B0000"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`rotate(${(steps.length - 1) * 360 / steps.length + 90}deg)`}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => (
  <div className="py-16 bg-pink-200" id="testimonials">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="flex flex-wrap justify-center">
        {[
          {
            quote: "I found my perfect match through WP Matrimony!",
            name: "John Doe"
          },
          {
            quote: "Great experience and support!",
            name: "Jane Smith"
          },
          {
            quote: "I never thought it could be this easy to find love!",
            name: "Alice Johnson"
          }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 m-4 max-w-sm">
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            <p className="mt-4 font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="py-16 bg-pink-200" id="contact-us">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-lg mx-auto">
        <p className="mb-4">Have any questions? We'd love to hear from you!</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input type="text" className="border border-gray-300 rounded-md w-full p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="border border-gray-300 rounded-md w-full p-2" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea className="border border-gray-300 rounded-md w-full p-2" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-maroon-600 text-white font-bold px-4 py-2 rounded-md hover:bg-pink-500 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-maroon-600 to-gray-800 font-semibold text-white py-4">
    <div className="container mx-auto text-center">
      <p>© 2024 WP Matrimony. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => (
  <div className="bg-pink-200 min-h-screen">
    <Navbar />
    <Hero />
    <HorizontalLine />
    <Welcome />
    <HorizontalLine />
    <AboutUs />
    <HorizontalLine />
    <Partners />
    <HorizontalLine />
    <Flow />
    <HorizontalLine />
    <Testimonials />
    <HorizontalLine />
    <Contact />
    <Footer />
  </div>
);

export default App;
