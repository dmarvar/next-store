"use client";

import React from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const HomeError = ({ error, reset }: Props) => {
  return (
    <div>
      HomeError
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default HomeError;
