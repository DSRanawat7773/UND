import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // using shadcn/ui accordion for premium UI

const LuxuryFAQ = () => {
  const faqData = [
    {
      question: "Why is it more expensive than wallpaper?",
      answer: (
        <>
          Our murals are <strong>not mass-produced</strong> like wallpaper. Each piece is{" "}
          <strong>handcrafted by India’s best skilled artists</strong> with over{" "}
          <strong>30 years of experience</strong>.
          <br />
          <br />
          Wallpapers fade, peel, and need replacement every few years, while our murals are{" "}
          <strong>luxury art pieces with 100 years of shelf life</strong> and a{" "}
          <strong>20-year warranty</strong> against cracks and damage.
        </>
      ),
    },
    {
      question: "What makes UND murals premium?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Fine detailing work</strong> by 100+ in-house artisans.
          </li>
          <li>
            <strong>Premium category materials</strong>: fiber with composite mixtures for strength and finish.
          </li>
          <li>
            <strong>3 state-of-the-art workshops</strong> in India ensuring consistent quality.
          </li>
          <li>
            <strong>Not mass produced</strong> – every mural is a <strong>custom luxury creation</strong>.
          </li>
          <li>
            <strong>Safest delivery with guarantee</strong> – each piece packed with hard protective packaging.
          </li>
        </ul>
      ),
    },
    {
      question: "Is it durable?",
      answer: (
        <>
          Absolutely ✅ Our murals are built to last for <strong>generations</strong>.
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>100 years shelf life.</li>
            <li>20 years warranty against cracks or damage.</li>
            <li>
              Made with <strong>fiber composite mixtures</strong> for strength,
              waterproofing, and resistance to wear.
            </li>
          </ul>
          <br />
          Unlike temporary décor, UND murals are an{" "}
          <strong>investment in timeless art.</strong>
        </>
      ),
    },
    {
      question: "Why choose UND over cheaper/local options?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>30+ years artistic expertise</strong> in every detail.
          </li>
          <li>
            <strong>Premium materials</strong> ensuring unmatched finish and durability.
          </li>
          <li>
            <strong>100+ skilled in-house artists</strong> working full-time on UND murals.
          </li>
          <li>
            <strong>Safe delivery guarantee</strong> with professional hard packaging.
          </li>
          <li>
            <strong>20 years warranty</strong> – no local competitor offers this assurance.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Luxury Q&A
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-lg font-medium text-gray-700">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LuxuryFAQ;
