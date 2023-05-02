
import { useQuery } from "react-query";
import { fetchData } from "./utils";


export type BlogPost = {
    id: string;
    date: string;
    value: string;
}

export const usePostsQuery = () => {
    const queryFn = fetchData("/posts")

    return useQuery({
        queryFn,
        queryKey: ["blogPosts"]
    })
}