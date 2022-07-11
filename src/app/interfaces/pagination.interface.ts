export interface Paginated<T>{
    count: number;
    limit: number;
    offset: number;
    data: T[];
}