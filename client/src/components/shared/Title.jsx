import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "AURRNA",
  description = "your stop for best quality jewellery",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
