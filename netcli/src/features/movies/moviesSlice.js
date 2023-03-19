import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import http from "../../http-common";

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {movs: []},
  reducers: {
    listaPeliculas: (state, action) => {
      state.movs = action.payload
    },
  }
})

export const {listaPeliculas} = moviesSlice.actions
export default moviesSlice.reducer

export const moviesList = () => (dispatch) => {
  let data = []
  http
  .get('/movies')
  .then(response => {
    data = response.data
    dispatch(ordenarDatosPeli(data))
  })
  .catch(e => {
    console.log(e)
  })
}

export const ordenarDatosPeli = (data) => (dispatch) => {
  let mov = []
  data.mov.forEach((m) => {
    const dir = data.dir.filter(function(d) {
      return d.idDi == m.director;
    })
    const fran = data.fran.filter(function(f) {
      return f.idFran == m.franquicia;
    })
    const gen = data.gen.filter(function(g) {
      return g.idGe == m.genero;
    })
    const actor = data.act.filter(function(a) {
      return data.mov_act.filter(function(ma) {
        return ma.idMovieMA == m.idMov && ma.idActorMA == a.idAc
      })
    })
    let fec = []
    if (m.fecMov) {
      fec = m.fecMov.split('T')
    }
    mov.push({
      id: m.idMov,
      head: m.head,
      sipnosis: m.sipnosis,
      director: dir[0].nameDi,
      genero: gen[0].nameGe,
      franquicia: fran[0].nameFran,
      fecMov: fec[0],
      img: m.img,
      link: m.link,
      actors: actor
    })
  })
  dispatch(listaPeliculas(mov.reverse()))
}
