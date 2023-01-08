import React from 'react';

import './App.css';
import TodoList from "./components/todoList/TodoList";
import SnackBars from "./components/snackBar/snackBar";
import Alert from "./components/alert/Alert";
import Header from "./components/header/Header";
import AddTodo from "./components/addTodo/AddTodo";

import styles from './styles.module.scss'
import Pagination from "./components/pagination/Pagination";

function App() {
    return (
        <>
            <Header/>
            <div className="App">

                <SnackBars/>
                <Alert/>
                <Pagination/>
                <div className={styles.inner}>

                    <AddTodo/>
                    <TodoList/>
                </div>
            </div>
        </>

    );
}

export default App;
