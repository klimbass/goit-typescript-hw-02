import ImageCard from "../ImageCard/ImageCard";
import { ImageModalData, ImageObj } from "../commonInterfaces";
import css from "./ImageGallery.module.css";

type Props = {
  images: ImageObj[];
  handleModalToggle: (data: ImageModalData) => void;
};

export default function ImageGallery({ images, handleModalToggle }: Props) {
  return (
    <div>
      <ul className={css.gallery}>
        {images.map((item) => (
          <li key={item.id}>
            <ImageCard item={item} handleModalToggle={handleModalToggle} />
          </li>
        ))}
      </ul>
    </div>
  );
}
