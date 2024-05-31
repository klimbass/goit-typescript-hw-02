import ImageCard from "../ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, handleModalToggle }) {
  return (
    <div>
      <ul className={css.gallery}>
        {/* <ImageCard articles={articles} handleModalToggle={handleModalToggle} /> */}
        {images.map((item) => {
          return (
            <li key={item.id}>
              <ImageCard item={item} handleModalToggle={handleModalToggle} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
