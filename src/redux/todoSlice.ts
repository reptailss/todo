import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ITodoItem} from "../types/todo";
import {todoDataInitial} from "../constans";
import {calcTotalPage} from "../helpers/calcPage";


interface IInitialState {

    allTodoData: ITodoItem[],
    todoData: ITodoItem[],
    searchTodoData: ITodoItem[] | [],
    searchValue: string,
    page: number,
    totalPage : number,
    pageLimit: number,
    offset: number,


}

const initialState: IInitialState = {
    allTodoData: todoDataInitial,
    todoData: todoDataInitial,
    searchTodoData: [],
    searchValue: '',
    page: 1,
    pageLimit: 5,
    totalPage : calcTotalPage(todoDataInitial,5),
    offset: 0,
};


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodoData(state, action) {
            state.todoData = [...action.payload]
        },
        addTodo(state, action: PayloadAction<ITodoItem>) {
            state.allTodoData = [action.payload, ...state.allTodoData]
        },

        deleteTodo(state, action: PayloadAction<number>) {
            state.allTodoData = state.allTodoData.filter(item => item.id !== action.payload)
        },
        toggleCompleted(state, action: PayloadAction<number>) {
            state.allTodoData = state.allTodoData.map(item => {
                if (item.id === action.payload) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        },
        editTodo(state, action: PayloadAction<ITodoItem>) {
            state.allTodoData = state.allTodoData.map(item => {
                if (item.id === action.payload.id) {
                    return {...action.payload}
                }
                return item;
            })
        },
        setSearchTodoData(state, action: PayloadAction<string>) {
            if (action.payload.length === 0) {
                state.searchTodoData = []
            } else {
                let todo: ITodoItem[] = [];

                state.todoData.forEach(function (elem) {
                    if (elem.title.indexOf(action.payload) != -1) todo.push(elem);
                });

                if (todo) {
                    state.searchTodoData = [...todo]
                }
            }

        },

        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },

        setPage(state, action) {
            state.page = action.payload
        },
        setOffset(state, action) {
            state.offset = action.payload
        },
        setTotalPage(state, action) {
            state.totalPage = action.payload
        },
    },


});

export const {deleteTodo, toggleCompleted, editTodo, addTodo, setSearchTodoData, setSearchValue,setPage,setTotalPage,setTodoData,setOffset} = todoSlice.actions;

export default todoSlice.reducer;