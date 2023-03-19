import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import http from "../../http-common";

export const generoSlice = createSlice({
  name: 'generos',
  initialState: {gen: []},
  reducers: {
    listaGenero: (state, action) => {
      state.gen = action.payload
    },
  }
})

export const {listaGenero} = generoSlice.actions
export default generoSlice.reducer

export const generoList = () => (dispatch) => {
	http
	.get('/generos')
	.then(response => {
		dispatch(listaGenero(response.data))
	})
	.catch(e => {
		console.log(e)
	})
}