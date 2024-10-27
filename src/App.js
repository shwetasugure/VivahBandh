import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaUserPlus, FaInfoCircle, FaUserFriends, FaHandshake } from 'react-icons/fa';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-maroon-600 to-gray-800 shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl text-white font-bold">
            VivahBandh
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
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

          {/* Register Button */}
          <div className="hidden md:block">
            <a
              href="/register"
              className="bg-maroon-600 font-bold text-white px-4 py-2 rounded-full hover:bg-pink-500 transition duration-300 w-auto"
            >
              Register
            </a>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-maroon-600 to-gray-800 shadow-md bg-opacity-100 p-4 absolute top-full left-0 right-0 z-30">
            {["home", "about-us", "partners", "flow", "testimonials", "contact-us"].map((label) => (
              <button
                key={label}
                onClick={() => {
                  scrollToSection(label);
                  setIsOpen(false);
                }}
                className="block text-white hover:text-pink-400 transition duration-300 py-2 text-left w-full"
              >
                {label.replace("-", " ").toUpperCase()}
              </button>
            ))}

            {/* Mobile Register Button */}
            <a
              href="/register"
              className="block bg-maroon-600 font-bold text-white px-4 py-2 rounded-full hover:bg-pink-500 transition duration-300 text-center w-full mx-auto"
            >
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => (
  <div className="relative flex flex-col md:flex-row h-[600px] bg-pink-200 pt-[64px]" id="home">
    <div className="absolute inset-0 bg-gradient from-maroon-200 to-white"></div>
    <div className="flex-1 flex items-center justify-center z-10">
      <div className="container mx-auto px-6 flex flex-col items-start text-left">
        <h1 className="text-5xl font-bold text-black mb-4">Find Your Life Partner</h1>
        <p className="text-lg text-black mb-6">
          Join us to find your perfect match, because love knows no boundaries!
        </p>
        <p className="text-lg text-black mb-6">
          At VivahBandh, we believe that every individual deserves to find a companion who complements their life.
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
    {/* Image Block */}
    <div className="flex-1 flex my-2 justify-center items-center z-0">
      <img
        src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Indian Wedding Ceremony"
        className="w-[750px] h-[500px] object-cover rounded-md"
      />
    </div>
  </div>
);


const Welcome = () => (
  <div className="container mx-auto px-6 py-12 bg-pink-200" id="welcome">
    <div className="flex flex-wrap items-center">
      <div className="flex-1 flex my-2 justify-center items-center z-0">
        <div className="bg-gradient-to-r from-maroon-600 to-maroon-800 w-[600px] h-[500px] rounded-md"></div>
      </div>
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-4xl font-bold mb-4">Welcome To <span className="text-maroon-600">VivahBandh.</span></h2>
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
      <p className="mb-4">VivahBandh is a premier online matrimonial service dedicated to connecting singles with their perfect life partners. With years of experience in the industry, we have successfully matched thousands of couples, creating countless happy marriages.</p>
      <p className="mb-4">Our mission is to provide a safe, reliable, and user-friendly platform for people to connect, interact, and find their ideal match. We understand the significance of marriage and strive to make your journey of finding a life partner as smooth and enjoyable as possible.</p>
      <p className="mb-4">At VivahBandh, we value trust, privacy, and authenticity. Our dedicated team works tirelessly to ensure that all profiles are genuine and verified, employing advanced technology and manual screening processes to maintain the quality and integrity of our user base.</p>
      <p className="mb-4">We offer a variety of features that allow you to filter and search for potential matches based on your unique preferences, ensuring a personalized experience. Join us today and take the first step towards finding your life partner!</p>
    </div>
  </div>
);

const Partners = () => (
  <div className="py-16 bg-pink-200" id="partners">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Start Looking For Your Partner</h2>
      <p className="text-center mb-8">Begin your journey of love and companionship with  VivahBandh.</p>
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
  const steps = [
    {
      title: "Register",
      icon: <FaUserPlus className="text-white text-4xl" />,
      description: "Register to our website, fill up your profile completely, and put a beautiful image on your profile.",
      bgColor: "bg-maroon-500"
    },
    {
      title: "Get Details",
      icon: <FaInfoCircle className="text-white text-4xl" />,
      description: "Provide more information about yourself.",
      bgColor: "bg-maroon-600"
    },
    {
      title: "Find Partners",
      icon: <FaUserFriends className="text-white text-4xl" />,
      description: "Search for compatible matches.",
      bgColor: "bg-maroon-700"
    },
    {
      title: "Connect",
      icon: <FaHandshake className="text-white text-4xl" />,
      description: "Add friends, approach them, and chat with them.",
      bgColor: "bg-maroon-900"
    }
  ];

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
        <div className="flex flex-col md:flex-row justify-center items-start" ref={ref}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`shadow-xl rounded-lg p-6 mx-4 my-4 flex flex-col justify-center items-center h-[300px] w-[250px] transition-transform duration-300 ${step.bgColor} hover:scale-105`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-2"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-white text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // 10% of the section visible triggers animation
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

const Testimonials = () => (
  <div className="py-16 bg-pink-200" id="testimonials">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="flex flex-wrap justify-center">
        {[
          {
            quote: "I found my perfect match through VivahBandh!",
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
      <p>© 2024 VivahBandh. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => (
  <motion.div
    className="bg-pink-200 min-h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
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
  </motion.div>
);

export default App;
