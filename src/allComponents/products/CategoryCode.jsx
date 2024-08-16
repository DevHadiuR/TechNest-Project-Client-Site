const CategoryCode = ({ handleBrand }) => {
  return (
    <>
      {/* price */}
      <div className="border-t-2 border-gray-300 py-3">
        <h1 className="text-lg font-medium">Price Range</h1>
        <form className="flex gap-5 mt-3">
          <input className="w-[50%]" placeholder="Min" type="number" />

          <input className="w-[50%]" placeholder="Max" type="number" />
        </form>
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
            <input type="checkbox" value="Laptop" />
            <label>Laptop</label>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" value="Mobile" />
            <label>Mobile</label>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" value="Keyboard" />
            <label>Keyboard</label>
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox" value="Mouse" />
            <label>Mouse</label>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryCode;
