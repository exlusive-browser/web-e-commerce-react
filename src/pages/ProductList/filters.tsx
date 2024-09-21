import { useState } from "react";

const smartphoneFilters = [
    {
        id: 1,
        name: "Brand",
        options: ["Apple", "Samsung", "Xiaomi", "OnePlus", "Google"],
    },
    {
        id: 2,
        name: "Operating System",
        options: ["iOS", "Android"],
    },
    {
        id: 3,
        name: "Storage Capacity",
        options: ["64GB", "128GB", "256GB", "512GB", "1TB"],
    },
    {
        id: 4,
        name: "RAM",
        options: ["4GB", "6GB", "8GB", "12GB"],
    },
    {
        id: 5,
        name: "Battery Capacity",
        options: ["< 3000mAh", "3000 - 4000mAh", "4000 - 5000mAh", "> 5000mAh"],
    },
    {
        id: 6,
        name: "Price Range",
        options: [
            "$500,000 - $1,000,000",
            "$1,000,000 - $2,000,000",
            "$2,000,000 - $3,000,000",
            "$3,000,000+",
        ],
    },
    {
        id: 7,
        name: "Color",
        options: ["Black", "White", "Silver", "Blue", "Red", "Gold"],
    },
];

export function Filters() {
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
                                                <span className="text-base text-[#656565]">{option}</span>
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

export default Filters;