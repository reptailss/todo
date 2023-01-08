import {useAppDispatch} from "../redux";
import {setClick, setMessage, setOpenAlert} from '../../redux/alertSlice'


export const useAlert = () => {
    const dispatch = useAppDispatch();
    const setAlert = (message: string, click: () => void) => {
        dispatch(setMessage(message));
        dispatch(setClick(click));
        dispatch(setOpenAlert(true));
    };

    return {setAlert}

};