import React from "react";

import { Pagination } from "@mui/material";

interface CustomPaginationProps {
  count: any;
  page: any;
  onChange: any;
}
const CustomPagination: React.FC<CustomPaginationProps> = ({
  page,
  count,
  onChange,
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onChange(value);
  };

  return (
    <Pagination
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px 0px",
      }}
      page={page}
      count={count}
      onChange={handlePageChange}
    />
  );
};

export default CustomPagination;
