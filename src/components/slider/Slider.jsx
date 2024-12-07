import React from "react";
import styles from "./Slider.module.css";

const Slider = () => {
  const products = [
    {
      id: 1,
      image: "/img1.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 4.5,
    },
    {
      id: 2,
      image: "/img4.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 4.5,
    },
    {
      id: 3,
      image: "/img3.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 4.5,
    },
    {
      id: 4,
      image: "/img1.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 4.5,
    },
    // Add more products as needed
  ];

  return (
    <div className={styles.product}>
    <div className={styles.productSection}>
      {products.map((product) => (
        <div className={styles.card} key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productImage}
          />
          <div className={styles.productInfo}>
            <h3 className={styles.title}>{product.title}</h3>
            <div className={styles.footer}>
            <span className={styles.price}>{product.price}</span><span>
              {"⭐".repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && "⭐"}</span>
            </div>
          </div>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default Slider;
