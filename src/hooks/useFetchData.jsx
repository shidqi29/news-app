import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchData = (url) => {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await axios.get(url);
      return response.data;
    },
    keepPreviousData: true,
    staleTime: Infinity,
  });
};
