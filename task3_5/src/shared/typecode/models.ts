
export interface Posts {
    title: string,
    body: string,
    id: number
};

export interface Todos {
    userId?: number
    id: number,
    completed: boolean,
    title: string
};

export interface Users {
    name: string,
    username: string,
    id: number
};