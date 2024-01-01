import { Todos } from "shared/typecode/models";
import apiClient from "../base";

export const getAllTodos = async (): Promise<Todos[]> => {
    const res = await apiClient.get(`/todos?_limit=7`);

    return res.data;
};

export const toggleTodoStatus = async (todo: Todos) => {
    return await apiClient.patch(`/todos/${todo.id}`, todo );
};

export const createTodo = async (todo: Todos) => {
    return await apiClient.post(`/todos?_limit=7`, todo );
};

export const deleteTodoById = async (id: number) => {
    return await apiClient.delete<Todos>(`/todos/${id}`);
}
