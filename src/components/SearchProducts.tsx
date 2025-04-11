import React, { ChangeEvent, useState } from "react";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export const SearchProducts = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const products = useSelector((state: RootState) => state.products.products);

  const matchedSearchingProducts = products.filter((card) =>
    card.title.toLowerCase().includes(inputValue)
  );

  const limitedMatchedSearchingProducts = matchedSearchingProducts.slice(0, 5);

  const getUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  };
  return (
    <div className="products__search-wrapper">
      <input
        className="products__search"
        type="text"
        placeholder="Search product"
        onChange={getUserInput}
      />
      <ul className="products__search-list">
        {" "}
        {inputValue &&
          limitedMatchedSearchingProducts.map((card) => (
            <Link to={`/products/${card.id}`}>
              <li className="products__search-item" key={card.id}>
                <p
                  className="products__search-title"
                  style={{ color: "black" }}
                >
                  {card.title}
                </p>
                <img
                  className="products__search-image"
                  src={card.image}
                  alt={card.title}
                />
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};
