import {FC} from 'react';

import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setOpenAlert} from '../../redux/alertSlice'


const Alert: FC = () => {

    const {open, message, click} = useAppSelector(state => state.alert);

    const dispatch = useAppDispatch();

    const setOpen = (value: boolean) => {
        dispatch(setOpenAlert(value))
    };


    const handleClose = () => {
        setOpen(false);
    };

    const onAgree = () => {
        click();
        handleClose();
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle

                    id="alert-dialog-title">
                    {"confirm action"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={onAgree} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Alert;