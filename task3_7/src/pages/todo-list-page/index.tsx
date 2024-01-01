import  TodoCard  from 'entities/todos-list';
import './index.scss';


const TodosPage = () =>{
    return <div className='todo-list-section'>
        <h2 className='todo-list-title'>Todo List</h2>
        <TodoCard/>
    </div>
}

export default TodosPage;