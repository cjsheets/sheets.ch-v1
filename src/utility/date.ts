export const getMonthAbbreviation = (date: Date) => {
  const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthAbbreviations[date.getMonth()];
};