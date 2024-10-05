import { useState } from "react";
export function OrderSection() {
  const [orderBy, setOrderBy] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(event.target.value);
  };

  return (
    <div className="orderby mb-4">
      <select
        name="orderby"
        id="orderby"
        className="bg-white border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-500 w-40 md:w-auto h-10 md:h-auto"
        value={orderBy}  // Control the select element with React state
        onChange={handleChange}  // Update the state when the user selects an option
      >
        <option value="" disabled hidden>
          Order by
        </option>
        <option value="relevance">Relevance</option>
        <option value="upload">Upload date</option>
        <option value="lh-price">Lowest to highest price</option>
        <option value="hl-price">Highest to lowest price</option>
      </select>
    </div>
  );
}
