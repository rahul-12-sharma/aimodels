import React from 'react';

function App() {
  const steps = [
    {
      day: "Day 1",
      items: [
        "create your first ai model",
        "generate ai photos",
        "generate ai videos",
      ],
    },
    {
      day: "Day 2",
      items: [
        "set up social media",
        "get views even without followers",
        "hack the algorithm",
      ],
    },
    {
      day: "Day 3",
      items: [
        "monetize your model",
        "build a sales funnel",
        "withdraw your earnings",
      ],
    },
    {
      day: "Day 4",
      items: [
        "learn customers psychology",
        "learn how to keep customers",
      ],
    },
    {
      day: "Day 5",
      items: [
        "learn how to scale",
        "learn how to automate",
      ],
    },
  ];

  const cardData = [
    {
      username: "fit_aitana",
      profileImg: "https://pc-tablet.com/wp-content/uploads/2024/02/AI-Influencer-100.webp",
      postImg: " https://tse2.mm.bing.net/th?id=OIP.iJCNETLspMF6cp-NmC6eewHaEK&pid=Api&P=0&h=180",
      caption: "Building my first AI character 🧠✨",
      likes: 120,
    },
    {
      username: "imma_gram",
      profileImg: " https://tse3.mm.bing.net/th?id=OIP.yewLI2kKbkI7vYyLcwFuxgHaDt&pid=Api&P=0&h=180",
      postImg: " https://tse1.mm.bing.net/th?id=OIP._Im3qNHRqKYSUB3nCUSVtgHaD8&pid=Api&P=0&h=180",
      caption: "AI girlfriend launching soon 👀💖",
      likes: 230,
    },
  ];


  return (
    <div className="min-h-screen bg-black text-white text-center px-4 md:px-0">
      <div className="flex flex-col items-center pt-12">
        {/* Title */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          AI Money Challenge
        </h1>
        <h3 className="p-4 mt-6 bg-zinc-900 rounded text-sm text-zinc-400 max-w-md">
          ⚠️ This is literally all you need to start making money with AI models within the next 5 days.
          <br />
          <span className="block mt-1">Step by step.</span>
        </h3>

        {/* Social Section */}
        <div className="mt-10 w-full max-w-md">
          <h3 className="text-base text-white mb-3">
            For more value & industry tricks, follow me on socials:
          </h3>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/aimodelmax/reels/?hl=en"
            className="bg-zinc-900 p-3 rounded flex justify-between items-center hover:bg-zinc-700 transition mb-5"
          >
            <div className="flex items-center gap-3">
              <svg
                className="text-pink-500 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </div>
            <span>➚</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rg4142451.systeme.io/"
            className="bg-zinc-900 p-3 px-10 rounded  hover:bg-zinc-700 transition "
          >
            Start Making 💸 $10,000 with Ai girl on Instagram
          </a>

          <h5 className="text-sm text-zinc-500 mt-4">[private community coming soon]</h5>
        </div>

        {/* Step-By-Step Plan */}
        <section className="w-full max-w-5xl mt-16 pb-16 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#F2F2F3]">
            Step-By-Step Plan
          </h2>

          {/* Desktop Timeline */}
          <div className="relative max-w-4xl mx-auto hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-700 -translate-x-1/2"></div>
            <div className="flex flex-col gap-8">
              {steps.map((step, index) => (
                <div className="relative flex items-start" key={index}>
                  {/* Circle Number */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-base font-semibold text-[#F2F2F3] shadow-md">
                      {index + 1}
                    </div>
                  </div>

                  {/* Connector line to content */}
                  {index % 2 === 0 ? (
                    <div className="w-1/2 pr-10 flex justify-end items-center">
                      <div className="text-right">
                        <div className="text-xl font-bold text-[#F2F2F3] mb-1">
                          {step.day}
                        </div>
                        {step.items.map((item, i) => (
                          <div key={i} className="text-sm text-[#BDBAB9] leading-tight">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="w-1/2" />
                  )}
                  <div className="w-1/3">
                    {index % 2 !== 0 && (
                      <div>
                        <div className="text-xl font-bold text-[#F2F2F3] mb-1">
                          {step.day}
                        </div>
                        {step.items.map((item, i) => (
                          <div key={i} className="text-sm text-[#BDBAB9] leading-tight">
                            {item}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Stack */}
          <div className="md:hidden max-w-xs mx-auto mt-10">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-[0.5px] bg-zinc-700"></div>
              <div className="flex flex-col space-y-6">
                {steps.map((step, index) => (
                  <div className="relative pl-12" key={index}>
                    <div className="absolute left-0 top-0 z-10">
                      <div className="w-8 h-8 rounded-full bg-black border border-zinc-700 flex items-center justify-center text-base font-medium text-[#F2F2F3]">
                        {index + 1}
                      </div>
                    </div>
                    <div className="absolute top-4 left-8 w-[12px] h-[0.5px] bg-zinc-700"></div>
                    <div>
                      <div className="text-lg font-bold text-[#F2F2F3] mb-1">{step.day}</div>
                      {step.items.map((item, i) => (
                        <div key={i} className="text-xs text-[#BDBAB9] leading-tight mb-1">
                          • {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* card */}

      {/* Cards Section */}
      {/* Cards Section */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-20 text-white underline">
        Making Money Like These AI Models
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden bg-zinc-900 shadow-xl border border-zinc-800 transition transform hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center space-x-2">
                <img
                  src={card.profileImg}
                  alt="profile"
                  className="w-6 h-6 rounded-full object-cover border border-white/20"
                />
                <div>
                  <h3 className="text-sm font-semibold text-white">{card.username}</h3>
                  <span className="text-xs text-zinc-400">AI Model</span>
                </div>
              </div>
              <button>
                <svg
                  className="w-4 h-4 text-zinc-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z" />
                  <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z" />
                  <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z" />
                </svg>
              </button>
            </div>

            {/* Post image */}
            <img
              src={card.postImg}
              alt="post"
              className="w-full h-48 object-cover border-t border-b border-zinc-800"
            />

            {/* Footer */}
            <div className="p-3 space-y-2">
              <p className="text-sm text-zinc-400">
                ❤️ Liked by <span className="font-semibold text-white">You</span> and{" "}
                <span className="font-semibold text-white">{card.likes}</span> others
              </p>
              <p className="text-sm text-white">
                <span className="font-semibold">{card.username}</span>{" "}
                {card.caption}
              </p>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
