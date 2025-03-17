import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Trending from "./../components/specific/Trending";
import Card from "./../components/specific/Card";
import Layout from "../components/layout/Layout";
import { fetchProducts } from "../api/api";

const Search = () => {
  const { search } = useSelector((state) => state.search);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const productData = data?.data || [];


  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [material, setMaterial] = useState([]);
  const [type, setType] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
    console.log(e.target.value);
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value], e.target.value);
    }
  };
  const toggleMaterial = (e) => {
    if (material.includes(e.target.value)) {
      setMaterial((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setMaterial((prev) => [...prev, e.target.value]);
    }
  };
  const toggleType = (e) => {
    if (type.includes(e.target.value)) {
      setType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setType((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = productData?.slice() || [];
  
    if (productsCopy.length > 0) {
      productsCopy = productsCopy.filter((item) => 
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    // if (category.length > 0) {
    //   productsCopy = productsCopy.filter((item) =>
    //     category.includes(item.gender)
    //   );
    // }
  
    if (material.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        material.some(mat => item.material.includes(mat))
      );
    }
  
    if (type.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        type.some(t => item.categories.some(cat => cat.includes(t)))
      );
    }
  
    // Ensure state is updated after filtering
    setFilterProducts(productsCopy);
  };
  

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
    console.log("type", type);
  }, [category, material, type, search]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    setFilterProducts(productData);
  }, [productData]);

  return (
    <div className="flex flex-col gap-1 border-t px-10 pt-10 sm:flex-row sm:gap-10">
      <div className="min-w-40 pb-10">
        <p className="my-2 flex cursor-pointer items-center gap-2 pl-1 font-Corm text-2xl uppercase">
          filter
        </p>
        {/* <div
          className={twMerge(
            "m-1 border py-3 pl-5",
            !showFilter ? "" : "hidden",
          )}
        > */}
          {/* <p className="pb-2 font-Corm text-xl font-medium">Gender</p>
          <div className="flex flex-col gap-2 text-sm text-dark">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Male"}
                onChange={toggleCategory}
              />{" "}
              Male
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Female"}
                onChange={toggleCategory}
              />{" "}
              Female
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Child"}
                onChange={toggleCategory}
              />{" "}
              Child
            </p>
          </div> */}
        {/* </div> */}
        <div
          className={twMerge(
            "m-1 border py-3 pl-5",
            !showFilter ? "" : "hidden",
          )}
        >
          <p className="pb-2 font-Corm text-xl font-medium">Material</p>
          <div className="flex flex-col gap-2 text-sm text-dark">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Gold"}
                onChange={toggleMaterial}
              />{" "}
              Gold
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Silver"}
                onChange={toggleMaterial}
              />{" "}
              Silver
            </p>
          </div>
        </div>
        <div
          className={twMerge(
            "m-1 border py-3 pl-5",
            !showFilter ? "" : "hidden",
          )}
        >
          <p className="pb-2 font-Corm text-xl font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm text-dark">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Necklace"}
                onChange={toggleType}
              />{" "}
              Necklace
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bracelet"}
                onChange={toggleType}
              />{" "}
              Bracelet
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Earring"}
                onChange={toggleType}
              />{" "}
              Earring
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Pendant"}
                onChange={toggleType}
              />{" "}
              Pendant
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Chain"}
                onChange={toggleType}
              />{" "}
              Chain
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Ring"}
                onChange={toggleType}
              />{" "}
              Ring
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="mb-4 flex justify-between text-base sm:text-2xl">
          <h1 className="font-Corm uppercase">our products</h1>
          <select
            className="border-2 px-2 text-sm"
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option value="relevant">Sort by : Relevence</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>
        {filterProducts.length > 0 ? (
          <div>
            <div className="grid grid-cols-2 gap-2 gap-y-6 py-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {filterProducts?.map((item, index) => (
              <Card
                key={index}
                // Name={item.name}
                // Images={item.images[0]}
                // Gender={"Something"}
                // Material={item.material}
                // Category={item.categories[0]}
                // Price={item.price}
                // ProductId={item._id}
                // Rating={item.ratings}
                // NoOfReviews={item.numReviews}
                product={item}
              />
            ))}
          </div>
          </div>
        ) : (
          <div>
            <h1>
              We dont have that right now, would you like to search for
              something else like :{" "}
            </h1>
            <Trending className={"py-1"} width={"w-48"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout()(Search);
