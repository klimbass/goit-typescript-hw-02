import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: Props) {
  return (
    <button onClick={onClick} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}
