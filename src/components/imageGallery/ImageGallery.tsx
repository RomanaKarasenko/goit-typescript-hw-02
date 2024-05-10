import ImageCard from "../imageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface Props {
  images: Image[];
  onImageClick: (data: any) => void; 
}

const ImageGallery: React.FC<Props> = ({ images, onImageClick }) => {
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
