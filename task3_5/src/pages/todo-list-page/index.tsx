import  TodoCard  from 'entities/ui/todo-card';
import './index.scss';


const TodoList = () =>{
    return <div className='todo-list-section'>
        <h2 className='todo-list-title'>Todo List</h2>
        <TodoCard/>
    </div>
}

export default TodoList;