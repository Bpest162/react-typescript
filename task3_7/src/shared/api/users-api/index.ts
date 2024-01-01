import { Users } from "shared/typecode/models";
import apiClient from "../base";

export const getAllUsers = async () => {
    const res = await apiClient.get<Users[]>("/users");

    return res.data;
};

export const getUserById = async (userId: any) =>{
    return await apiClient.get<Users>(`/users/${userId}`)
};
