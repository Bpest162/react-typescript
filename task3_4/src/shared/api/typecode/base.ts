import axios from "axios";
import { Posts, Todos, Users } from "shared/api/typecode/models";

const API_URL = 'https://jsonplaceholder.typicode.com';

export async function fetchTodos(){
    const { data } = await axios.get(
        `${API_URL}/todos?_limit=7`
    )
    return data as Todos[];
};

export async function fetchPosts(){
    const { data } = await axios.get(
        `${API_URL}/posts?_limit=7`
    )
    return data as Posts[];
};

export async function fetchUsers(){
    const { data } = await axios.get(
        `${API_URL}/users?_limit=7`
    )
    return data as Users[];
};



