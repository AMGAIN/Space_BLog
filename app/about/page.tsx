import React from "react";
import { Rocket, Book, Globe } from "lucide-react";
const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center justify-center text-center border-b border-gray-800">
        
        <div className="max-w-4xl">
          <p className="uppercase tracking-[6px] text-gray-400 mb-4 text-sm">
            Welcome To Our Blog
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            About <span className="text-gray-300">Us</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed">
            We share knowledge, ideas, tutorials, and insights about
            technology, development, creativity, and modern digital trends.
            Our mission is to help learners and creators grow every day.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-8">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-gray-600 transition">
            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-400 leading-relaxed">
              We are passionate bloggers and developers dedicated to creating
              high-quality content for readers around the world. From coding
              tutorials to productivity tips, we aim to make learning simple,
              practical, and enjoyable.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-gray-600 transition">
            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our goal is to build a community where knowledge is accessible to
              everyone. We believe learning should be modern, interactive, and
              inspiring for all skill levels.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-10 border border-gray-700 shadow-2xl">

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-black/30 rounded-2xl p-6 text-center border border-gray-800 hover:scale-105 transition">
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-gray-400 mt-2">Articles Published</p>
              </div>

              <div className="bg-black/30 rounded-2xl p-6 text-center border border-gray-800 hover:scale-105 transition">
                <h3 className="text-4xl font-bold">10K+</h3>
                <p className="text-gray-400 mt-2">Monthly Readers</p>
              </div>

              <div className="bg-black/30 rounded-2xl p-6 text-center border border-gray-800 hover:scale-105 transition">
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-gray-400 mt-2">Topics Covered</p>
              </div>

              <div className="bg-black/30 rounded-2xl p-6 text-center border border-gray-800 hover:scale-105 transition">
                <h3 className="text-4xl font-bold">24/7</h3>
                <p className="text-gray-400 mt-2">Community Support</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Team / Values Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Readers Love Us
          </h2>

          <p className="text-gray-400 mt-4">
            We focus on delivering valuable and modern content.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">
              <Rocket />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Modern Content
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We write about the latest technologies, frameworks, and digital
              trends.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">
              <Book />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Easy Learning
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Our tutorials are beginner-friendly and explained step by step.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">
              <Globe />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Global Community
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Readers from around the world join our platform to learn and grow
              together.
            </p>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-gray-800 py-16 px-6 text-center">

        <h2 className="text-4xl font-bold">
          Join Our Journey
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Stay connected with us for the latest blog posts, tutorials,
          technology updates, and inspiring content.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-300 transition shadow-lg">
          Explore Blogs
        </button>
      </section>
    </div>
  );
};

export default page;