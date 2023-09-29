export const navItem = [
  {
    name: "Indonesia",
    path: "/",
  },
  {
    name: "Programming",
    path: "/programming",
  },
  {
    name: "Health",
    path: "/health",
  },
];

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const apiKey2 = import.meta.env.VITE_API_KEY_2;
const pageSize = 9;

export const apiUrl = {
  indonesia: `${baseUrl}/top-headlines?country=id&pageSize=${pageSize}&apiKey=${apiKey2}`,
  programming: `${baseUrl}/everything?q=programming&pageSize=${pageSize}&apiKey=${apiKey2}`,
  health: `${baseUrl}/everything?q=health&pageSize=${pageSize}&apiKey=${apiKey2}`,
  search: `${baseUrl}/everything?pageSize=${pageSize}&apiKey=${apiKey2}`,
};
