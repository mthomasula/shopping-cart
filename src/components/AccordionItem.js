import { useState } from "react";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa";

const AccordionItem = ({ content }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white ">
      <div
        className="cursor-pointer p-3 border-b-2 bg-blue-300 border-gray-400 font-semibold flex justify-between items-center "
        onClick={() => setOpen(!open)}
      >
        {content.label}
        <span>{open ? <FaAngleDown /> : <FaAngleLeft />}</span>
      </div>
      {open ? (
        <p className="py-2 px-4 border-b-2 border-gray-200">
          {content.content}
        </p>
      ) : null}
    </div>
  );
};

export default AccordionItem;
