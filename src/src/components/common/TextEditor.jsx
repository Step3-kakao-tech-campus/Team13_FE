import ReactQuill, { Quill } from "react-quill";
import { useRef } from "react";
import { PropTypes } from "prop-types";
import ImageResize from "quill-image-resize-module-react/src/ImageResize.js";
import "react-quill/dist/quill.snow.css";
import "@/styles/quill.custom.css";

Quill.register("modules/imageResize", ImageResize);

/**
 * 텍스트 에디터 컴포넌트
 * @param setText set text 상태
 * @param props 기타
 */

function TextEditor({ setText, ...props }) {
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
    <ReactQuill
      ref={quillRef}
      theme={"snow"}
      modules={modules}
      onChange={setText}
      {...props}
    />
  );
}

TextEditor.propTypes = {
  setText: PropTypes.func.isRequired,
};

export default TextEditor;
