import { useParams } from "react-router-dom";
import { useUserTodosData } from "./hook/useUserTodosData";
import { toggleStatus } from "./hook/useUserTodosMutation";
import './index.scss';


const UserTodos = () => {
    const { userId } = useParams();
    const { data, isError, isLoading } = useUserTodosData(userId);
    const { mutate: mutate } = toggleStatus(userId)

    if(isError){
        return <p>Error</p>
    }
    if(isLoading){
        return <p>Loading</p>
    }

    return(
        <ul className="user-todos-list"> 
            {data?.map((todo) => (
                <li className="user-todos-list__items" key={todo.id} onClick={() => mutate({ ...todo, completed: !todo.completed})}>
                    <div className="inputWrap">
                        <input 
                            onChange={() => mutate({ ...todo, completed: !todo.completed})}
                            type="checkbox"
                            checked={todo.completed}
                            id={todo.title}
                            name="complited"
                            className=""
                        />
                        <label htmlFor={todo.title}></label>
                    </div>
                    <p 
                        style={{ 
                            backgroundColor: todo.completed ? "#f4f4f4" : "",
                            color: todo.completed ? "#9f9f9f" : "",
                            textDecoration: todo.completed ? "line-through" : ""
                        }} 
                    >
                        {todo.title}
                    </p>
                </li>
            ))}
        </ul>
    )
}
export default UserTodos;