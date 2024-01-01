import { getAllTodos, toggleTodoStatus } from "shared/api/todos-api/index";
import "./index.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todos } from "shared/typecode/models";

const TodoCard = () => {
    const queryClient = useQueryClient()

    const { data, error, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: getAllTodos,
        refetchOnWindowFocus: false
    })

    const updateStatus = useMutation({
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

    if (error) return <p>Error!</p>;
    if (isLoading) return <p>Loading...</p>;

    return (
        <ul className="todo-card">
            {data?.map((todo) => (
                <li 
                    onClick={() => updateStatus.mutate({ ...todo, completed: !todo.completed})} 
                    className="todo-card__item"
                    style={{ 
                        backgroundColor: todo.completed ? "#f4f4f4" : "",
                        color: todo.completed ? "#9f9f9f" : "",
                        textDecoration: todo.completed ? "line-through" : ""
                    }} 
                    key={todo.id}
                > 
                    {todo.title} 
                    <span>({todo.completed.toString()})</span> 
                </li>
            ))}
        </ul>
    )
};
export default TodoCard;
