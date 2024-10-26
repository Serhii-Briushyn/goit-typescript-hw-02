import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { Images } from "../../types";

Modal.setAppElement("#root");

interface ImageModalProps {
  image: Images | null;
  onClose: () => void;
}

function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  const formattedDate = image.created_at
    ? new Date(image.created_at).toLocaleDateString("en-GB")
    : "No date";

  const formattedDescription = image.alt_description
    ? image.alt_description.charAt(0).toUpperCase() +
      image.alt_description.slice(1)
    : "No description";

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modal_wrapper}>
        <img
          className={styles.image}
          src={image.urls.regular}
          alt={image.alt_description}
        />
        <ul className={styles.list}>
          <li className={styles.item}>Author: {image.user.name}</li>
          <li className={styles.item}>Likes: {image.likes}</li>
          <li className={styles.item}>{formattedDescription}</li>
          <li className={styles.item}>{formattedDate}</li>
        </ul>
      </div>
    </Modal>
  );
}

export default ImageModal;
