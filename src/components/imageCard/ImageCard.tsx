import css from "./ImageCard.module.css";

interface ImageData {
  imageSrc: string;
  imageDescription: string;
  imageAltDescription: string;
  imageAutor: string;
  imageLikes: number;
}

interface Props {
  image: {
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
  };
  onImageClick: (data: ImageData) => void;
}

const ImageCard: React.FC<Props> = ({ image, onImageClick }) => {
  const imageData: ImageData = {
    imageSrc: image.urls.regular,
    imageDescription: image.description,
    imageAltDescription: image.alt_description,
    imageAutor: image.user.name,
    imageLikes: image.likes,
  };

  return (
    <div className={css.imageCards}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(imageData)}
      />
    </div>
  );
};

export default ImageCard;
