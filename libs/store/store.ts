import { configureStore } from '@reduxjs/toolkit'
import adsSlice from '@/libs/store/slices/adsSlice/adsSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
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
