import { useQuery } from "@tanstack/react-query";
import { getUserAlbums } from "shared/api/users-api";

export const useUserAlbums = (userId: any) =>{
    return useQuery(['albums', userId], () => getUserAlbums(userId))
};