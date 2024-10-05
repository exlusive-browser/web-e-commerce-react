export interface FilterOption {
    id: number;
    name: string;
    options: string[];
}

export interface FiltersResponse {
    categoryName: string;
    filters: FilterOption[];
}