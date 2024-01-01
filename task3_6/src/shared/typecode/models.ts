
export interface Posts {
    userId: number,
    id: number,
    title: string,
    body: string,
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