import { createSlice } from '@reduxjs/toolkit'

interface IUser {
  login: string | null
  password: string | null
}

export const userAuthSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as IUser,
  },
  reducers: {
    logOut: state => {
      state.user = { login: null, password: null }
    },
    login: (state, action) => {
      state.user = { ...action.payload }
    },
  },
})

export const { login, logOut } = userAuthSlice.actions
export default userAuthSlice.reducer
