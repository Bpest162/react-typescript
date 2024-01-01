import { Route, Routes } from "react-router-dom";
import PostList from "./postlist";
import TodoList from "./todolist";
import UserList from "./userlist";
import Main from "widgets/main";



export const Routing = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Main/>}/>
            <Route path="post" element={<PostList/>}/>
            <Route path="todo" element={<TodoList/>}/>
            <Route path="user" element={<UserList/>}/>
        </Routes>
    )
    
}