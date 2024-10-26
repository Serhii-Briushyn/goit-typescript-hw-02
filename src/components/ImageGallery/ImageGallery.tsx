import { Images, OnImageClick } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

export interface ImageGalleryProps {
  images: Images[];
  onImageClick: OnImageClick;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={styles.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
