import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserState {
  id: string
}
const initialState: UserState = {
  id: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startEditUser: (state, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    cancelEditUser: (state) => {
      state.id = ''
    }
  }
})

const userReducer = userSlice.reducer
export const { startEditUser, cancelEditUser } = userSlice.actions
export default userReducer
