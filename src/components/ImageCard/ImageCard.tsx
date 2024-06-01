import { ImageModalData, ImageObj } from "../commonInterfaces";
import css from "./ImageCard.module.css";

type Props = {
  item: ImageObj;
  handleModalToggle: (data: ImageModalData) => void;
};

export default function ImageCard({ item, handleModalToggle }: Props) {
  const handleClick = () => {
    const modalData: ImageModalData = {
      url: item.urls.regular,
      likes: item.likes,
      alt: item.alt_description,
      author: {
        name: item.user.name,
        url: item.user.links.html,
      },
    };
    handleModalToggle(modalData);
  };

  return (
    <div>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        width="315"
        height="200"
        onClick={handleClick}
      />
    </div>
  );
}
