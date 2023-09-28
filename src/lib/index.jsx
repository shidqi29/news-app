const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const pageSize = 10;

export const apiUrl = {
  indonesia: `${baseUrl}/top-headlines?country=id&pageSize=${pageSize}&apiKey=${apiKey}`,
  programming: `${baseUrl}/everything?q=programming&pageSize=${pageSize}&apiKey=${apiKey}`,
  covid: `${baseUrl}/everything?q=covid&pageSize=${pageSize}&apiKey=${apiKey}`,
};
