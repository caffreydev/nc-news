export const dateFormatter = (dateStr) => {
  return `${dateStr.slice(8, 10)}/${dateStr.slice(5, 7)}/${dateStr.slice(
    0,
    4
  )}`;
};
