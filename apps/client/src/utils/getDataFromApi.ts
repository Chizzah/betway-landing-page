const url = import.meta.env.VITE_API_URL;

export const getDataFromApi = async () => {
  const res = await fetch(url);

  const result = await res.json();

  return result.data;
};