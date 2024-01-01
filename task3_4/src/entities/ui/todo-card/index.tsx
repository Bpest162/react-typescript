import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "shared/api/typecode/base";
import './index.scss';


const TodoCard = () =>{
    const { data, error, isLoading} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos
    });

    if(error) return <p>{error.message}</p>
    if(isLoading) return <p>Loading...</p>

    return(
        <ul className="todo-card">
            {data?.map((todo) => (
                <li className="todo-card__item" key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    )
};
export default TodoCard;