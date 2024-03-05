export const Filter = (tradesData) => {//ordering of API response in ascending order of buy dates
  
  const sortedData = tradesData.slice().sort((a, b) => {
    // Convert buy_date strings to Date objects
    const dateA = new Date(a.buy_date.split("-").reverse().join("-"));
    const dateB = new Date(b.buy_date.split("-").reverse().join("-"));

    // Compare the dates
    return dateA - dateB;
  });
  return sortedData;
};
