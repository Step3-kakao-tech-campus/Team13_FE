import ReactQuill, { Quill } from "react-quill";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const { getEditor } = quillRef.current;

    const handleImage = () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.click();
      input.onchange = async () => {
        const file = input.files[0];

        // 현재 커서 위치 저장
        const range = getEditor().getSelection(true);

        // 서버에 올려질때까지 표시할 로딩 placeholder 삽입
        getEditor().insertEmbed(range.index, "image", `/images/loading.gif`);

        try {
          const url = await uploadImage(file, filePath);

          // 정상적으로 업로드 됐다면 로딩 placeholder 삭제
          getEditor().deleteText(range.index, 1);
          // 받아온 url을 이미지 태그에 삽입
          getEditor().insertEmbed(range.index, "image", url);

          // 사용자 편의를 위해 커서 이미지 오른쪽으로 이동
          getEditor().setSelection(range.index + 1);
        } catch (e) {
          getEditor().deleteText(range.index, 1);
        }
      };
    };

    console.log(quillRef.current.getEditor());

    if (quillRef.current) {
      const toolbar = quillRef.current.getEditor().getModule("toolbar");
      toolbar.addHandler("image", handleImage);
    }
  }, []);

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
