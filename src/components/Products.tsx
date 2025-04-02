import { useEffect } from "react";
import { useAppDispatch, RootState } from "../store/store";
import {
  setProducts,
  deleteProduct,
  likedProduct,
} from "../feature/slice/ProductSlice";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchProducts = async () => {
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
    fetchProducts();
    console.log(products);
  }, []);

  return (
    <section className="products">
      <ul className="products__list">
        {products.map((card) => (
          <li className="item" key={card.id}>
            <h2 className="item__title">{card.title}</h2>
            <img className="item__image" src={card.image} alt={card.title} />
            <p className="item__description">{card.description}</p>
            <span className="item__price">{card.price}</span>
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
            </div>
          </li>
        ))}
        ;
      </ul>
    </section>
  );
};

export default Products;
