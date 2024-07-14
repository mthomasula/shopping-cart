import { useState } from "react";

const DropDown = ({ options, getDropDownValue }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    getDropDownValue(option.value);
    setOpen(!open);
  };

  const renderedOptions = options.map((option) => {
    return (
      open && (
        <div className="hover:bg-blue-300" onClick={() => handleSelect(option)}>
          {option.label}
        </div>
      )
    );
  });

  return (
    <div className="w-32 relative">
      <div
        className="flex justify-between items-center cursor-pointer border rounded shadow p-2 bg-white w-full"
        onClick={handleOpen}
      >
        {selectedOption}
      </div>
      <div className="absolute border rounded w-full bg-white shadow">
        {renderedOptions}
      </div>
    </div>
  );
};

export default DropDown;
