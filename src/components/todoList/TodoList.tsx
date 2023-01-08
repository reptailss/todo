import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import TodoItem from "../todoItem/TodoItem";
import NoItems from "../noItems/NoItems";

import {ITodoItem} from "../../types/todo";

import {setTodoData,setPage} from '../../redux/todoSlice'


import styles from './styles.module.scss'

const TodoList = () => {

    const dispatch = useAppDispatch();

    const {todoData, searchTodoData, searchValue, page, offset, pageLimit, allTodoData} = useAppSelector(state => state.todo);

    const allList = todoData?.map((item: ITodoItem) => {
        return <TodoItem
            key={item.id}
            {...item}/>

    });

    const searchList = searchTodoData?.map((item: ITodoItem) => {
        return <TodoItem
            key={item.id}
            {...item}/>

    });

    useEffect(() => {
        dispatch(setTodoData(allTodoData.slice(offset, offset + pageLimit)))
    }, [page, offset, allTodoData]);



    return (
        <div className={styles.root}>
            {searchTodoData.length && searchTodoData ?
                searchList :
                searchValue ? <NoItems text={'couldnt find anythin..'}/>
                    : todoData && todoData.length ?
                    allList :
                    <NoItems text={'nothing here yet..'}/>}


        </div>
    );
};

export default TodoList;