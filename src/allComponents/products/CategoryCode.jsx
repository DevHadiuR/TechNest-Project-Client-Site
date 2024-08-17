const CategoryCode = ({
  handleBrand,
  handleCategory,
  handlePrice,
  minPrice,
  maxPrice,
}) => {
  return (
    <>
      {/* price */}
      <div className="border-t-2 border-gray-300 py-3">
        <h1 className="text-lg font-medium">Price Range</h1>
        <div className="mt-3 flex justify-center items-center gap-3">
          <div className="">
            <input
              className="w-full border-purple-500 rounded-lg "
              placeholder="Min"
              type="number"
              min="50"
              name="min"
              value={minPrice}
              onChange={handlePrice}
            />
          </div>
          <div className="text-xl font-semibold">-</div>
          <div className="">
            <input
              className="input-style w-full border-purple-500 rounded-lg"
              placeholder="Max"
              type="number"
              max="550"
              name="max"
              value={maxPrice}
              onChange={handlePrice}
            />
          </div>
        </div>
      </div>
      {/* brand */}
      <div className="border-t-2 border-gray-300 py-3 mt-3">
        <h1 className="text-lg font-medium">Brand Name</h1>
        <form>
          <div className="flex gap-3 items-center">
            <input type="checkbox" onChange={handleBrand} value="Samsung" />
            <label>Samsung</label>
          </div>
          <div className="flex gap-3 items-center">
            <input onChange={handleBrand} type="checkbox" value="Walton" />
            <label>Walton</label>
          </div>
          <div className="flex gap-3 items-center">
            <input onChange={handleBrand} type="checkbox" value="Lenovo" />
            <label>Lenovo</label>
          </div>
        </form>
      </div>
      {/* category */}
      <div className="border-t-2 border-gray-300 py-3 mt-3">
        <h1 className="text-lg font-medium">Category Name</h1>
        <form>
          <div className="flex gap-3 items-center">
            <input onChange={handleCategory} type="checkbox" value="Laptop" />
            <label>Laptop</label>
          </div>
          <div className="flex gap-3 items-center">
            <input onChange={handleCategory} type="checkbox" value="Mobile" />
            <label>Mobile</label>
          </div>
          <div className="flex gap-3 items-center">
            <input onChange={handleCategory} type="checkbox" value="Keyboard" />
            <label>Keyboard</label>
          </div>
          <div className="flex gap-3 items-center">
            <input onChange={handleCategory} type="checkbox" value="Mouse" />
            <label>Mouse</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryCode;
