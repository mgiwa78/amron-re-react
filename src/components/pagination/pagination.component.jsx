import React from "react";
import { PaginationContainer } from "./pagination.styles";

const Pagination = () => {
  return (
    <PaginationContainer>
      <div className="pagination-box">
        <div className="pagintion-item on">1</div>
        <div className="pagintion-item">2</div>
        <div className="pagintion-item btn">
          <div className="arrw"></div>
        </div>
      </div>
    </PaginationContainer>
  );
};

export default Pagination;
