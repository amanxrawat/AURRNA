import React, { Link, useState } from 'react'
import Layout from '../components/layout/Layout'
import FilterButton from '../components/shared/FilterButton'
import { productData, cartItems } from "./../constants/sampleData"
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/specific/Card'
import Trending from '../components/specific/Trending'
import CartListItem from '../components/specific/CartListItem'



const Search = () => {
  const navigate = useNavigate();
  //selected filter will have 3 arrays to keep track of selected choices
  const [selectedFilters, setSelectedFilters] = useState({ Gender: [], Material: [], Category: [] });
  const [filteredProducts, setFilteredProducts] = useState(productData);

  //add or remove filters 
  const handleFilterButtonClick = (item, category) => {
    if (selectedFilters[category].includes(item)) {
      let filters = selectedFilters;
      filters[category] = filters[category].filter((el) => el !== item);
      setSelectedFilters(filters);
    } else {

      let filters = selectedFilters;
      filters[category].push(item);

      setSelectedFilters(filters);
    }
    if (selectedFilters.Gender.length + selectedFilters.Material.length + selectedFilters.Category.length
      === 0) {
      setFilteredProducts([...productData])
    }
    filterItems()
  };


  //Filter products according to filters
  const filterItems = () => {
    if (selectedFilters.Gender.length + selectedFilters.Material.length + selectedFilters.Category.length
      >= 0) {

      let filteredOnce = [];

      productData.forEach((product) => {
        if (selectedFilters.Gender.length > 0) {
          if (selectedFilters.Gender.includes(product.Gender)) {
            filteredOnce.push(product)
          }
        }
        else {
          filteredOnce = productData;
        }
      })


      let filteredTwice = [];

      filteredOnce.forEach((product) => {
        if (selectedFilters.Material.length > 0) {
          if (selectedFilters.Material.includes(product.Material)) {
            filteredTwice.push(product)
          }
        }
        else {
          filteredTwice = filteredOnce
        }
      })

      let filteredThrice = [];

      filteredTwice.forEach((product) => {
        if (selectedFilters.Category.length > 0) {
          if (selectedFilters.Category.includes(product.Category)) {
            filteredThrice.push(product)
          }
        } else {
          filteredThrice = filteredTwice;
        }
      })

      setFilteredProducts(filteredThrice);
    } else {
      setFilteredProducts([...productData]);
    }
  };


  //important to spell right here filters to work
  const Gender = ["Male", "Female", "Child"]
  const Material = ["Silver", "Gold"]
  const Categories = ["Bracelet", "Necklace", "Earring", "Collection"]

  return (
    <div className='h-full'>
      <div className='flex flex-row h-full'>
        <div className="bg-white pl-4 py-2 w-[20%] flex flex-col gap-5">
          <div>
            <div className='font-Corm text-2xl pb-1'>Sort By</div>
            <div className='flex-row gap-1 justify-between px-1 py-2'>
              <select className='p-1 m-1 border'>
                <option>Price</option>
                <option>Discount</option>
                <option>Popularity</option>
              </select>
              <select className='p-1 m-1 border'>
                <option>Increasing</option>
                <option>Decreasing</option>
              </select>
            </div>

          </div>
          <div>
            <p className='font-Corm text-2xl pb-1'>Gender</p>
            <div className='flex flex-row flex-wrap pl-4 gap-2'>
              {
                Gender.map((item, index) =>
                  <div onClick={() => { handleFilterButtonClick(item, "Gender") }} className='w-fit border' key={index}>
                    <FilterButton text={item} className={"bg-navy text-white "} />
                  </div>
                )
              }
            </div>
          </div>
          <div>
            <p className='font-Corm text-2xl pb-1'>Material</p>
            <div className='flex flex-row flex-wrap pl-4 gap-2'>
              {
                Material.map((item, index) =>
                  <div onClick={() => handleFilterButtonClick(item, "Material")} key={index}>
                    <FilterButton text={item} className={"bg-yellow text-gray-500"} />
                  </div>
                )
              }</div>
          </div>
          <div>
            <p className='font-Corm text-2xl pb-1'>Categories</p>
            <div className='flex flex-row flex-wrap pl-4 gap-2'>
              {
                Categories.map((item, index) =>
                  <div onClick={() => handleFilterButtonClick(item, "Category")} key={index}>
                    <FilterButton text={item} className={"bg-navy text-white"} />
                  </div>
                )
              }</div>
          </div>

        </div>
        <div className=" w-[60%]">
          <div className='flex px-auto py-4 px-3 items-center'>
            <div className=' p-3 flex flex-wrap gap-3 '>
              {filteredProducts.length > 0 ?
                filteredProducts.map((item, index) => {
                  return <Card key={index} Name={item.Name} Image={item.Image} Gender={item.Gender} Material={item.Material} Category={item.Category} Price={item.Price} />
                }) : <div>
                  <h1 className='lowercase'>we dont have that right now, would you like to search for something else like : </h1>
                  <Trending />
                </div>
              }
            </div>
          </div>
        </div>

        <div className="bg-dark w-[20%]" onClick={() => navigate("/cart")}>
          <p className='text-xl font-semibold text-center p-2 text-white'>Your Cart</p>
          <div >

            {
              cartItems.map((item, index) => {
                return <div>
                  <CartListItem Name={item.Name} Image={item.Image} key={index} />
                </div>
              })
            }
          </div>

        </div>
      </div>
    </div >
  )
}

export default Layout()(Search)
