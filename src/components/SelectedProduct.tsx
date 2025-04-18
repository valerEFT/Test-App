import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Product } from "../types/Types";

export const SelectedProduct = () => {
  const [card, setCard] = useState<Product | null>(null);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        if (response.ok) {
          setCard(data);
        }
      } catch (err) {
        console.error("Такого товара не существует на fakestoreapi", err);
      }
    };
    getProduct();
  }, []);
  return (
    <section className="selected-product">
      <Link className="link" to={"/products"}>
        <button className="selected-product__back-button link">
          {"< "}Back to products
        </button>
      </Link>
      <div className="selected-product__card">
        <img
          className="selected-product__image"
          src={card?.image}
          alt={card?.title}
        />
        <h2 className="selected-product__title">{card?.title}</h2>
        <p className="selected-product__description">{card?.description}</p>
        <span className="selected-product__price">price: {card?.price}$</span>
        <p className="selected-product__in-stock">
          in stock: {card?.rating.count}
        </p>
        <p className="selected-product__rating">rate: {card?.rating.rate}</p>
      </div>
    </section>
  );
};
