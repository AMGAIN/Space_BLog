import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center justify-center text-center border-b border-gray-800">

        <div className="max-w-4xl">
          <p className="uppercase tracking-[6px] text-gray-400 mb-4 text-sm">
            Select Your Preferred Language
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Choose <span className="text-gray-300">Language</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed">
            Select the language you are most comfortable with for a better and
            smoother experience across the platform.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-8">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-gray-600 transition">
            <h2 className="text-3xl font-bold mb-4">
              Why Language Matters
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Choosing your preferred language helps improve accessibility,
              understanding, and overall user experience while navigating the
              platform.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-gray-600 transition">
            <h2 className="text-3xl font-bold mb-4">
              Personalized Experience
            </h2>

            <p className="text-gray-400 leading-relaxed">
              We aim to make communication easier and more comfortable by
              supporting multiple global languages for all users.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2rem] p-10 border border-gray-700 shadow-2xl">

            <div className="space-y-6">

              {/* Nepali */}
              <div className="bg-black/30 rounded-2xl p-6 border border-gray-800 hover:scale-[1.02] hover:border-gray-600 transition cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">🇳🇵 Nepali</h3>
                    <p className="text-gray-400 mt-2">
                      नेपाली भाषामा अनुभव लिनुहोस्।
                    </p>
                  </div>

                  <div className="text-gray-500 text-3xl">→</div>
                </div>
              </div>

              {/* Chinese */}
              <div className="bg-black/30 rounded-2xl p-6 border border-gray-800 hover:scale-[1.02] hover:border-gray-600 transition cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">🇨🇳 Chinese</h3>
                    <p className="text-gray-400 mt-2">
                      使用中文获得更好的体验。
                    </p>
                  </div>

                  <div className="text-gray-500 text-3xl">→</div>
                </div>
              </div>

              {/* Spanish */}
              <div className="bg-black/30 rounded-2xl p-6 border border-gray-800 hover:scale-[1.02] hover:border-gray-600 transition cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">🇪🇸 Spanish</h3>
                    <p className="text-gray-400 mt-2">
                      Disfruta de la experiencia en español.
                    </p>
                  </div>

                  <div className="text-gray-500 text-3xl">→</div>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-4 bg-white text-black font-semibold py-4 rounded-2xl hover:bg-gray-300 transition shadow-lg text-lg">
                Confirm Language
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Supported Languages
          </h2>

          <p className="text-gray-400 mt-4">
            More languages will be added soon for global accessibility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">🌍</div>

            <h3 className="text-2xl font-semibold mb-3">
              Global Reach
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Designed for users from different countries and cultures.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">⚡</div>

            <h3 className="text-2xl font-semibold mb-3">
              Easy Navigation
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Simple and modern UI for seamless language selection.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-5xl mb-5">💬</div>

            <h3 className="text-2xl font-semibold mb-3">
              Better Communication
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Understand content more naturally in your preferred language.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default page;