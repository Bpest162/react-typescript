import { Users, UserAlbums, Todos, Posts } from "shared/typecode/models";
import apiClient from "../base";

export const getAllUsers = async () => {
    const res = await apiClient.get<Users[]>("/users");

    return res.data;
};

export const getUserById = async (userId: any) =>{
    return await apiClient.get<Users>(`/users/${userId}`);
};

export const getUserAlbums = async (userId: any) =>{
    const res = await apiClient.get<UserAlbums[]>(`/users/${userId}/albums`);

    return res.data;
};

export const getUserTodos = async (userId: any) =>{
    const res = await apiClient.get<Todos[]>(`/users/${userId}/todos`);

    return res.data;
};

export const getUserPosts = async (userId: any) =>{
    const res = await apiClient.get<Posts[]>(`/users/${userId}/posts`);

    return res.data;
}
