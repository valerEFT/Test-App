import React from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  liked: boolean;
  favorite: boolean;
  rating: {
    rate: number;
    count: number;
  };
};

export type Products = {
  products: Product[];
};
