import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from '../services/articles'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

export const store = configureStore({
  reducer:{
    [articleApi.reducerPath]: articleApi.reducer
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector