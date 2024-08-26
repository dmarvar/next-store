import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main>
      <nav>Navigation from Categories</nav>
      {children}
    </main>
  );
};

export default layout;
