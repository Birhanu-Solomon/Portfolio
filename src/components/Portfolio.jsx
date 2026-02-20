import React from "react";
import { motion } from "framer-motion";



const projects = [
  {
    id: 1,
    title: "Inventory management system",
    description: "A short description of the project. Tech: React, Node.js.",
    image: "./inventory.jpg",
    link: "https://github.com/betresh/Inventory_Managment_System_2024_25"
  },
  {
    id: 2,
    title: "Calculator",
    description: "A short description of the project. Data viz and ML.",
    image: "./calculator.jpg",
    link: "https://github.com/Birhanu-Solomon/Birhanu-Solomon-CalculatorJS123"
  },
  {
    id: 3,
    title: "Online Shopping",
    description: "A short description of the project. Mobile and API.",
    image: "./online.jpg",
    link: "https://birhanu-solomon.github.io/Online-shopping/"
  }
];

export default function PortfolioClone() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Birhanu Solomon<span className="text-indigo-600"></span></h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
        <div className="md:hidden">{/* mobile menu placeholder */}</div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Hi — I'm Birhanu,
              <br /> a flutter developer dedicated to designing and developing products that are both aesthetic and useful.
            </motion.h2>

            <p className="mt-6 text-gray-600 max-w-xl">
               I am a motivated software engineering student at Addis Ababa University 
               with hands-on experience in frontend development (React), Flutter app 
              development, computer networking, and database systems. 
            </p>
<div className="mt-8">
  <button
    onClick={() => window.location.href = "#projects"}
    className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors"
  >
    View projects
  </button>







              <a
                href="birhanukeranyo@gmail.com"
                className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg"
              >
                Email me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <span>Available for internships</span>
              <span className="h-2 w-2 bg-green-400 rounded-full block" />
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full flex justify-center"
          >
            <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="hero"
                src="Birhanu.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

      {/* ABOUT */}
<section id="about" className="py-12">
  <div className="bg-white p-6 rounded-2xl shadow-sm">
    <h3 className="text-2xl font-semibold">About me</h3>
    <p className="mt-4 text-gray-600">
    I’m an aspiring flutter developer
who enjoys building simple, useful projects.
I’m still learning and improving every day.
I love turning ideas into real, working products.
    </p>

    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-sm text-gray-500">Location</div>
        <div className="font-bold">Addis Ababa, Ethiopia</div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-500">Primary</div>
        <div className="font-bold">Flutter Development</div>
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-500">Open to</div>
        <div className="font-bold">Internships & Junior developmnet roles</div>
      </div>
    </div>
  </div>
</section>


        {/* PROJECTS */}
        <section id="projects" className="py-12">
          <h3 className="text-2xl font-semibold mb-6">Selected projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.id}
                href={p.link}
                className="block bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden"
                whileHover={{ translateY: -6 }}
              >
                <div className="h-44 w-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
<section id="contact" className="py-12 bg-gray-50">
  <div className="w-full p-6">
    <div className="bg-white p-6 rounded-2xl shadow-sm w-full">
      <h3 className="text-2xl font-semibold">Contact</h3>
      <p className="mt-2 text-gray-600">Looking for an intern? I'd be happy to connect—send me a  message.</p>

      <form
        action="birhanukeranyo@gmail.com"
        method="post"
        encType="text/plain"
        className="mt-4 grid grid-cols-1 gap-4"
      >
        <input
          name="name"
          placeholder="Your name"
          className="border border-gray-200 rounded-md p-3 w-full"
        />
        <input
          name="email"
          placeholder="Your email"
          className="border border-gray-200 rounded-md p-3 w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="border border-gray-200 rounded-md p-3 w-full"
        />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-purple rounded-lg w-full md:w-auto">
            Send
          </button>
          <div className="text-sm text-gray-500">Or email directly: birhanukeranyo@gmail.com</div>
        </div>
      </form>
    </div>
  </div>
</section>


        <footer className="py-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Birhanu — Built with React + Tailwind
        </footer>
      </main>
    </div>
  );
}


