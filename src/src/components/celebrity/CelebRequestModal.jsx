import { PropTypes } from "prop-types";
import BackdropModal from "@/components/common/modal/BackdropModal.jsx";

function CelebRequestModal({ setOpen }) {
  return (
    <BackdropModal setOpen={setOpen} modalStyle={{ padding: "3rem" }}>
      <h1>dfs</h1>
    </BackdropModal>
  );
}

CelebRequestModal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default CelebRequestModal;
