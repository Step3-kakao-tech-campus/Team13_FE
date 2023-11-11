const formatDateToStringTime = (date) => {
  return date.toISOString().split(".", 1);
};

export default formatDateToStringTime;
