import css from "./LoadMoreBtn.module.css";
interface Props {
  onLoadMore: () => void;
}
const LoadMoreBtn: React.FC<Props> = ({ onLoadMore }) => {
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
