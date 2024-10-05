export interface SubCategory {
  title: string;
}

export interface Category {
  title: string;
  subCategories: SubCategory[];
}
