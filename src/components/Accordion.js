import AccordionItem from "./AccordionItem";

const Accordion = ({ content }) => {
  const renderedAccordion = content.map((item) => {
    return <AccordionItem content={item} />;
  });

  return <div className="max-w-4xl">{renderedAccordion}</div>;
};

export default Accordion;
