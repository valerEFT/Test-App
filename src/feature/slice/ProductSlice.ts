import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Products } from "../../types/Types";

const initialState: Products = {
  products: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload.map((card) => ({
        ...card,
        liked: false,
        favorite: false,
      }));
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (card) => card.id !== action.payload
      );
    },
    likedProduct: (state, action: PayloadAction<number>) => {
      const likedCard = state.products.find(
        (card) => card.id === action.payload
      );
      if (likedCard) {
        likedCard.liked = !likedCard.liked;
      }
    },
    favoriteProduct: (state, action: PayloadAction<number>) => {
      const favoritedProduct = state.products.find(
        (card) => card.id === action.payload
      );
      if (favoritedProduct) {
        favoritedProduct.favorite = !favoritedProduct.favorite;
      }
    },
    addNewProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const {
  setProducts,
  deleteProduct,
  likedProduct,
  favoriteProduct,
  addNewProduct,
} = ProductSlice.actions;
export default ProductSlice.reducer;
