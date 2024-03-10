import { configureStore } from '@reduxjs/toolkit'
import userAuthSlice from '@/libs/store/slices/userAuthSlice/userAuthSlice'
import adsSlice from '@/libs/store/slices/adsSlice/adsSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      userAuthSlice: userAuthSlice,
      adsSlice: adsSlice,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
