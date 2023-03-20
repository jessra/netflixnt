import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const activoSlice = createSlice({
  name: 'activo',
  initialState: {user: {img: '', name: ''}, token: ''},
  reducers: {
    listaActivo: (state, action) => {
      state.user = action.payload.user
      if (action.payload.token) {
        state.token = action.payload.token
      }
    },
  }
})

export const {listaActivo} = activoSlice.actions
export default activoSlice.reducer

export const activoList = () => (dispatch) => {
  if (localStorage.getItem('netflixnt') != null){
    const dataT = JSON.parse(localStorage.getItem('netflixnt'))
    dispatch(listaActivo(dataT))
  } 
}