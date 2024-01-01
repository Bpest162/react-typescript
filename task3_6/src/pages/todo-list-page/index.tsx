import  TodoCard  from 'entities/todos';
import './index.scss';


const TodoList = () =>{
    return <div className='todo-list-section'>
        <h2 className='todo-list-title'>Todo List</h2>
        <TodoCard/>
    </div>
}

export default TodoList;