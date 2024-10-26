import { Images, OnImageClick } from "../../types";
import styles from "./ImageCard.module.css";

export interface ImageCardProps {
  image: Images;
  onImageClick: OnImageClick;
}

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description || "Image without description"}
      />
    </div>
  );
};

export default ImageCard;
