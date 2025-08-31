import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion"; // ✅ shadcn/ui accordion

const LuxuryFAQ = () => {
  const faqData = [
    {
      question:
        "Why are UND murals premium and different from local market murals?",
      answer: (
        <>
          Local MDF, HDHMR, fiberglass, or POP murals are{" "}
          <strong>mass-produced, fragile, and short-lived</strong>.
          <br />
          <br />
          <strong>UND murals stand apart:</strong>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>
              <strong>Finest detailing</strong>, handcrafted by artisans with 30+
              years of mastery.
            </li>
            <li>
              <strong>Premium composite fiber mixture</strong> – stronger and
              more durable than POP/MDF.
            </li>
            <li>
              <strong>100 years shelf life</strong> with{" "}
              <strong>20 years warranty</strong>.
            </li>
            <li>
              <strong>Exclusive luxury art</strong> – not factory cut-outs.
            </li>
            <li>
              <strong>Multiple workshops</strong> with strict quality control.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What makes UND murals premium?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>100+ artisans</strong> dedicated to craftsmanship.
          </li>
          <li>
            <strong>Exclusive materials</strong> – fiber composites, not MDF/POP.
          </li>
          <li>
            <strong>Limited production</strong> – each piece is unique.
          </li>
          <li>
            <strong>Luxury packaging & safest delivery</strong>.
          </li>
          <li>
            Designed as <strong>statement art</strong>, not décor fillers.
          </li>
        </ul>
      ),
    },
    {
      question: "Is it durable?",
      answer: (
        <>
          Absolutely ✅ UND murals are built to{" "}
          <strong>last for generations</strong>:
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>100 years shelf life.</li>
            <li>20 years warranty against cracks or damage.</li>
            <li>Moisture & dust resistant.</li>
            <li>
              Made with <strong>premium fiber composites</strong> for strength.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Why choose UND over cheaper options?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>30+ years of artistic excellence</strong>.
          </li>
          <li>
            <strong>Premium materials</strong> – no MDF/POP compromises.
          </li>
          <li>
            <strong>100+ in-house artisans</strong> working full-time.
          </li>
          <li>
            <strong>After-sales support</strong> & unmatched warranty.
          </li>
          <li>
            <strong>Safest delivery guarantee</strong> in protective packaging.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="my-16 max-w-4xl mx-auto px-4">
      {/* Luxury Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Everything you need to know about our premium luxury murals.
        </p>
      </div>

      {/* Accordion */}
      <Accordion
        type="single"
        collapsible
        className="bg-white shadow-xl rounded-2xl border border-gray-100"
      >
        {faqData.map((item, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border-b last:border-b-0"
          >
            <AccordionTrigger className="text-lg font-semibold text-gray-800 px-6 py-4 hover:bg-gray-50 transition-all">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-gray-700 leading-relaxed text-base">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LuxuryFAQ;
