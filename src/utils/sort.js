export const sortByDate = (data, key) => {
  if (!Array.isArray(data)) {
    return [];
  }

  const sortedData = data.slice().sort((a, b) => new Date(b[key]) - new Date(a[key]));

  return sortedData;
};