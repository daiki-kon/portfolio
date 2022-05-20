export const formatDate = (date: Date) => {
  var year = date.getFullYear();
  var month = ('00' + (date.getMonth() + 1)).slice(-2);
  var day = ('00' + date.getDate()).slice(-2);
  return `${year}/${month}/${day}`;
};
