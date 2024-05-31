import css from "./ImageCard.module.css";

export default function ImageCard({ item, handleModalToggle }) {
  return (
    <div>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        width="315"
        height="200"
        onClick={() => {
          handleModalToggle(
            item.urls.regular,
            item.likes,
            item.alt_description,
            item.user
          );
        }}
      />
    </div>
  );
}
