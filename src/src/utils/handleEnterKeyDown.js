const handleEnterKeyDown = (event, callback) => {
  if (event.key !== "Enter") return;

  callback?.();
};

export default handleEnterKeyDown;
