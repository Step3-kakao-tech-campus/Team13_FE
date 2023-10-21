import styled from "styled-components";
import { useState } from "react";
import { PropTypes } from "prop-types";

const Styled = {
  Container: styled.div`
    padding: 1rem 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Button: styled.button`
    margin: 0 0.5rem;
    background-color: transparent;
    color: ${({ theme }) => theme.color.addition};
    white-space: nowrap;

    &:first-child {
      content: none;
    }

    &:hover {
      text-decoration: underline;
      text-underline-position: under;
      text-underline-color: ${({ theme }) => theme.color.body};
    }

    &:hover.selected {
      text-decoration: none;
    }

    &.selected {
      font-weight: 600;
      color: ${({ theme }) => theme.color.body};
    }
  `,
  Divide: styled.div`
    width: 1px;
    height: 1.25rem;
    border-left: 1px solid ${({ theme }) => theme.color.inactive};
  `,
};

/**
 * 검색 순서 선택 버튼 컴포넌트
 * @param {Array.<{ key: string | number, func: function}>} sortTypeArray  검색 순서 타입 배열
 */

function SortButtons({ sortTypeArray }) {
  const [selectedSort, setSelectedSort] = useState(sortTypeArray[0].key);

  return (
    <Styled.Container>
      {sortTypeArray.map((sortItem, index) => (
        <div
          key={sortItem.key}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {index !== 0 && <Styled.Divide />}
          <Styled.Button
            key={sortItem.key}
            value={sortItem.key}
            onClick={event => {
              if (selectedSort === event.target.value) return;
              setSelectedSort(event.target.value);
              sortItem.func();
            }}
            className={selectedSort === sortItem.key && "selected"}
          >
            {sortItem.key}
          </Styled.Button>
        </div>
      ))}
    </Styled.Container>
  );
}

SortButtons.propTypes = {
  sortTypeArray: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      func: PropTypes.func,
    }),
  ).isRequired,
};

export default SortButtons;
