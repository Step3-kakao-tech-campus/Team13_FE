import { memo } from 'react';

function InProgress() {
  return (
    <>
      <img
        width='28'
        height='28'
        src='https://img.icons8.com/material-rounded/192/000000/user.png'
        alt='user'
      />
      <div id='license' style={{ display: 'none' }}>
        <a href='https://icons8.com/icon/83190/user'>User</a> icon by{' '}
        <a href='https://icons8.com'>Icons8</a>
      </div>
    </>
  );
}

export default memo(InProgress);
