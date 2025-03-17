import React from "react";
import { twMerge } from "tailwind-merge";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/api";

const Trending = ({ className, width, size = 8 }) => {
  // console.log(import.meta.env.VITE_EMAIL_KEY)
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const productData = data?.data || [];

  return (
<div className={twMerge("py-8", className)}>
  <div className="flex flex-col items-center">
    <h1 className="p-8 text-center font-Corm text-5xl">Trending Now</h1>
    <div className="w-full px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productData?.slice(0, size).map((item, index) => (
          <Card key={index} product={item} />
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Trending;
