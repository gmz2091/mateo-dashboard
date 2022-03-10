export interface UserClass {
    _id: string;
    orders: any[];
    orderProgress: boolean;
    lastName: string;
    name: string;
    email: string;
    __v?: number;
}

export interface User {
    access_token: string;
    message?: string;
    statusCode?: number;
    user: UserClass;
}
