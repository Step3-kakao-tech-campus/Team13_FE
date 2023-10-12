import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import SearchIcon from "@/assets/icon/SearchIcon.jsx";
import useOutsideClick from "@/hooks/useOutsideClick.js";
import CloseIcon from "@/assets/icon/CloseIcon.jsx";
import AutoSearchData from "@/components/create-fund/AutoSearchData.jsx";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    position: relative;
    padding: 0 1rem 0 2.75rem;
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    border: ${({ theme }) => theme.border.main};
    border-radius: 0.25rem;

    cursor: pointer;
  `,
  Input: styled.input`
    padding: 0.75rem 0;
    width: 100%;
    height: 100%;

    font-size: 1rem;
    border: none;
  `,
  AutoDataList: styled.ul`
    position: absolute;
    bottom: -17rem;
    left: 0;
    z-index: 10;

    margin: 2rem 0;
    width: 100%;
    height: calc(14rem + 6px);
    overflow-y: auto;

    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0.25rem;
    border: ${({ theme }) => theme.border.main};
  `,
  SelectedCeleb: styled.div`
    padding: 0.25rem 0.5rem;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    font-size: 14px;
    background-color: #d9d9d9;
    border-radius: 0.25rem;

    p {
      margin-right: 0.25rem;
    }

    button {
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
};

const sonnyData = {
  celebId: "sonny",
  profileUrl:
    "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202308/13/3756de8c-1ea6-4988-b063-25f26d9b76d5.jpg",
  celebName: "손흥민",
};

/**
 * 펀딩 주최 자동완성 기능이 포함된 셀럽 선택 컴포넌트
 * @param {Object<targetMoney: string | number , dueDate: string, celebId: string | number, celebName: string >} input 소개 input 상태
 * @param {React.Dispatch.SetStateAction} setInput set 소개 input 상태
 */

function AutoCelebSearch({ input, setInput }) {
  const [keyword, setKeyword] = useState("");
  const [isAutoDataListOpen, setIsAutoDataListOpen] = useState(false);

  const searchBarRef = useRef();
  useOutsideClick(searchBarRef, () => {
    setIsAutoDataListOpen(false);
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!keyword) return;
      // api 통신 후 검색 결과 업데이 updateData(keyword)
    }, 300);

    return () => clearTimeout(debounce);
  }, [keyword]);

  return (
    <Styled.Container ref={searchBarRef}>
      <SearchIcon size={24} style={{ position: "absolute", left: "0.75rem" }} />

      {!input.celebId && !input.celebName ? (
        <Styled.Input
          value={keyword}
          onInput={(e) => {
            setKeyword(e.target.value);
            setIsAutoDataListOpen(true);
          }}
        />
      ) : (
        <Styled.SelectedCeleb>
          <p>{input.celebName}</p>
          <button
            onClick={() => {
              setInput((prev) => {
                return { ...prev, celebId: "", celebName: "" };
              });
              setKeyword("");
            }}
          >
            <CloseIcon size={14} />
          </button>
        </Styled.SelectedCeleb>
      )}

      {isAutoDataListOpen && (
        <Styled.AutoDataList>
          {new Array(10).fill(sonnyData).map((data, index) => (
            <AutoSearchData
              key={index}
              profileUrl={data.profileUrl}
              celebName={data.celebName}
              onClick={() => {
                setInput((prev) => {
                  return {
                    ...prev,
                    celebId: data.celebId,
                    celebName: data.celebName,
                  };
                });
                setIsAutoDataListOpen(false);
              }}
            />
          ))}
        </Styled.AutoDataList>
      )}
    </Styled.Container>
  );
}

AutoCelebSearch.propTypes = {
  input: PropTypes.shape({
    targetMoney: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    dueDate: PropTypes.string,
    celebId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    celebName: PropTypes.string,
  }),
  setInput: PropTypes.func.isRequired,
};

export default AutoCelebSearch;
