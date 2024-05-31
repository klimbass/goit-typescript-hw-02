import css from "./ImageModal.module.css";
import Modal from "react-modal";
import { FcLike } from "react-icons/fc";
import { HiOutlineUserCircle } from "react-icons/hi";
Modal.setAppElement("#root");

export default function ImageModal({
  modalIsOpen,
  handleModalToggle,
  modalData,
}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalToggle}
        contentLabel="Modal"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(50, 50, 50, 0.8)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "#FAFAFA",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "none",
          },
        }}
      >
        <div className={css.container}>
          <img src={modalData.url} alt={modalData.alt} className={css.img} />

          <div className={css.discr}>
            <FcLike size={22} />
            <p className={css.likes}>{modalData.likes}</p>
          </div>

          <a className={css.author} href={modalData.author.url}>
            <HiOutlineUserCircle size={30} />
            <p className={css.link}>{modalData.author.name}</p>
          </a>
        </div>
      </Modal>
    </div>
  );
}
