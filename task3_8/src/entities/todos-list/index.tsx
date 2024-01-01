import { getAllTodos } from "shared/api/todos-api/index";
import { updateStatus } from "./hook/updateStatus";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./index.scss";
import { useQuery } from "@tanstack/react-query";
import { useDeleteTodo } from "./hook/deleteTodo";


const TodoCard = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['todos'],
        queryFn: getAllTodos,
        refetchOnWindowFocus: false
    })
    const { mutate: mutate } = updateStatus();
    const { mutate: handleDelete} = useDeleteTodo()

    if (error) return <p>Error!</p>;
    if (isLoading) return <p>Loading...</p>;

    return (
        <ul className="todo-card">
            {data?.map((todo) => (
                <li 
                    onClick={() => mutate({ ...todo, completed: !todo.completed})} 
                    className="todo-card__item"
                    style={{ 
                        backgroundColor: todo.completed ? "#f4f4f4" : "",
                        color: todo.completed ? "#9f9f9f" : "",
                        textDecoration: todo.completed ? "line-through" : ""
                    }} 
                    key={todo.id}
                > 
                    {todo.title} 
                    <button onClick={() => handleDelete(todo.id)}><FontAwesomeIcon icon={faTrash} style={{ color: '#EA5E32' }} /></button>
                </li>
            ))}
        </ul>
    )
};
export default TodoCard;
