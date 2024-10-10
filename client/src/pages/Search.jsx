import React, { useEffect, useState } from "react";
import Trending from "./../components/specific/Trending";
import Card from "./../components/specific/Card";
import { twMerge } from "tailwind-merge";
import Layout from "../components/layout/Layout";
import { productData } from "../constants/sampleData";
import { useSelector } from "react-redux";

const Search = () => {
  const { search } = useSelector((state) => state.search);

  useEffect(() => {
    console.log("searchBrowse", search);
  }, [search]);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [material, setMaterial] = useState([]);
  const [type, setType] = useState([]);

  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
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
    let productsCopy = productData.slice();
    console.log(search.length);

    if (search.length > 0) {
      productsCopy = productsCopy.filter((item) => {
        console.log(
          item.Name.toLowerCase(),
          search.toLowerCase(),
          item.Name.toLowerCase().includes(search.toLowerCase()),
        );
        return item.Name.toLowerCase().includes(search.toLowerCase());
      });
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.Gender),
      );
    }
    if (material.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        material.includes(item.Material),
      );
    }
    if (type.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        type.includes(item.Category),
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.Price - b.Price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.Price - a.Price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, material, type, search]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-10">
      <div className="min-w-40 pb-10">
        <p className="my-2 text-2xl flex items-center cursor-pointer gap-2 uppercase pl-1 font-Corm">
          filter
        </p>
        <div
          className={twMerge(
            "border pl-5 py-3 m-1",
            !showFilter ? "" : "hidden",
          )}
        >
          <p className=" text-xl font-medium pb-2 font-Corm ">Gender</p>
          <div className="flex flex-col gap-2 text-sm text-dark ">
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
          </div>
        </div>
        <div
          className={twMerge(
            "border pl-5 py-3 m-1 ",
            !showFilter ? "" : "hidden",
          )}
        >
          <p className=" text-xl font-medium pb-2 font-Corm">Material</p>
          <div className="flex flex-col gap-2 text-sm text-dark ">
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
            "border pl-5 py-3 m-1 ",
            !showFilter ? "" : "hidden",
          )}
        >
          <p className=" text-xl font-medium pb-2 font-Corm">Type</p>
          <div className="flex flex-col gap-2 text-sm text-dark ">
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
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <h1 className="font-Corm uppercase">our products</h1>
          <select
            className="border-2 text-sm px-2"
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-6 py-4">
            {filterProducts.map((item, index) => (
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
            ))}
          </div>
        ) : (
          <div>
            <h1 className="lowercase">
              we dont have that right now, would you like to search for
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
