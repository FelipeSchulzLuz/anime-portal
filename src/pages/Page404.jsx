import React from "react";
import imageError from "../assets/imageError.svg";
import "./page404.scss"

const Page404 = () => {
  return (
    <main className="not-found">
      <img src={imageError} alt="error404" height="1000" />
    </main>
  );
};

export default Page404;
