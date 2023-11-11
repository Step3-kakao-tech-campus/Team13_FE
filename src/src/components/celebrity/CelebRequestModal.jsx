import BackdropModal from "@/components/common/modal/BackdropModal.jsx";

function CelebRequestModal({ setOpen }) {
  return (
    <BackdropModal
      setOpen={setOpen}
      modalStyle={{ padding: "3rem" }}
    ></BackdropModal>
  );
}

export default CelebRequestModal;
