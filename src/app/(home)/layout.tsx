import React, { Children } from "react";
import { Description } from "../components/Home/Description";
import { Hero } from "../components/Home/Hero/Hero";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
};

export default HomeLayout;
