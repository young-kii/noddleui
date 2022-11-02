export declare type item = {
    title: string;
    extra?: string;
    children: child[];
};
export declare type child = {
    title: string;
    to?: string;
};
