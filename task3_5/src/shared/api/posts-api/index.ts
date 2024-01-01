import { Posts } from "shared/typecode/models";
import apiClient from "shared/api/base";

export const getAllPosts = async () => {
    const res = await apiClient.get<Posts[]>("/posts");

    return res.data;
};