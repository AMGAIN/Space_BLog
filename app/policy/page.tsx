import React from "react";
import {
  Shield,
  FileText,
  AlertTriangle,
  BadgeInfo,
  Copyright,
  MessageSquare,
} from "lucide-react";

const policies = [
  {
    icon: Shield,
    title: "Privacy Policy",
    description:
      "Explains how visitor data is collected, stored, and used, including cookies and analytics.",
  },
  {
    icon: FileText,
    title: "Terms & Conditions",
    description:
      "Defines the rules for using the website, intellectual property rights, and user responsibilities.",
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer",
    description:
      "Protects against liability regarding the accuracy of content, reviews, opinions, and informational content.",
  },
  {
    icon: BadgeInfo,
    title: "Sponsored Content",
    description:
      "Discloses affiliate links, sponsorships, and promotional partnerships with full transparency.",
  },
  {
    icon: Copyright,
    title: "Copyright Policy",
    description:
      "States ownership of content and explains how text, images, and resources may be used.",
  },
  {
    icon: MessageSquare,
    title: "Comment Policy",
    description:
      "Promotes respectful discussion and reserves the right to remove inappropriate comments.",
  },
];

const Policy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">

      {/* Hero Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center justify-center text-center border-b border-gray-800">
        <div className="max-w-4xl">

          <p className="uppercase tracking-[6px] text-gray-400 mb-4 text-sm">
            Legal Information
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Blog <span className="text-gray-300">Policies</span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl leading-relaxed">
            Transparency, privacy, and user protection are at the core of our
            platform. Please review the policies below to understand your rights
            and responsibilities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-8">

          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <div
                key={index}
                className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 shadow-2xl hover:border-gray-600 hover:-translate-y-1 transition duration-300"
              >
                <div className="flex items-start gap-5">

                  <div className="bg-black/40 p-4 rounded-2xl border border-gray-800">
                    <Icon size={30} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-3">
                      {policy.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* Why Policies Matter */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why These Policies Matter
          </h2>

          <p className="text-gray-400 mt-4">
            These policies help create a transparent, secure, and professional
            experience for all visitors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-4xl mb-5">
              <Shield />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              User Protection
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Safeguards user information and ensures fair platform usage.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-4xl mb-5">
              <FileText />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Transparency
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Clearly explains how content, data, and partnerships are managed.
            </p>
          </div>

          <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl">
            <div className="text-4xl mb-5">
              <MessageSquare />
            </div>

            <h3 className="text-2xl font-semibold mb-3">
              Community Standards
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Encourages respectful interaction and constructive discussions.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
};

export default Policy;