import { ProductsWrapper } from "app/app/components/Store/ProductsWrapper";
import { getCollectionProducts } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";
import React from "react";
import { getCollections } from "../../../services/shopify/collections";

type Props = {
  params: {
    categories: string[];
    searchParams?: string;
  };
};

const CategoryPage = async (props: Props) => {
  const { categories } = props.params;

  let products = [];
  const collections = await getCollections();

  if (categories?.length > 0) {
    const selectedCollectionId = collections.find(
      (collection: any) => collection.handle === categories[0]
    ).id;
    products = await getCollectionProducts(selectedCollectionId);
  } else {
    products = await getProducts();
  }

  return <ProductsWrapper products={products} />;
};

export default CategoryPage;
