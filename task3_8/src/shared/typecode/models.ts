
export interface Posts {
    userId: any,
    id: number,
    title: string,
    body: string,
};

export interface Todos {
    userId: string | undefined,
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
};

export interface UserAlbums {
    userId: any,
    id: number,
    title: string
};
