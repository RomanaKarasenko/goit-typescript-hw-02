import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={css.imageGalleryStyle}>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} onImageClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
