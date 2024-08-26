import React from "react";
import styles from "./MainProducts.module.sass";
import Image from "next/image";

type Props = {};

const getProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      }
    );

    const { products } = await res.json();
    throw new Error("Error fetching products");

    return products;
  } catch (error) {
    console.log(error);
  }
};

export const MainProducts = async (props: Props) => {
  console.log(process.env.SHOPIFY_HOSTNAME);
  const products = await getProducts();

  console.log(products);
  return (
    <section className={styles.MainProducts}>
      <h3>✨ New products released!</h3>
      <div className={styles.MainProducts__grid}>
        {products.map((product: any) => {
          const imageSrc = product.images[0].src;
          return (
            <article key={product.id}>
              <p>{product.title}</p>
              <Image src={imageSrc} fill alt={product.title} loading="eager" />
            </article>
          );
        })}
      </div>
    </section>
  );
};
