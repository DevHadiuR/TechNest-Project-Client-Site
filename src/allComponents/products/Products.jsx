import { useState } from "react";
import SortAndSearch from "./SortAndSearch";
import DrawerCode from "./DrawerCode";
import CategoryCode from "./CategoryCode";
import { Typography } from "@material-tailwind/react";
import SingleProduct from "./SingleProduct";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const handleDropDownCategory = (entry) => {
    setSelectedCategory(entry);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // const value = e.target.searchTitle.value;
    setSearch(searchText);
  };

  console.log(selectedCategory, search);

  // Fetch data
  const { data: Products = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allProducts"],
  });

  const getData = async () => {
    const { data } = await axios("/data.json");
    setSearchText("");
    return data;
  };

  return (
    <div className="pt-20">
      <>
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-medium text-[#4F1787]">
          All Products
        </h1>
        <p className="w-[90%] lg:w-[60%] mx-auto mt-3 text-center">
          Explore our top tech essentials. From powerful laptops and mobile
          phones to precision keyboards and mice, find everything you need to
          boost your digital experience..
        </p>
      </>
      <div className="mt-10 lg:gap-5 grid grid-cols-4 w-[95%] mx-auto">
        {/* left */}
        <div className="hidden lg:block p-3 border border-purple-300">
          <Typography className="mb-5" variant="h5" color="blue-gray">
            Categorize products
          </Typography>
          <CategoryCode></CategoryCode>
        </div>
        {/* right */}
        <div className="col-span-4 lg:col-span-3 ">
          <div>
            {/* drawer and sort and search div */}
            <>
              <div className="flex justify-between gap-5 lg:gap-0">
                <div className="lg:hidden">
                  <DrawerCode></DrawerCode>
                </div>
                <>
                  <SortAndSearch
                    searchText={searchText}
                    setSearchText={setSearchText}
                    handleSearch={handleSearch}
                    handleDropDownCategory={handleDropDownCategory}
                  ></SortAndSearch>
                </>
              </div>
            </>
          </div>
          {/* all products card div */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Products.map((Product) => (
              <SingleProduct
                key={Product.Ratings}
                Product={Product}
              ></SingleProduct>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
