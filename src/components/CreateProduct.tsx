import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Product } from "../types/Types";
import { addNewProduct } from "../feature/slice/ProductSlice";
import { RootState, useAppDispatch } from "../store/store";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { fetchProducts } from "../functions/fetchProducts";

const CreateProduct = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [imageLink, setImageLink] = useState<string>("");
  const [rate, setRate] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const id: number = products[products.length - 1]?.id + 1;

  const sendObj = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNewProduct(newProduct));
  };

  useEffect(() => {
    if (products.length > 0) return;
    fetchProducts(dispatch);
  }, [dispatch, products]);

  const inputTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value && setTitle(e.target.value);
  };
  const inputPriceValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value && setPrice(Number(e.target.value));
  };
  const inputDescriptionValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value && setDescription(e.target.value);
  };
  const inputCategoryValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value && setCategory(e.target.value);
  };
  const inputImageLink = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value && setImageLink(e.target.value);
  };
  const inputRateValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value && setRate(Number(e.target.value));
  };
  const inputCountValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value && setCount(Number(e.target.value));
  };

  const newProduct: Product = {
    id: id,
    title: title,
    price: price,
    description: description,
    category: category,
    image: imageLink,
    liked: false,
    favorite: false,
    rating: {
      rate: rate,
      count: count,
    },
  };

  return (
    <>
      <Link to={"/products"}>Products</Link>
      <form onSubmit={sendObj} className="form">
        <label>
          Title
          <input
            type="text"
            onChange={inputTitleValue}
            required
            minLength={3}
          />
        </label>
        <label>
          Price
          <input type="number" onChange={inputPriceValue} required />
        </label>
        <label>
          Description
          <input
            type="text"
            onChange={inputDescriptionValue}
            required
            minLength={20}
            maxLength={500}
          />
        </label>
        <label>
          category
          <input type="text" onChange={inputCategoryValue} required />
        </label>
        <label>
          imageLink
          <input type="text" onChange={inputImageLink} required />
        </label>
        <label>
          rate
          <input
            type="number"
            onChange={inputRateValue}
            required
            min={0}
            max={5}
          />
        </label>
        <label>
          count
          <input
            type="number"
            onChange={inputCountValue}
            required
            minLength={1}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default CreateProduct;
