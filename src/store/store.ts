import { configureStore } from "@reduxjs/toolkit";
import photoSlice from './photoSlice'


const Store = configureStore({
    reducer: {   
      photos : photoSlice,
    },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
