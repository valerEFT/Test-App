import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsState, Products } from "../../types/Types";

const initialState: ProductsState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Products[]>) => {
      state.products = action.payload.map((card) => ({
        ...card,
        liked: false,
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
  },
});

export const { setProducts, deleteProduct, likedProduct } =
  ProductSlice.actions;
export default ProductSlice.reducer;
