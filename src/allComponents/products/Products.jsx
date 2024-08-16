import { useState } from "react";
import SortAndSearch from "./SortAndSearch";
import DrawerCode from "./DrawerCode";
import CategoryCode from "./CategoryCode";
import { Typography } from "@material-tailwind/react";
import SingleProduct from "./SingleProduct";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PaginationCode from "./PaginationCode";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  // handle categorizing (price , brand name , category name)
  const handleBrand = (e) => {
    const { value, checked } = e.target;
    setSelectedBrands((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((brand) => brand !== value);
      }
    });
  };

  const handleCategory = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((category) => category !== value);
      }
    });
  };

  // ---------------------------

  // handle dropdown and search
  const handleDropDownCategory = (entry) => {
    setSelectedCategory(entry);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // const value = e.target.searchTitle.value;
    setSearch(searchText);
  };
  // ------------------------

  // Fetch data counting For Pagination----------------
  const { data: Count = {} } = useQuery({
    queryFn: () => getDataCount(),
    queryKey: ["allProductsCount"],
  });

  const getDataCount = async () => {
    const { data } = await axios("http://localhost:5000/allProductsCount");
    return data.count;
  };

  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(Count / itemsPerPage);

  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  const [currentPage, setCurrentPage] = useState(1);

  // ------------------------

  // Fetch all data
  const { data: Products = [], isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: [
      "allProducts",
      itemsPerPage,
      currentPage,
      selectedCategory,
      search,
      selectedBrands,
      selectedCategories,
    ],
  });

  const getData = async () => {
    const { data } = await axios(
      `http://localhost:5000/allProducts?page=${currentPage}&size=${itemsPerPage}&selectedSort=${selectedCategory}&search=${search}&selectedBrands=${selectedBrands}&selectedCategories=${selectedCategories}`
    );
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
          <CategoryCode
            handleCategory={handleCategory}
            handleBrand={handleBrand}
          ></CategoryCode>
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
                key={Product._id}
                Product={Product}
              ></SingleProduct>
            ))}
          </div>
        </div>
      </div>
      {/* paginatin div */}
      <div>
        <PaginationCode
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfPages={numberOfPages}
        ></PaginationCode>
      </div>
    </div>
  );
};

export default Products;
