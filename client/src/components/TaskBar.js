import Wrapper from "../assets/wrappers/TaskBar";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineTableRows } from "react-icons/md";
import { GrSort } from "react-icons/gr";
import { Link } from "react-router-dom";
import SortBar from "./SortBar";
import { useState } from "react";

export default function TaskBar({
  handleDisplay,
  handleSortOption,
  handleSearchChange,
}) {
  const [showSortBar, setShowSortBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleShowSort = () => {
    setShowSortBar(!showSortBar);
  };
  const handleSetSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearchChange(value);
  };

  return (
    <Wrapper>
      <div className="task-bar">
        <div className="task-line">
          <div className="layout-icons">
            <BsFillGridFill
              size={10}
              onClick={() => {
                handleDisplay(false);
              }}
            />
            <MdOutlineTableRows
              size={15}
              onClick={() => {
                handleDisplay(true);
              }}
            />
            |
            <GrSort size={15} onClick={handleShowSort} />
            {showSortBar && (
              <div className="sort-bar-container">
                <SortBar handleSortOption={handleSortOption} />
              </div>
            )}
          </div>
          <input
            onChange={handleSetSearch}
            value={searchQuery}
            className="search-input"
            placeholder="search recipes"
          />
          <Link to="/dashboard/create" className="link task-link create-link">
            Create +
          </Link>
          {/* <div></div> */}
        </div>
      </div>
    </Wrapper>
  );
}
