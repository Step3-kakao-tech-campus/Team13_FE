import styled, { css } from "styled-components";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import Button from "./Button.jsx";

/**
 * 팔로우 버튼 컴포넌트
 * @param {node} children
 * @param {string} styleType 버튼 스타일 타입 BUTTON_TYPE.[PRIMARY || SECONDARY || TERTIARY]
 * @param {boolean} isHoverStyle hover 스타일링 적용 여부
 * @param {number} celebId 셀럽 아이디
 * @param {boolean} isFollowing 팔로잉 여부
 * @param props 기타
 */

function FollowButton({ children, styleType, isHoverStyle, celebId, isFollowing, ...props }) {
    
  const handleFollowClick = () => {
    // 팔로우 버튼 클릭 시 로직
    console.log('셀럽을 팔로우합니다!')
  }
  const handleUnFollowClick = () => {
    // 팔로우 버튼 클릭 시 로직
    console.log('셀럽을 언팔합니다!')
  }
  return (
    <div>
      {isFollowing ? (
        <Button
        styleType={BUTTON_TYPE.PRIMARY}
        onClick={handleUnFollowClick}
        {...props}
      >
        팔로잉
      </Button>
      ) : (
        <Button
          styleType={BUTTON_TYPE.SECONDARY}
          onClick={handleFollowClick}
          {...props}
        >
          팔로우
        </Button>
      )}
    </div>
      );
}

export default FollowButton;
