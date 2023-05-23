import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./utils"

export type Post = {
  id: number;
  date: string;
  value: string;
};

type useGetNewsQueryType = {
    countryId: string;
    categoryId: string;
}

export const useGetNewsQuery = ({countryId, categoryId}: useGetNewsQueryType) => {

    const queryFn = fetchData<Post[]>(`http://127.0.0.1:8000/polls/top-headlines/?country=${countryId}&category=${categoryId}`)

    return useQuery({
        queryFn,
        queryKey: ["newsPosts"]
    })
}