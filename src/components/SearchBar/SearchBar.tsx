import toast, { Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

import css from "./SearchBar.module.css";

const notify = () => toast.error("Please write your query...");

type Props = {
  onSubmit: (newQuery: string) => void;
}

export default function SearchBar({ onSubmit }: Props) {
 const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
  evt.preventDefault();

  const form = evt.currentTarget as HTMLFormElement;
  const topicInput = form.elements.namedItem("topic") as HTMLInputElement | null;

  if (!topicInput) {
    return notify();
  }

  const topic: string = topicInput.value;

  if (!topic) {
    return notify();
  }

  onSubmit(topic);
};


  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="topic"
          className={css.input}
        />
        <button type="submit" className={css.searchBtn}>
          <FiSearch size={16} />
        </button>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            className: css.toast,
          }}
        />
      </form>
    </header>
  );
}
