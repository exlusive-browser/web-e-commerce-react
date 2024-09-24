export interface SubCategory {
  title: string;
  url: string;
}

export interface Category {
  title: string;
  subCategories: SubCategory[];
}
