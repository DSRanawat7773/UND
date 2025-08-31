import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion"; // using shadcn/ui accordion for premium UI

const LuxuryFAQ = () => {
  const faqData = [
    {
      question:
        "Why is it premium and unique/expensive compared to local market murals like MDF, HDHMR, fiberglass, POP, etc.?",
      answer: (
        <>
          Most local murals made from MDF, HDHMR, fiberglass, or POP are{" "}
          <strong>mass-produced, low-cost, and short-lived</strong>. They often crack,
          fade, or lose finish in a few years.
          <br />
          <br />
          <strong>UND murals are different because:</strong>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              <strong>India’s best fine detailing work</strong>, handcrafted by
              artists with 30+ years of experience.
            </li>
            <li>
              <strong>Premium composite fiber mixtures</strong> instead of MDF/POP →
              stronger, lightweight, and long-lasting.
            </li>
            <li>
              <strong>100 years shelf life</strong> with a <strong>20-year warranty</strong>{" "}
              against cracks and damage.
            </li>
            <li>
              <strong>Not mass produced</strong> – every mural is{" "}
              <strong>custom luxury art</strong>, not factory cut-outs.
            </li>
            <li>
              Finished in <strong>3 dedicated workshops</strong> across India with
              quality control at every step.
            </li>
          </ul>
          <br />
          This makes UND murals a{" "}
          <strong>premium, luxury investment, far superior</strong> to standard market
          alternatives.
        </>
      ),
    },
    {
      question: "What makes UND murals premium?",
      answer: (
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Finest craftsmanship</strong> – 100+ skilled artists in-house.
          </li>
          <li>
            <strong>Premium category materials</strong> with fiber composite mixtures.
          </li>
          <li>
            <strong>Exclusive production</strong> – not mass-produced.
          </li>
          <li>
            <strong>Safest delivery guarantee</strong> – hard protective packaging.
          </li>
          <li>
            <strong>Luxury positioning</strong> – designed as statement pieces, not
            décor fillers.
          </li>
        </ul>
      ),
    },
    {
      question: "Is it durable?",
      answer: (
        <>
          Absolutely ✅ Our murals are engineered to last for{" "}
          <strong>generations</strong>:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>100 years shelf life.</li>
            <li>20 years warranty against cracks or damage.</li>
            <li>
              Moisture and dust-resistant for long-lasting beauty.
            </li>
            <li>
              Made with <strong>fiber composite mixtures</strong> for strength and
              stability.
            </li>
          </ul>
          <br />
          Unlike MDF/POP murals that often crack or warp, UND murals are built to
          endure.
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
            <strong>Premium materials</strong> – no MDF/POP compromises.
          </li>
          <li>
            <strong>100+ skilled in-house artisans</strong> working full-time on UND
            murals.
          </li>
          <li>
            <strong>Warranty + After-sales support</strong> – unmatched in the market.
          </li>
          <li>
            <strong>Safest delivery guarantee</strong> with hard protective packaging.
          </li>
          <li>
            <strong>20 years warranty</strong> – no local competitor offers this
            assurance.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">FAQs</h2>
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
