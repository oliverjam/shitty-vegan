export const moveDate = (time, num) => {
  const date = new Date(time);
  date.setDate(date.getDate() + num);
  return date.getTime();
};
