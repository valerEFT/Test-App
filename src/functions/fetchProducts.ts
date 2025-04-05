import { setProducts } from "../feature/slice/ProductSlice";
import { useAppDispatch } from "../store/store";

export const fetchProducts = async (
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    if (response.ok) {
      dispatch(setProducts(data));
    }
  } catch (err) {
    console.error(err);
  }
};
