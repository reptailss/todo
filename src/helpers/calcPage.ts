import {ITodoItem} from "../types/todo";

export const calcTotalPage = (arr: ITodoItem[], num: number) => {
    return Math.ceil(arr.length / num);
};