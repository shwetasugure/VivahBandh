import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation,} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUserPlus, FaInfoCircle, FaUserFriends, FaHandshake, } from 'react-icons/fa';
import image3 from './images/image3-transformed.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


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
  <div className="relative flex items-center min-h-screen bg-pink-200 pt-[64px] md:pt-[64px]" id="home">
    {/* Image Background */}
    <div className="absolute inset-0 overflow-hidden">
      <img
        src={image3}
        alt="Indian Wedding Ceremony"
        className="w-full h-full object-cover" // Ensures the image covers the entire area
      />
      <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-transparent opacity-70"></div>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="#FEE2E2" // Matching the pink background color
        >
          <path d="M0,0 C600,80 600,80 1200,0 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>

    {/* Text Content */}
    <div className="relative z-10 max-w-lg text-white mx-auto text-center px-4 md:ml-[150px]">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">Find Your</h3>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Life Partner</h1>
      <p className="text-base md:text-lg mb-6">
        Join us to find your perfect match, because love knows no boundaries!
      </p>
      <p className="text-base md:text-lg mb-6">
        At VivahBandh, we believe that every individual deserves to find a companion who complements their life.
      </p>
      <a
        href="/register"
        className="bg-maroon-600 font-bold text-white px-6 py-3 rounded-full hover:bg-pink-500 transition duration-300"
      >
        Get Started
      </a>
    </div>
  </div>
);

