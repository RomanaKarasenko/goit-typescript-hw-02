import { BsSearchHeartFill } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchValue = form.elements.searchInput.value;

    if (searchValue.trim() === "") {
      toast.error("Please enter the search term!", {
        position: "top-right",
      });
      return;
    }
    onSearch(searchValue);
    form.reset();
  };

  return (
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="searchInput"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button
          className={css.searchBtn}
          type="submit"
          aria-label="search images and photos"
          title="Search"
        >
          <BsSearchHeartFill />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
