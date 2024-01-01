import { Route, Routes } from "react-router-dom";
import PostList from "pages/post-list-page";
import TodoList from "pages/todo-list-page";
import UserList from "pages/user-list-page";
import Main from "widgets/main";

export const Routing = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Main/>}/>
            <Route path="posts" element={<PostList/>}/>
            <Route path="todos" element={<TodoList/>}/>
            <Route path="users" element={<UserList/>}/>
        </Routes>
    )
}