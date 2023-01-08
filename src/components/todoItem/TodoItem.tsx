import React, {FC, useState} from 'react';

import {Checkbox, TextField} from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

import {ITodoItem} from "../../types/todo";

import styles from './styles.module.scss'
import {useAppDispatch} from "../../hooks/redux";

import {deleteTodo, editTodo, toggleCompleted} from '../../redux/todoSlice'
import {useSnackBar} from "../../hooks/useSneckBar/useSnackBars";
import {useAlert} from "../../hooks/useAlert/useAlert";


const TodoItem: FC<ITodoItem> = ({userId, id, title, completed, description}) => {


    const dispatch = useAppDispatch();

    const {setSnackBar} = useSnackBar();

    const {setAlert} = useAlert();

    const [edit, setEdit] = useState<boolean>(false);

    const [titleTodo, setTitleTodo] = useState<string>(title);
    const [descriptionTodo, setDescriptionTodo] = useState<string>(title);

    const onToggleCompleted = () => {
        dispatch(toggleCompleted(id))
    };

    const onDeleteTodo = (id: number) => {
        setAlert('delete without the ability to restore?', () => {
            dispatch(deleteTodo(id));
            setSnackBar('you have successfully deleted!', 'info')
        });

    };

    const onToggleEdit = () => {
        setEdit(true)
    };

    const activeStyle = {
        opacity: completed ? '.5' : 1
    };

    const onSave = () => {
        setAlert('save changes?', () => {
            setEdit(false);
            dispatch(editTodo({
                title: titleTodo,
                description: descriptionTodo,
                id,
                userId,
                completed
            }));
            setSnackBar('you successfully saved!', 'success')
        });
    };

    const onCloseEdit = () => {
        setEdit(false)
    };


    return (
        <div
            style={activeStyle}
            className={styles.root}>
            <div className={styles.inner}>
                <div className={styles.info}>
                    {!edit ? <div className={styles.title}>
                            {title}
                        </div> :
                        <TextField
                            className={styles.input}
                            required
                            id="title"
                            label="title"
                            defaultValue={titleTodo}
                            value={title}
                            onChange={(e) => setTitleTodo(e.target.value)}
                        />
                    }
                    {!edit ? <div className={styles.description}>
                        {description}
                    </div> : <TextField
                        className={styles.input}
                        required
                        id="description"
                        label="description"
                        defaultValue={descriptionTodo}
                        value={descriptionTodo}
                        onChange={(e) => setDescriptionTodo(e.target.value)}
                    />}
                </div>
                {!edit ? <BorderColorIcon
                    onClick={onToggleEdit}
                    className={styles.hover}
                /> : <>

                    <CloseIcon
                        onClick={onCloseEdit}
                        className={styles.hover}
                    />

                    <SaveIcon
                        onClick={onSave}
                        className={styles.hover}
                    />

                </>}
            </div>
            <div className={styles.state}>
                <DeleteIcon
                    onClick={() => {
                        onDeleteTodo(id)
                    }}
                    className={styles.hover}
                />

                <Checkbox
                    checked={completed}
                    onChange={onToggleCompleted}
                    inputProps={{'aria-label': 'controlled'}}
                />
            </div>

        </div>
    );
};

export default TodoItem;