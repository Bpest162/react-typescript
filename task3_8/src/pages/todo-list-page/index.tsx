import  TodoCard  from 'entities/todos-list';
import CreateTodos from 'entities/todos-list/ui/new.Todo';
import './index.scss';


const TodosPage = () =>{
    return <div className='todo-list-section'>
        <h2 className='todo-list-title'>Todo List</h2>
        <CreateTodos/>
        <TodoCard/>
    </div>
}

export default TodosPage;