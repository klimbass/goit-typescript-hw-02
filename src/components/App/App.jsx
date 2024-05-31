import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchKey, fetchRequest } from "../../fetchRequest";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [query, setQuery] = useState("");
  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(1);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    url: "",
    likes: "",
    alt: "",
    author: {
      name: "",
      url: "",
    },
  });

  const handleModalToggle = (url, likes, alt, user) => {
    modalIsOpen
      ? setModalIsOpen(false)
      : (setModalIsOpen(true),
        setModalData({
          url: url,
          likes: likes,
          alt: alt,
          author: { name: user.name, url: user.links.html },
        }));
  };

  const onClickLoadMoreBtn = () => {
    setPage(page + 1);
  };

  const onSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImage() {
      try {
        setIsLoading(true);
        const key = await fetchKey();
        const data = await fetchRequest(query, perPage, page, key);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImage();
  }, [query, page]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery images={images} handleModalToggle={handleModalToggle} />
      )}
      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={onClickLoadMoreBtn} />
      )}

      <ImageModal
        modalIsOpen={modalIsOpen}
        handleModalToggle={handleModalToggle}
        modalData={modalData}
      />
    </div>
  );
}
