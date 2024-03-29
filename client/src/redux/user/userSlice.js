import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser:null,
    error: null,
    loading: false,
  }

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) => {
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false
        },
        updateUserStart: (state) => {
          state.loading = true;
        },
        updateUserSuccess: (state) => {
          state.currentUser = action.payload;
          state.loading = false;
          state.error = null;
        },
        updateUserFailure: (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
        deleteUserStart: (state) => {
          state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
          state.currentUser = null;
          state.error = null;
          state.loading = false;
        },
        deleteUserFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload
        }, 
         signoutUserStart: (state) => {
          state.loading = true;
        },
        signoutUserSuccess: (state, action) => {
          state.currentUser = null;
          state.error = null;
          state.loading = false;
        },
        signoutUserFailure: (state, action) => {
          state.loading = false;
          state.error = action.payload
        }
    }
  });

  export const {signInStart, signInSuccess, signInFailure,
updateUserStart, updateUserSuccess, updateUserFailure,
deleteUserStart, deleteUserSuccess, deleteUserFailure,
signoutUserStart, signoutUserSuccess, signoutUserFailure} = userSlice.actions

  export default userSlice.reducer;