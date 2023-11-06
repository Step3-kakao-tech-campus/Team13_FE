import BackdropModal from "@/components/common/modal/BackdropModal.jsx";
import styled from "styled-components";
import ImagePreviewButton from "@/components/common/button/ImagePreviewButton.jsx";
import useSetImageFileToUrl from "@/hooks/useSetImageFileToUrl.js";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    padding: 0 2rem;
    min-width: 20rem;
    min-height: 10rem;

    label {
      min-height: 10rem;
    }
  `,

  Title: styled.div`
    font-size: 1.5rem;
    font-weight: 600;
  `,

  OrganizerText: styled.div`
    padding-top: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .bold {
      font-size: 1.25rem;
      font-weight: 600;
      padding-bottom: 0.5rem;
    }
  `,

  UserImage: styled.img`
    margin-top: 1rem;
    min-height: 10rem;
    max-width: 80vw;
  `,
};

/**
 * 증명내역을 자세히 볼 수 있는 모달창
 * @param {boolean} isOrganizer
 * @param {string} title
 * @param {string} evidenceImgUrl
 * @param {function} setOpen
 */

function EvidenceModal({ isOrganizer, title, evidenceImgUrl, setOpen }) {
  const { file, imageUrl, handleFileChange, handleFileDelete } =
    useSetImageFileToUrl(evidenceImgUrl);

  // TODO: 증명내역 이미지 등록하는 api 통신 추가
  return (
    <BackdropModal setOpen={setOpen}>
      <Styled.Container>
        <Styled.Title>{title}</Styled.Title>
        {isOrganizer && (
          <Styled.OrganizerText>
            <div className="bold">
              증명가능한 내역을 아래에 첨부해주세요 (예시: 영수증)
            </div>
            <div>전체 내용이 모두 보이게 선명하게 촬영해주세요!</div>
          </Styled.OrganizerText>
        )}
        {isOrganizer ? (
          <ImagePreviewButton
            imageUrl={imageUrl}
            handleFileDelete={handleFileDelete}
            handleFileChange={handleFileChange}
            imageAspectRatio={null}
            containerStyle={{ maxWidth: "80vw" }}
          />
        ) : (
          <Styled.UserImage src={evidenceImgUrl} alt={""} />
        )}
      </Styled.Container>
    </BackdropModal>
  );
}

EvidenceModal.propTypes = {
  isOrganizer: PropTypes.bool,
  title: PropTypes.string,
  evidenceUrl: PropTypes.string,
  setOpen: PropTypes.func,
};

export default EvidenceModal;
