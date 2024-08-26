import React from "react";

type Props = {
  params: {
    categories: string[];
    searchParams?: string;
  };
};

const CategoryPage = (props: Props) => {
  const { categories } = props.params;
  return (
    <div>
      <h1>Category selected: {categories}</h1>
    </div>
  );
};

export default CategoryPage;
