import { Todos } from "shared/typecode/models";
import apiClient from "../base";

export const getAllTodos = async (): Promise<Todos[]> => {
    const res = await apiClient.get(`/todos`);

    return res.data;
};

export const toggleTodoStatus = async (todo: Todos) => {
    return await apiClient.patch(`/todos/${todo.id}`, todo );
};
