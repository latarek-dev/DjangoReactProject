
import { useQuery } from "react-query";
import { createAxiosInstance } from "../utils/createAxiosInstance";


export type BlogPost = {
    id: string;
    date: string;
    value: string;
}

const axios = createAxiosInstance()

export const usePostsQuery = () => {
    const queryFn = async () => {
        const response = await axios.get("/posts")

        return response.data;
    }

    return useQuery({
        queryFn,
        queryKey: ["blogPosts"]
    })
}