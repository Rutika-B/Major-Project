function parseDate(dateString) {
  const [day, month, year] = dateString.split("-").map(Number);
  // Note: months in JavaScript Date are 0-indexed, so we need to subtract 1
  return new Date(year, month - 1, day);
}
export const QueryDates = ({ fromD, toD,dummyData }) => {
  const parFromD = parseDate(fromD);
  const partoD = parseDate(toD);

  const filteredDate = dummyData?.filter((item) => {
    const itemDate = parseDate(item.date);
    return itemDate >= parFromD && itemDate <= partoD;
  });
  return filteredDate;
};
