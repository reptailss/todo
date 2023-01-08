import {configureStore} from '@reduxjs/toolkit'
import todo from './todoSlice'
import snackBars from '../redux/snackBarsSlice'
import alert from '../redux/alertSlice'

export const store = configureStore({
    reducer: {
        todo,
        snackBars,
        alert
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;