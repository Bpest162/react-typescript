import { Posts } from "shared/typecode/models";
import apiClient from "shared/api/base";

export const getAllPosts = async () => {
    const res = await apiClient.get<Posts[]>("/posts?_limit=7");

    return res.data;
};

export const addPosts = async (post: Posts) => {
    return apiClient.post(`/posts?_limit=7`, post);
};