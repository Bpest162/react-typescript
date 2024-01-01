import { useQuery } from "@tanstack/react-query";
import { getUserTodos } from "shared/api/users-api";

export const useUserTodosData = (userId: string | undefined) => {
    return useQuery({
        queryFn:() => getUserTodos(userId),
        queryKey: ['todos', userId],
        refetchOnWindowFocus: false
    })
};

