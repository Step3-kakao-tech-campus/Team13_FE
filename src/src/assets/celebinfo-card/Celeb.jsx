import { memo } from 'react';

function InProgress() {
  return (
    <>
      {/* 일단 이미지는 임의로 지정했습니다. 손흥민 사진의 경우엔 가공이 필요할수도 있다고 생각되어 아이콘에서 셀럽 사진 가져왔습니다 */}
      <img
        width='100'
        height='100'
        src='https://img.icons8.com/cotton/128/elon-musk.png'
        alt='elon-musk'
      />
      <div id='license' style={{ display: 'none' }}>
        <a href='https://icons8.com/icon/JRSpcX1RW3nT/elon-musk'>Elon Musk</a>{' '}
        icon by <a href='https://icons8.com'>Icons8</a>
      </div>
    </>
  );
}

export default memo(InProgress);
