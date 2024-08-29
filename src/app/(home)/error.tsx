"use client";

import React from "react";

const HomeError = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      HomeError
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default HomeError;
