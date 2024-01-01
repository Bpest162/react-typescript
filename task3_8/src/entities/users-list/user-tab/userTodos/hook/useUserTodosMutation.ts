import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserTodos } from "shared/api/users-api";
import { Todos } from "shared/typecode/models";


export const toggleStatus = (userId: string | undefined) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: getUserTodos,
        mutationKey: ['todos', userId],
        onMutate: async (newTodo) => {
            await queryClient.cancelQueries({ queryKey: ['todos', userId]})
        
            const previousTodo = queryClient.getQueryData(['todos', userId]) as Todos[]
            const updatedTodos = [...previousTodo]
    
            const index = updatedTodos.findIndex((todo) => todo.id === newTodo.id)
    
            if(index !== -1){
                updatedTodos[index] = {
                    ...updatedTodos[index],
                    ...newTodo
                }
                queryClient.setQueryData(['todos', userId], updatedTodos)
            }
            return () => queryClient.setQueryData(['todos', userId], previousTodo)
        },
        onSettled() {
            console.log("Mutation completed.");
        }
    })
};
