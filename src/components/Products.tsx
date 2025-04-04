import { useEffect, useState } from "react";
import { useAppDispatch, RootState } from "../store/store";
import {
  deleteProduct,
  likedProduct,
  favoriteProduct,
} from "../feature/slice/ProductSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { fetchProducts } from "../functions/fetchProducts";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState({ all: true, favorite: false });
  const filteredProducts = products.filter((card) => card.favorite);

  useEffect(() => {
    fetchProducts(dispatch);
  }, [dispatch]);

  return (
    <section className="products">
      <div className="products__filter">
        <button onClick={() => setFilter({ all: true, favorite: false })}>
          Все
        </button>
        <button onClick={() => setFilter({ all: false, favorite: true })}>
          Избранное
        </button>
      </div>
      <ul className="products__list">
        {(filter.all ? products : filteredProducts).map((card) => {
          const slicedTitle = card.title.slice(0, 43);
          const slicedCardDescription = card.description.slice(0, 70);
          return (
            <li key={card.id} className="item">
              <Link to={`/products/${card.id}`}>
                <img
                  className="item__image"
                  src={card.image}
                  alt={card.title}
                />
                <h2 className="item__title">
                  {card.title.length > 43 ? slicedTitle + "..." : slicedTitle}
                </h2>
                <p className="item__description">
                  {slicedCardDescription + "..."}
                </p>
                <span className="item__price">{card.price}$</span>
              </Link>
              <div className="item__buttons-wrapper">
                <div className="item__delete-button-wrapper">
                  <button
                    className="item__delete-button"
                    onClick={() => dispatch(deleteProduct(card.id))}
                  ></button>
                </div>
                <button
                  className={card.liked ? "item__liked" : "item__not-liked"}
                  onClick={() => dispatch(likedProduct(card.id))}
                >
                  <img
                    className={card.liked ? "item__liked" : "item__not-liked"}
                    src={
                      card.liked
                        ? "/images/black-like.png"
                        : "/images/white-like.png"
                    }
                    alt={card.liked ? "liked" : "not-liked"}
                  />
                </button>
                <button
                  onClick={() => dispatch(favoriteProduct(card.id))}
                  className="item__favorite-button"
                >
                  <img
                    className="item__favorite-image"
                    src={
                      card.favorite
                        ? "/images/favorite-active.png"
                        : "/images/favorite.png"
                    }
                    alt="favorite"
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
