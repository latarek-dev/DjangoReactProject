import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./utils"

export type Post = {
    author: string;
    content: null;
    description: null
    publishedAt: string;
    source: {id: string, name: string}
    title: string;
    url: string;
    urlToImage: string;
}

export type News = {
    status: string;
    totalResults: number;
    articles: Post[];
};

type useGetNewsQueryType = {
    countryId: string;
    categoryId: string;
}

export const useGetNewsQuery = ({countryId, categoryId}: useGetNewsQueryType) => {

    const queryFn = fetchData<News>(`http://127.0.0.1:8000/polls/top-headlines/?country=${countryId}&category=${categoryId}`)

    return useQuery({
        queryFn,
        queryKey: ["newsPosts", countryId, categoryId]
    })
}