import { useState } from "react";
import SortAndSearch from "./SortAndSearch";
import DrawerCode from "./DrawerCode";
import CategoryCode from "./CategoryCode";
import { Typography } from "@material-tailwind/react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  console.log(selectedCategory, search);

  const handleDropDownCategory = (entry) => {
    setSelectedCategory(entry);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // const value = e.target.searchTitle.value;
    setSearch(searchText);
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
          <div className="mt-5">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
