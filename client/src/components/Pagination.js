import Wrapper from "../assets/wrappers/Pagination";
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";

export default function Pagination({
  columnDisplay,
  pageNumber,
  handlePageDecrement,
  handlePageIncrement,
  handleToFirstPage,
  numOfPages,
}) {
  return (
    <Wrapper>
      <div
        className={`pagination ${columnDisplay && "pagination-column-display"}`}
      >
        <div
          className={`arrow arrow-left ${pageNumber === 1 ? "light" : ""}`}
          onClick={handlePageDecrement}
          disabled
        >
          <TiChevronLeft size={20} />
        </div>
        <span className="page-number" onClick={handleToFirstPage}>
          1
        </span>
        {numOfPages > 1 && (
          <span>
            <span>... </span>
            <span className="lighter page-number">
              {pageNumber > 1 && pageNumber}
            </span>{" "}
          </span>
        )}
        <div
          className={`arrow arrow-right ${
            pageNumber === numOfPages ? "light" : ""
          }`}
          onClick={handlePageIncrement}
        >
          <TiChevronRight size={20} />
        </div>
      </div>
    </Wrapper>
  );
}
