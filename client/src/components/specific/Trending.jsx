import React from "react";
import { twMerge } from "tailwind-merge";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/api";

const Trending = ({ className, width, size = 3 }) => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const productData = data?.data || [];

  return (
    <div className={twMerge("py-8", className)}>
      <div className="flex flex-col">
        <h1 className="p-8 text-center font-Corm text-5xl">Trending Now</h1>
        <div className="flex flex-row p-2">
          <div className="mx-auto flex flex-row flex-wrap justify-evenly gap-2 lg:justify-evenly">
            {productData?.map((item, index) =>
              index < size ? (
                <Card
                  key={index}
                  Name={item.name}
                  Images={item.images[0]}
                  Gender={"Female"}
                  Material={item.material}
                  Category={item.categories[0]}
                  Price={item.price}
                  ProductId={item._id}
                  Rating={item.ratings}
                  NoOfReviews={item.numReviews}

                />
              ) : (
                <div key={index}></div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