const Welcome = () => {
  const { ref: imageInViewRef, inView: imageInView } = useInView({ threshold: 0.3 });
  const { ref: textInViewRef, inView: textInView } = useInView({ threshold: 0.3 });

  return (
    <div className="container mx-auto px-6 py-12 bg-pink-200" id="welcome">
      <div className="flex flex-wrap items-center">
        {/* Image Sliding from Top */}
        <motion.div
          ref={imageInViewRef}
          initial={{ opacity: 0, y: -50 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex flex-col items-center my-2 justify-center z-0"
        >
          <img
            src="https://i.pinimg.com/736x/4c/00/36/4c00363e9a49f10eeaa584ddaf45da11.jpg"
            alt="Happy Couple"
            className="w-full max-w-[600px] h-[500px] rounded-3xl object-cover mb-6" // Ensure responsiveness
          />
        </motion.div>

        {/* Text Sliding from Bottom */}
        <motion.div
          ref={textInViewRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 md:pl-8"
        >
          <h2 className="text-4xl font-bold mb-4">
            Welcome To <span className="text-maroon-600">VivahBandh.</span>
          </h2>
          <p className="mb-4">
            We connect individuals seeking life partners, ensuring they find their perfect match among millions of verified profiles.
          </p>
          <p className="mb-4">
            Our platform offers a variety of features, including advanced search options, matchmaking algorithms, and personalized recommendations tailored to your preferences.
          </p>
          <ul className="space-y-2">
            {[
              'Trustworthy and verified profiles',
              'User-friendly design',
              'Dedicated support to assist you',
              'In-depth profiles and preferences',
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 text-maroon-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};


const AboutUs = () => {
  const { ref: imageInViewRef, inView: imageInView } = useInView({ threshold: 0.3 });
  const { ref: textInViewRef, inView: textInView } = useInView({ threshold: 0.3 });

  return (
    <div className="container mx-auto px-6 py-12 bg-pink-200" id="about-us">
      <div className="flex flex-wrap items-center">
        
        {/* Text Sliding from Bottom */}
        <motion.div
          ref={textInViewRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 md:pr-8 pl-9"
        >
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">About Us</h2>
          <p className="mb-4">
            Welcome to VivahBandh! We’re here to make your journey of finding the perfect partner a joyful and memorable experience. With years of expertise and thousands of happy couples matched, we’re dedicated to helping you connect with someone truly special.
          </p>
          <p className="mb-4">
            Our mission is simple: to provide a safe, easy, and trustworthy platform where singles can meet, connect, and start their happily-ever-after! With advanced tech and careful profile checks, we ensure that each connection is genuine, giving you peace of mind as you search for the one.
          </p>
          <p className="mb-4">
            VivahBandh is all about creating a personal, exciting experience. So why wait? Join us, and let’s bring a little more love and laughter into your life!
          </p>
        </motion.div>

        {/* Image Sliding from Top */}
        <motion.div
          ref={imageInViewRef}
          initial={{ opacity: 0, y: -50 }}
          animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex flex-col items-center my-2 justify-center z-0"
        >
          <img
            src="https://knotsbyamp.com/wp-content/blogs.dir/1/files/jayanti-nidhish/PRA1322.JPG" // Replace with actual image path
            alt="About Us"
            className="w-full max-w-[600px] h-[500px] rounded-3xl object-cover mb-6" // Ensure responsiveness
          />
        </motion.div>
      </div>
    </div>
  );
};

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

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="py-16 bg-pink-200" id="flow">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
        <p className="text-lg text-center mb-8 text-gray-700">
          At VivahBandh, we simplify the matchmaking process for you. Follow these easy steps to connect with your ideal partner.
          Each step is designed to ensure a seamless experience while searching for meaningful relationships.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center" ref={ref}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`shadow-xl rounded-lg p-6 mx-4 my-4 flex flex-col items-center justify-center h-[300px] w-[250px] transition-transform duration-300 ${step.bgColor} hover:scale-105`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-2 flex items-center justify-center"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white text-center">{step.title}</h3>
              <p className="text-white text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Partners = () => (
  <div className="py-16 bg-pink-200" id="partners">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Start Looking For Your Partner</h2>
      <p className="text-center mb-8">
        Begin your journey of love and companionship with <strong>VivahBandh.</strong>
      </p>
      <p className="text-center mb-4">
        Explore our vast database of profiles and connect with potential matches that suit your preferences.
        Let love guide you to a fulfilling relationship! We are here to assist you at every step.
      </p>
      <p className="text-center mb-4">
        Our dedicated customer service team is always ready to help you with your queries, ensuring a seamless experience.
        Don't wait any longer; your perfect partner awaits you!
      </p>

      {/* Call-to-Action Section */}
      <div className="mt-12 text-center">
        <button className="bg-maroon-600 text-white px-6 py-3 rounded-lg shadow hover:bg-maroon-700 transition duration-200">
          Join Now
        </button>
      </div>

      {/* Testimonials Section */}
      <h3 className="text-3xl font-bold text-center mt-16 mb-8">What Our Users Say</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Aisha",
            feedback: "VivahBandh helped me find my soulmate! The profiles are genuine and the support team is fantastic.",
            image: "https://i.pinimg.com/736x/9d/a6/9d/a6babe1acbcfbb62b4457d5c62f3e13e.jpg",
          },
          {
            name: "Rahul",
            feedback: "I had a great experience using VivahBandh. The matching algorithm is impressive!",
            image: "https://i.pinimg.com/736x/ae/3a/2b/ae3a2b3ef077ee1c7c3b3db10f8a707e.jpg",
          },
          {
            name: "Meera",
            feedback: "Thanks to VivahBandh, I met someone who truly understands me. Highly recommend!",
            image: "https://i.pinimg.com/736x/f1/12/98/f11298c3a03e57c2e2c88f245bf79f4d.jpg",
          },
          {
            name: "Karan",
            feedback: "The user-friendly interface made my search so much easier. I found my perfect match!",
            image: "https://i.pinimg.com/736x/64/aa/34/64aa348a43f9274521e21579d1f6b2f3.jpg",
          },
        ].map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4 mx-auto"
            />
            <p className="text-gray-700 italic mb-2">"{testimonial.feedback}"</p>
            <h4 className="font-semibold text-center">{testimonial.name}</h4>
          </div>
        ))}
      </div>

    </div>
  </div>
);

// New Flow Component



const Testimonials = () => {
  const testimonials = [
    { quote: "I found my perfect match through VivahBandh!", name: "John Doe" },
    { quote: "Great experience and support!", name: "Jane Smith" },
    { quote: "I never thought it could be this easy to find love!", name: "Alice Johnson" },
    { quote: "VivahBandh helped me connect with someone special!", name: "Mike Wilson" },
    { quote: "The process was seamless and enjoyable!", name: "Sarah Brown" },
    { quote: "Highly recommend to anyone looking for love!", name: "David Lee" }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start with the second testimonial

  // Create a ref for the testimonials container
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  // Effect to change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [testimonials.length]);

  // Calculate the three indices to display
  const leftIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (currentIndex + 1) % testimonials.length;

  return (
    <div className="py-16 bg-pink-200" id="testimonials" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Users Say</h2>
        <p className="text-lg text-center mb-8 text-gray-600">
          Discover how VivahBandh has transformed the lives of our users. Here are some of their stories!
        </p>

        <div className="flex justify-center items-center mb-6">
          {/* Left Testimonial */}
          <motion.div
            key={leftIndex}
            initial={{ opacity: 0.5, x: -50 }}
            animate={inView ? { opacity: 0.5, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-pink-300 shadow-md rounded-lg p-6 m-4 flex-grow"
          >
            <p className="text-gray-600 italic">"{testimonials[leftIndex].quote}"</p>
            <p className="mt-4 font-bold">~ {testimonials[leftIndex].name}</p>
          </motion.div>

          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 1, scale: 1 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-pink-400 shadow-md rounded-lg p-6 m-4 flex-grow"
          >
            <p className="text-black font-semibold italic">"{testimonials[currentIndex].quote}"</p>
            <p className="mt-4 text-white font-bold">~ {testimonials[currentIndex].name}</p>
          </motion.div>

          {/* Right Testimonial */}
          <motion.div
            key={rightIndex}
            initial={{ opacity: 0.5, x: 50 }}
            animate={inView ? { opacity: 0.5, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-pink-300 shadow-md rounded-lg p-6 m-4 flex-grow"
          >
            <p className="text-gray-600 italic">"{testimonials[rightIndex].quote}"</p>
            <p className="mt-4 font-bold">~ {testimonials[rightIndex].name}</p>
          </motion.div>
        </div>

        <p className="text-center text-gray-600 max-w-xl mx-auto">
          Join the community today and start your journey towards finding love with VivahBandh. Your story could be next!
        </p>
      </div>
    </div>
  );
};
const Contact = () => {
  const { ref: formInViewRef, inView: formInView } = useInView({ threshold: 0.3 });
  const { ref: imageInViewRef, inView: imageInView } = useInView({ threshold: 0.3 });

  return (
    <div className="py-16 bg-pink-200" id="contact-us">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Form Sliding from Left to Right */}
        <motion.div
          ref={formInViewRef}
          initial={{ opacity: 0, x: -50 }}
          animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 max-w-lg mx-auto mb-8 md:mb-0"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
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
        </motion.div>

        {/* Image Sliding from Right to Left */}
        <motion.div
          ref={imageInViewRef}
          initial={{ opacity: 0, x: 50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="https://cdn0.weddingwire.in/article/5050/3_2/960/jpg/40505-marathibride-rohitnagwekar-lead.jpeg" // Replace with your image path
            alt="Contact Us"
            className="w-full max-w-xl h-auto object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="relative bg-pink-500 text-white pt-24 pb-10 overflow-hidden">
    {/* Curved Background Shape */}
    <div className="absolute inset-0">
      <div className="absolute -top-24 left-0 w-1/2 h-64 bg-pink-500 rounded-full"></div>
      <div className="absolute -top-24 right-0 w-1/2 h-64 bg-pink-500 rounded-full transform rotate-180"></div>
    </div>

    {/* Inverted Wave Shape at Top */}
    <div className="absolute top-0 w-full overflow-hidden leading-[0]">
      <svg
        className="relative block w-full h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="#FEE2E2"
      >
        <path d="M0,120 C600,40 600,40 1200,120 L1200,0 L0,0 Z"></path>
      </svg>
    </div>

    <div className="relative container mx-auto px-4 md:flex md:justify-between md:text-left text-center space-y-8 md:space-y-0">
      {/* VivahBandh Section */}
      <div className="md:w-1/4">
        <h2 className="text-3xl font-bold mb-3">VivahBandh</h2>
        <p className="text-sm mb-4 max-w-xs">
          VivahBandh helps you find your perfect soulmate. Join today and start searching for your partner right away.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <a href="#" className="text-white text-2xl hover:text-black"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-white text-2xl hover:text-black"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-white text-2xl hover:text-black"><i className="fab fa-youtube"></i></a>
          {/* <a href="#" className="text-white text-2xl hover:text-gray-200"><i className="fab fa-rss"></i></a> */}
        </div>
      </div>

      {/* Quick Links */}
      <div className="md:w-1/4">
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="text-sm space-y-2">
          <li><a href="#" className="hover:underline">Testimonials</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Details */}
      <div className="md:w-1/4">
        <h3 className="text-lg font-semibold mb-3">Contact Details</h3>
        <ul className="text-sm space-y-2">
          <li><i className="fas fa-map-marker-alt mr-2"></i> Solapur, Maharashtra</li>
          <li><i className="fas fa-envelope mr-2"></i> id_here@gmail.com</li>
          <li><i className="fas fa-phone-alt mr-2"></i>+910000000000</li>
        </ul>
      </div>

      {/* Subscribe To Newsletter */}
      <div className="md:w-1/4">
        <h3 className="text-lg font-semibold mb-3">Subscribe To Newsletter</h3>
        <p className="text-sm mb-4 max-w-xs">
          Be the first one to know about our new features, updates, and many more.
        </p>
        <div className="flex">
          <input type="email" placeholder="Email Address" className="p-2 w-full rounded-l-md text-gray-800" />
          <button className="bg-white text-pink-600 px-4 rounded-r-md">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-12 border-t border-pink-400 pt-6 text-center text-sm">
      <p>Copyright © 2024 VivahBandh. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">FAQ</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
      </div>
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
    <Welcome />
    <HorizontalLine />
    <AboutUs />
    <Flow />
    <HorizontalLine />
    <Partners />
    <HorizontalLine />
    <Testimonials />
    <HorizontalLine />
    <Contact />
    <Footer />
  </motion.div>
);

export default App;
