import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { fetchKey, fetchRequest } from "../../fetchRequest";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./App.module.css";
import { ImageModalData, ImageObj } from "../commonInterfaces";

export default function App() {
  const [images, setImages] = useState<ImageObj[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const [perPage] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [modalData, setModalData] = useState<ImageModalData>({
    url: "",
    likes: 0,
    alt: "",
    author: {
      name: "",
      url: "",
    },
  });

  const handleModalToggle = (): void => {
    setModalIsOpen((prev) => !prev);
  };

  const openModal = (data: ImageModalData): void => {
    setModalData(data);
    handleModalToggle();
  };

  const onClickLoadMoreBtn = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const onSubmit = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const getImage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const key: string = await fetchKey();
        const data = await fetchRequest<ImageObj[]>(query, perPage, page, key);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError("Unable to fetch images. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    getImage();
  }, [query, page, perPage]);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={onSubmit} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} handleModalToggle={openModal} />
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
