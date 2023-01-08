import React from 'react';
import {useFormik} from "formik";
import {Button, TextField, Typography} from "@mui/material";
import {validationSchemaAddTodo} from "../../constans/todo";
import AddIcon from '@mui/icons-material/Add';
import {addTodo} from '../../redux/todoSlice'


import styles from './styles.module.scss'
import {useAppDispatch} from "../../hooks/redux";
import {useSnackBar} from "../../hooks/useSneckBar/useSnackBars";

const AddTodo = () => {

    const dispatch = useAppDispatch();

    const{setSnackBar} = useSnackBar();


    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: validationSchemaAddTodo,
        onSubmit: async (values) => {
            dispatch(addTodo({
                title:values.title,
                description:values.description,
                userId: 1,
                id:new Date().getTime(),
                completed: false
            }));
            setSnackBar('you have successfully added todo','success');
            formik.resetForm({});
        }
    });


    return (

        <form
            className={styles.root}
            onSubmit={formik.handleSubmit}
        >
            <Typography
            className={styles.text}
            >add Todo</Typography>

            <div className={styles.innerInput}>
                <TextField
                    key={'title'}
                    fullWidth
                    id={'title'}
                    name={'title'}
                    label={'title'}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    size={'small'}
                />

                <TextField
                    key={'description'}
                    fullWidth
                    id={'description'}
                    name={'description'}
                    label={'description'}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    multiline
                    size={'small'}
                />
                <Button
                    className={styles.button}
                    color="primary"
                    variant="contained"
                    fullWidth type="submit">
                    <AddIcon/>
                </Button>
            </div>

            <div>
            </div>
        </form>
    );
};

export default AddTodo;