import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import http from "../../http-common";

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {mov: []},
  reducers: {
    listaPelicula: (state, action) => {
      state.mov = action.payload
    },
  }
})

export const {listaPelicula} = movieSlice.actions
export default movieSlice.reducer

export const movieList = (id) => (dispatch) => {
  http
  .post(`/movie/${id}`)
  .then(response => {
    if (response.data.r) {
      const fec = response.data.mov.fecMov.split('T')
      let rev = []
      if (response.data.rev) {
        response.data.rev.forEach((r) => {
          const user = response.data.user.filter(function(u) {
            return u.idUser == r.idUserRev;
          })
          rev.push({
            id: r.idRev,
            mov: r.idMovRev,
            review: r.review,
            user: user[0].name,
            img: user[0].img,
            valor: r.valorRev
          })
        })
      }
      let mov = {
        id: response.data.mov.idMov,
        head: response.data.mov.head,
        sipnosis: response.data.mov.sipnosis,
        director: response.data.dir.nameDi,
        genero: response.data.gen.nameGe,
        franquicia: response.data.fran.nameFran,
        fecMov: fec[0],
        img: response.data.mov.img,
        link: response.data.mov.link,
        actors: response.data.act,
        recomendacion: response.data.rec,
        reviews: rev
      }
      dispatch(listaPelicula(mov))
    } else {
      console.log(response.data.msg)
    }
  })
  .catch(e => {
    console.log(e)
  })
}