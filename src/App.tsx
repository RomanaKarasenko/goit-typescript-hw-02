import { useEffect, useState } from "react";
import { fetchImages } from "./API/keys-api.js";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import ErrorMessage from "./components/errorMessage/ErrorMessage.js";
import ImageGallery from "./components/imageGallery/ImageGallery.jsx";
import ImageModal from "./components/imageModal/ImageModal.jsx";
import LoaderComponent from "./components/loaderComponent/LoaderComponent.jsx";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";

interface ModalData {
  imageSrc: string;
  imageAltDescription: string;
  imageDescription: string;
  imageAuthor: string;
  imageLikes: number;
}
interface Props {
  message: string;
}

function App() {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({
    imageSrc: "",
    imageAltDescription: "",
    imageDescription: "",
    imageAuthor: "",
    imageLikes: 0,
  });

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchPhotos = async () => {
      try {
        setError(false);
        setLoading(true);
        setLoadMoreBtn(false);
        const data = await fetchImages(query, page);
        if (data.total === 0) {
          setImages([]);
          setErrorMsg(
            "Sorry, I couldn't find pictures for your entry please try again."
          );
          setError(true);
        } else {
          setImages((prevImages) => prevImages.concat(data.results));
          setLoadMoreBtn(!!(data.total_pages && data.total_pages !== page));
          if (page === 1) {
            toast.success(`${data.total} photos were found for your request`, {
              position: "top-left",
            });
          }
        }
      } catch (error: any) {
        let errorMessage = error.message;

        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          errorMessage = error.response.data.errors;
        }

        setErrorMsg(errorMessage);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSearchNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageData: ModalData) => {
    setModalData(imageData);
    openModal();
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {error && <ErrorMessage message={errorMsg} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {loading && <LoaderComponent loading={loading} />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={handleSearchNextPage} />}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        {...modalData}
      />
    </div>
  );
}

export default App;
