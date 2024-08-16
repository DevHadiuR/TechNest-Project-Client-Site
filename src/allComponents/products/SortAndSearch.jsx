("use client");
import { Dropdown } from "flowbite-react";

const SortAndSearch = ({
  handleDropDownCategory,
  handleSearch,
  setSearchText,
  searchText,
}) => {
  return (
    <div className="w-full items-start md:items-center  flex justify-between flex-col-reverse  lg:flex-row">
      <div className="mt-3 lg:mt-0 w-full flex lg:block justify-end  lg:justify-normal">
        <Dropdown
          gradientDuoTone="purpleToPink"
          label="Sort"
          dismissOnClick={false}
          size="md"
          className="rounded-xl bg-[#EB3678] p-2"
        >
          <Dropdown.Item
            onClick={() => handleDropDownCategory("l>h")}
            className="text-md text-white hover:text-black rounded-xl"
          >
            Price ( Low {">"} High )
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleDropDownCategory("h>l")}
            className="text-md text-white hover:text-black rounded-xl"
          >
            Price ( High {">"} Low )
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => handleDropDownCategory("new")}
            className="text-md text-white hover:text-black rounded-xl"
          >
            Newest First
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="w-full">
        <form onSubmit={handleSearch}>
          <label className="input input-primary input-bordered flex items-center">
            <input
              name="searchTitle"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              className="border-none input input-bordered w-[90%] md:w-full"
              placeholder="Search Product By Name"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5  opacity-70 cursor-pointer hover:text-primary hover:scale-125 transition-all"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SortAndSearch;
