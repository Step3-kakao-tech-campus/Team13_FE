import ReactQuill, { Quill } from "react-quill";
import { useRef } from "react";
import { PropTypes } from "prop-types";
import ImageResize from "quill-image-resize-module-react/src/ImageResize.js";
import "react-quill/dist/quill.snow.css";
import "@/styles/quill.custom.css";
import styled from "styled-components";

Quill.register("modules/imageResize", ImageResize);

const Styled = {
  Container: styled.div`
    margin-bottom: calc(42px + 1.5rem);

    @media screen and (max-width: 633px) {
      margin-bottom: calc(66px + 1.5rem);
    }

    @media screen and (max-width: 392px) {
      margin-bottom: calc(90px + 1.5rem);
    }

    @media screen and (max-width: 323px) {
      margin-bottom: calc(114px + 1.5rem);
    }
  `,
};

/**
 * 텍스트 에디터 컴포넌트
 * @param {string} text 에디터에 작성한 문자열 state
 * @param {React.Dispatch.SetStateAction} setText 에디터에 작성한 문자열 setState
 * @param props 기타
 */

function TextEditor({ text, setText, ...props }) {
  const quillRef = useRef();

  const modules = {
    toolbar: {
      container: [
        [{ header: [6, 5, false, 4, 3, 2, 1] }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }, "link"],
        [{ color: [] }, { background: [] }],
        ["image", "video"],
      ],
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
  };

  return (
    <Styled.Container>
      <ReactQuill
        ref={quillRef}
        theme={"snow"}
        modules={modules}
        value={text}
        onChange={(content) => setText(content)}
        {...props}
      />
    </Styled.Container>
  );
}

TextEditor.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};

export default TextEditor;
