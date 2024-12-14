import React, { useState, useEffect } from "react";

import { productData } from "../../constants/sampleData";
import Card from "./Card";
import Trending from "./../specific/Trending";

const RelatedProducts = ({ type, gender, ProductId }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (productData.length > 0) {
      let productCopy = productData.slice();

      productCopy = productCopy.filter(
        (item) => type === item.Category && item.ProductId != ProductId,
      );

      setRelated(productCopy);
    }
  }, [ProductId]);
  return (
    <div className="py-12 px-10">
      <div className="text0center text-3xl py-2">
        <h2 className="font-Corm text-[36px]">Related Products</h2>
      </div>
      {related.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-5">
          {related.map((item, index) => {
            return (
              <Card
                key={index}
                Name={item.Name}
                Images={item.Images}
                Gender={item.Gender}
                Material={item.Material}
                Category={item.Category}
                Price={item.Price}
                ProductId={item.ProductId}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <h2>Nothing related found tryout our newest trending jewelleries</h2>
          <Trending className={"p-0"} />
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
