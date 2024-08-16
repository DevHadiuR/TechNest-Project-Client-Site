"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";

const PaginationCode = ({ numberOfPages, currentPage, setCurrentPage }) => {
  const totalPage = numberOfPages || 0;

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div className="flex overflow-x-auto sm:justify-center mt-10">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPage}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
};

export default PaginationCode;
