import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button
      className={css.loadMoreButton}
      onClick={() => onLoadMore()}
      title="Load more"
      type="button"
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;
