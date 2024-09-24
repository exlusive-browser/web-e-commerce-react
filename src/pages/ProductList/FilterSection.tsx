import { useState } from "react";

const smartphoneFilters = [
  {
    id: 1,
    name: "Brand",
    options: [
      "Apple (18)",
      "Samsung (25)",
      "Xiaomi (12)",
      "OnePlus (9)",
      "Google (15)",
    ],
  },
  {
    id: 2,
    name: "Operating System",
    options: ["iOS (18)", "Android (61)"],
  },
  {
    id: 3,
    name: "Storage Capacity",
    options: [
      "64GB (10)",
      "128GB (24)",
      "256GB (20)",
      "512GB (15)",
      "1TB (10)",
    ],
  },
  {
    id: 4,
    name: "RAM",
    options: ["4GB (8)", "6GB (15)", "8GB (30)", "12GB (26)"],
  },
  {
    id: 5,
    name: "Battery Capacity",
    options: [
      "< 3000mAh (5)",
      "3000 - 4000mAh (18)",
      "4000 - 5000mAh (35)",
      "> 5000mAh (21)",
    ],
  },
  {
    id: 6,
    name: "Price Range",
    options: [
      "$500,000 - $1,000,000 (10)",
      "$1,000,000 - $2,000,000 (20)",
      "$2,000,000 - $3,000,000 (15)",
      "$3,000,000+ (34)",
    ],
  },
  {
    id: 7,
    name: "Color",
    options: [
      "Black (22)",
      "White (19)",
      "Silver (11)",
      "Blue (15)",
      "Red (8)",
      "Gold (14)",
    ],
  },
];

export function FilterSection() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Botón para abrir el pop-up (solo en móviles) */}
      <button
        onClick={togglePopup}
        className="mb-4 p-2 bg-blue-500 text-white rounded-md h-10 md:hidden"
      >
        Show Filters
      </button>

      {/* Pop-up de filtros (solo en móviles) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 md:hidden">
          <div className="bg-white p-4 rounded-lg w-11/12 max-w-md max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-title font-bold text-lg">Filters</h3>
              <button
                onClick={togglePopup}
                className="text-gray-600 focus:outline-none"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {smartphoneFilters.map((filter) => (
                <div key={filter.id}>
                  <p className="font-bold">{filter.name}</p>
                  <div className="flex flex-col gap-2">
                    {filter.options.map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                        />
                        <span className="text-base text-[#656565]">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Vista de escritorio: Filtros directamente visibles */}
      <div className="hidden md:flex flex-col gap-4">
        {smartphoneFilters.map((filter) => (
          <div key={filter.id}>
            <p className="font-title font-bold text-lg">{filter.name}</p>
            <div className="flex flex-col gap-2">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  <span className="text-base text-[#656565]">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
