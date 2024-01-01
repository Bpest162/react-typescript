import { Route, Routes } from "react-router-dom";
import PostsPage from "pages/post-list-page";
import TodosPage from "pages/todo-list-page";
import UsersPage from "pages/user-list-page";
import UserPage from "entities/users-list/user-card/index";
import Main from "widgets/main";

export const Routing = () =>{
    return(
        <Routes>
            <Route path="/" element={ <Main/>}/>
            <Route path="/posts" element={<PostsPage/>}/>
            <Route path="/todos" element={<TodosPage/>}/>
            <Route path="/users" element={<UsersPage/>}/>
            <Route path="/users/:userId" element={<UserPage/>}/>
        </Routes>
    )
};