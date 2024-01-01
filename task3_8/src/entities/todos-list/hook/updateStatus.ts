import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleTodoStatus } from "shared/api/todos-api/index";
import { Todos } from "shared/typecode/models";

export const updateStatus = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: toggleTodoStatus,
        mutationKey: ['todos'],
        onMutate: async (newTodo) => {
            await queryClient.cancelQueries({ queryKey: ['todos']})
        
            const previousTodo = queryClient.getQueryData(['todos']) as Todos[]
            const updatedTodos = [...previousTodo]
    
            const index = updatedTodos.findIndex((todo) => todo.id === newTodo.id)
    
            if(index !== -1){
                updatedTodos[index] = {
                    ...updatedTodos[index],
                    ...newTodo
                }
                queryClient.setQueryData(['todos'], updatedTodos)
            }
            return () => queryClient.setQueryData(['todos'], previousTodo)
        },
        onSettled() {
            console.log("Mutation completed.");
        }
    })
};