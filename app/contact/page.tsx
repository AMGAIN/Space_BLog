import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center justify-center text-center border-b border-gray-800">

        <div className="max-w-4xl">
          <p className="uppercase tracking-[6px] text-gray-400 mb-4 text-sm">
            Contact Our Team
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Get In <span className="text-gray-300">Touch</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed">
            Have questions, suggestions, or feedback? We would love to hear
            from you. Stay connected with us anytime.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-8">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-gray-600 transition">
            <h2 className="text-3xl font-bold mb-4">
              Contact Information
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Reach out to us through phone or email for any inquiries,
              collaborations, or support regarding our platform and services.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-gray-600 transition">
            <h2 className="text-3xl font-bold mb-4">
              We Are Always Available
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our team is dedicated to helping users and responding to your
              messages as quickly as possible.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-10 border border-gray-700 shadow-2xl">

            <div className="space-y-6">

              {/* Phone */}
              <div className="bg-black/30 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition">
                <h3 className="text-2xl font-bold mb-2">
                  📞 Telephone
                </h3>

                <p className="text-gray-400 text-lg">
                  +977 9803238922
                </p>
              </div>

              {/* Email */}
              <div className="bg-black/30 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition">
                <h3 className="text-2xl font-bold mb-2">
                  ✉️ Email Address
                </h3>

                <p className="text-gray-400 text-lg">
                  myblog@hotmail.com
                </p>
              </div>

              {/* Query Box */}
              <div className="bg-black/30 rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition">

                <h3 className="text-2xl font-bold mb-4">
                  💬 Send Your Query
                </h3>

                <textarea
                  placeholder="Write your message here..."
                  className="w-full h-32 bg-gray-900/70 border border-gray-700 rounded-2xl p-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-500 transition resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button className="w-full bg-white text-black font-semibold py-4 rounded-2xl hover:bg-gray-300 transition duration-300 shadow-lg text-lg">
                Contact Us
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Contact Us
          </h2>

          <p className="text-gray-400 mt-4">
            We value communication and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">⚡</div>

            <h3 className="text-2xl font-semibold mb-3">
              Fast Response
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Our team tries to respond to all messages as quickly as possible.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">🤝</div>

            <h3 className="text-2xl font-semibold mb-3">
              Friendly Support
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We are always ready to help and guide our users properly.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">🌍</div>

            <h3 className="text-2xl font-semibold mb-3">
              Global Community
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Connect with a growing community from all around the world.
            </p>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-gray-800 py-16 px-6 text-center">

        <h2 className="text-4xl font-bold">
          Let’s Connect Together
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Reach out anytime for support, collaboration, or just to say hello.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-300 transition shadow-lg">
          Send Message
        </button>
      </section>
    </div>
  );
};

export default page;