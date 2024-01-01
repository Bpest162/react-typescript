
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
    id: any,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
    },
    phone: number,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string,
    }
}