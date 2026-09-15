import React, { useState } from "react";

// Define the type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What kind of websites do you build?",
    answer:
      "We build responsive, high-performance websites ranging from simple landing pages to complex full-stack web applications and e-commerce platforms.",
  },
  {
    question: "Do you handle both design and development?",
    answer:
      "Yes, we offer a comprehensive service. Our team handles the UI/UX design process as well as the complete frontend and backend development.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily use modern technologies like React, TypeScript, Next.js, Node.js, and Tailwind CSS for a fast and scalable build.",
  },
  {
    question: "Can you build a website from my existing design?",
    answer:
      "Absolutely! We can take your Figma, Sketch, or Adobe XD designs and translate them pixel-perfectly into clean, responsive code.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Timelines vary based on complexity, but typically a standard business website takes 3 to 6 weeks, while larger applications can take longer.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes, we offer comprehensive post-launch support plans to ensure your website remains secure, up-to-date, and running smoothly.",
  },
];

const FAQSection: React.FC = () => {
  // State to track which item is open. 'null' means all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    
    <section id="faq" className="p-4 sm:p-8 pt-8 sm:pt-12 pb-8 sm:pb-12 bg-background">
      <div className="max-w-4xl w-full mx-auto">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          {/* FAQ Badge */}
          <div className="inline-block border border-black rounded-full px-4 py-1 text-xs sm:text-sm font-bold tracking-wider mb-4">
            (FAQ)
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-black leading-tight tracking-tight">
            Got any
            <br />
            questions?
          </h1>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-[#F2EFE6] transition-all duration-300"
              >
                {/* Question Header (Button) */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-black">
                    {item.question}
                  </span>

                  {/* Plus Icon */}
                  <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center transition-transform duration-300 group-hover:bg-gray-800">
                    <svg
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-white transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content (Collapsible) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
