"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

const PaginationCode = ({ pages, numberOfPages }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={numberOfPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default PaginationCode;
