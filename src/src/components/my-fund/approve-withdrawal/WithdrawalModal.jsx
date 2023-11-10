import BackdropModal from "@/components/common/modal/BackdropModal.jsx";

function WithdrawalModal({ setOpen }) {
  return (
    <BackdropModal setOpen={setOpen} modalStyle={{ padding: "3rem" }}>
      <h1>출금 승인? 거절?</h1>
    </BackdropModal>
  );
}

export default WithdrawalModal;
