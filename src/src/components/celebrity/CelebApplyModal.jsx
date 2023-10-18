import BackdropModal from "../common/modal/BackdropModal.jsx";

function CelebApplyModal({ setOpen }) {
  return (
    <BackdropModal
      setOpen={setOpen}
      modalStyle={{ width: "22.4rem", height: "43.5rem" }}
    >
      <h1>신청서를 담아올게요 커밍순!</h1>
      <h1>곧 작업이 시작됩니다</h1>
    </BackdropModal>
  );
}

export default CelebApplyModal;
