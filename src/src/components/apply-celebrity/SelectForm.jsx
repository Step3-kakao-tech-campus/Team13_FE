import { useState } from "react";

function SelectForm({ options, label, onChange }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };

  return (
    <div>
      <label htmlFor="select">{label}</label>
      <select id="select" value={selectedOption} onChange={handleSelectChange}>
        <option value="">선택하세요</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectForm;
