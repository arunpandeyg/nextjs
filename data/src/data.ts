// data.ts
export type Item = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export const items: Item[] = [
  {
    id: "1",
    name: "Item One",
    image: "https://source.unsplash.com/random/600x400/?nature,water",
    description: "This is the description for Item One."
  },
  {
    id: "2",
    name: "Item Two",
    image: "https://source.unsplash.com/random/600x400/?city,night",
    description: "This is the description for Item Two."
  },
  {
    id: "3",
    name: "Item Three",
    image: "https://source.unsplash.com/random/600x400/?technology,computer",
    description: "This is the description for Item Three."
  }
];
