import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FiltersResponse, FilterOption } from "@/entities/filters"; // Asegúrate de que el path sea correcto
import { getFilters } from "@/repositores/filters.repository";
import { Spinner } from "@/components/ui/spinner";
import ErrorMessage from "@/components/ui/ErrorMessage";

interface ProductDetailProps {
  category: string;
}

export const FilterSection: React.FC<ProductDetailProps> = ({ category }) => {
  const { isLoading, isError, data, error } = useQuery<FiltersResponse | null>({
    queryKey: ["filters", category],
    queryFn: () => getFilters(category),
  });

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (isLoading) {
    return (<div className="w-full">
      <Spinner size="large" />
    </div>);
  }

  if (isError || !data) {
    return <ErrorMessage />;
  }

  return (
    <div className="flex flex-col">
      <button
        onClick={togglePopup}
        className="mb-4 p-2 bg-[#3498db] text-white rounded-md h-10 md:hidden"
      >
        Show Filters
      </button>

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
              {data.filters.map((filter: FilterOption) => ( // Especificar el tipo del parámetro 'filter'
                <div key={filter.id}>
                  <p className="font-bold">{filter.name}</p>
                  <div className="flex flex-col gap-2">
                    {filter.options.map((option: string) => (
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

      <div className="hidden md:flex flex-col gap-4">
        {data.filters.map((filter: FilterOption) => ( // Especificar el tipo del parámetro 'filter'
          <div key={filter.id}>
            <p className="font-title font-bold text-lg my-2">{filter.name}</p>
            <div className="flex flex-col gap-2">
              {filter.options.map((option: string) => (
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
};
