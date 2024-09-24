import { Category } from "@/entities/category";

export class CategoryRepository {
  async getMany(): Promise<Category[]> {
    return Promise.resolve([
      {
        title: "Technology",
        subCategories: [
          { title: "Computers", url: "/" },
          { title: "Televisions", url: "/" },
          { title: "Audio", url: "/" },
          { title: "Video", url: "/" },
          { title: "Printing", url: "/" },
          { title: "Cameras", url: "/" },
        ],
      },
      {
        title: "Appliances",
        subCategories: [
          { title: "Air Conditioning", url: "/" },
          { title: "Refrigeration", url: "/" },
          { title: "Washers/Dryers", url: "/" },
        ],
      },
      {
        title: "Smartphones",
        subCategories: [
          { title: "Smartphones", url: "/product-list/smartphones" },
          { title: "Tablets", url: "/" },
          { title: "Smartwatch", url: "/" },
        ],
      },
      {
        title: "Home",
        subCategories: [
          { title: "Living Rooms", url: "/" },
          { title: "Dining Room", url: "/" },
          { title: "Kitchen", url: "/" },
          { title: "Bathroom", url: "/" },
        ],
      },
    ]);
  }
}
