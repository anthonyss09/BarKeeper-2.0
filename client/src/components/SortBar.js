import Wrapper from "../assets/wrappers/SortBar";

export default function SortBar({ handleSortOption }) {
  return (
    <Wrapper>
      <aside className="sort-bar">
        <div
          className="sort-option"
          onClick={() => {
            handleSortOption("a-z");
          }}
        >
          a-z
        </div>
        <div
          className="sort-option"
          onClick={() => {
            handleSortOption("z-a");
          }}
        >
          z-a
        </div>
        <div
          className="sort-option"
          onClick={() => {
            handleSortOption("newest");
          }}
        >
          newest
        </div>
        <div
          className="sort-option"
          onClick={() => {
            handleSortOption("oldest");
          }}
        >
          oldest
        </div>
      </aside>
    </Wrapper>
  );
}
