import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todos } from "shared/typecode/models";
import { deleteTodoById } from "shared/api/todos-api";

export const useDeleteTodo = () =>{
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: deleteTodoById,
        mutationKey: ['todos'],
        onMutate: async (id: number) => {
            return queryClient.setQueriesData<Todos[]>(['todos'], oldTodos => [...(oldTodos) || []].filter(item => item.id !== id))
        }
    })
};