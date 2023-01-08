import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface IInitialState {
    open: boolean,
    message: string,
    click: () => void

}

const initialState: IInitialState = {
    open: false,
    message: 'done',
    click: () => {}
};

export const AlertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setOpenAlert(state, action: PayloadAction<boolean>) {
            state.open = action.payload
        },

        setMessage(state, action: PayloadAction<string>) {
            state.message = action.payload
        },
        setClick(state, action: PayloadAction<() => void>) {
           state.click = action.payload
        },
    },

});

export const {setOpenAlert, setMessage, setClick} = AlertSlice.actions;

export default AlertSlice.reducer;
