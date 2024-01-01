import { useQuery } from "@tanstack/react-query";
import { getUserById } from "shared/api/users-api/index";


export const useUserData = (userId: any) =>{
    return useQuery(['users', userId], ()=> getUserById(userId))

}