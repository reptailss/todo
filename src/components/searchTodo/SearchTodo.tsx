import React, {ChangeEvent} from 'react';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styles from './styles.module.scss'
import {useDispatch} from "react-redux";
import {setSearchTodoData, setSearchValue} from '../../redux/todoSlice'
import {useAppSelector} from "../../hooks/redux";

const SearchTodo = () => {

    const dispatch = useDispatch();
    const {searchValue} = useAppSelector(state => state.todo)

    const onChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(setSearchTodoData(e.target.value));
        dispatch(setSearchValue(e.target.value))
    };
    return (

        <TextField
            className={styles.input}
            value={searchValue}
            onChange={(e) => onChange(e)}
            id="input-with-icon-textfield"
            label="search"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                ),
            }}
            variant="standard"
            color={'primary'}
        />
    );
};

export default SearchTodo;