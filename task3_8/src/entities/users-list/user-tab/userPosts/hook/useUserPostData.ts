import { useQuery } from "@tanstack/react-query";
import { getUserPosts } from "shared/api/users-api";

export const useUserPostData = (userId: any) =>{
    return useQuery({
        queryKey: ['albums', userId], 
        queryFn:() => getUserPosts(userId),
        refetchOnWindowFocus: false
    })
};