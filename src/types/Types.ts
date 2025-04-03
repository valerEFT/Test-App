import React from "react";

export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  liked: boolean;
  favorite: boolean;
};

export type ProductsState = {
  products: Products[];
};
