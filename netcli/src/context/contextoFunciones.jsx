import { createContext, useState, useEffect } from 'react';
import http from "../http-common";
export const Contexto_Funciones = createContext();

export function Contexto_DataProvider(props) {  
  const [activo, setActivo] = useState({user: {img: '', name: ''}});
  const [peli, setPeli] = useState([]);
  const [peliSelect, setPeliSelect] = useState([])
  // function Alert(men, tipo) {
  //   if (tipo) {
  //     document.getElementById('notificacion').classList.add('color-success');
  //   } else {
  //     document.getElementById('notificacion').classList.add('color-error');
  //   }

  //   document.getElementById('notificacion').innerHTML = '';
  //   document.getElementById('notificacion').innerHTML +=
  //     `
  //   <i class="fa-solid fa-circle-check"></i>
  //   <p class="m-0 px-2">` +
  //     men +
  //     `</p>`;
  //   setTimeout(() => {
  //     if (tipo) {
  //       document.getElementById('notificacion').classList.remove('color-success');
  //     } else {
  //       document.getElementById('notificacion').classList.remove('color-error');
  //     }
  //     document.getElementById('notificacion').innerHTML = '';
  //   }, 5000);
  // }
  useEffect((e) => {
    listaActivo()
    listaPeliculas()
  }, [])

  function listaActivo () {
    if (localStorage.getItem('netflixnt') != null){
      const dataT = JSON.parse(localStorage.getItem('netflixnt'))
      setActivo(dataT)
    } 
  }

  function listaPeliculas () {
    let dataPeli = []
    http
    .get('/movies')
    .then(response => {
      dataPeli = response.data
      ordenarDatosPeli(dataPeli)
    })
    .catch(e => {
      console.log(e)
    })
    setPeli(dataPeli)
  }

  function ordenarDatosPeli (data) {
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
      const fec = m.fecMov.split('T')
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
    setPeli(mov)
  }

  function iniciarCuenta(user, pass) {
    if (user && pass) {
      http
      .post('/inituser', {user: user, pass: pass})
      .then(response => {
				if (response.data.err) {
          console.log(response.data.err)
					if (response.data.err.errors[0].message) {
						// Alert('Ha sucedido un problema. ' + response.data.err.errors[0].message, false)
					} else {
						// Alert('Ha sucedido un problema', false)
					}
				} else {
					localStorage.setItem('netflixnt', JSON.stringify(response.data));
          listaActivo()
					window.location.href = '/';
				}
      })
    }
  }

  function registrarCuenta(user, pass, img) {
		if (user && pass && img.data) {
			let formData = new FormData();
			formData.append("file", img.data);
			formData.append("name", user);
			formData.append("pass", pass);
			let header = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};
			http
			.post("http://localhost:8081/api/aggusers", formData, header)
			.then((response) => {
				if (response.data.err) {
					if (response.data.err.errors[0].message) {
						// Alert('Ha sucedido un problema. ' + response.data.err.errors[0].message, false)
					} else {
						// Alert('Ha sucedido un problema', false)
					}
				} else {
					localStorage.setItem('netflixnt', JSON.stringify(response.data));
          listaActivo()
					window.location.href = '/';
				}
			})
			.catch((error) => {
				console.log('Error:', error);
				// Alert('Ha sucedido un problema', false)
			});
		} else {
			// Alert('Por favor rellena todos los campos', false)
		}
  }

  function registrarPelicula(head, di, fran, gen, fecMov, sip, img, tra) {
    if (head && di && fran && gen && fecMov && sip && img.data && tra) {
			let formData = new FormData();
			formData.append("file", img.data);
			formData.append("head", head);
			formData.append("director", di);
			formData.append("franquicia", fran);
			formData.append("genero", gen);
			formData.append("fecMov", fecMov);
			formData.append("sipnosis", sip);
			formData.append("link", tra);
			let header = {
				headers: {
          authorization: `Bearer ${activo.token}`,
					'Content-Type': 'multipart/form-data',
				},
			};
			http
			.post("http://localhost:8081/api/aggmovies", formData, header)
			.then((response) => {
        console.log(response.data)
			})
			.catch((error) => {
				console.log('Error:', error);
				// Alert('Ha sucedido un problema', false)
			});
    }
  }

  function peliculaSelect(id) {
    http
    .post(`/movie/${id}`)
    .then(response => {
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
      setPeliSelect(mov)
    })
    .catch(e => {
      console.log(e)
    })
  }

  function crearReview(user, mov, review, valor) {
    if (review && valor) {
      http
      .post("/aggreview", {user: user, mov: mov, review: review, valor: valor})
      .then((response) => {
        console.log(response.data)
        peliculaSelect(mov)
      })
      .catch((error) => {
        console.log('Error:', error);
        // Alert('Ha sucedido un problema', false)
      });
    }
  }

  function eliminarPeli(mov, img) {
    http
    .delete(`/eliminar/${mov}/${img}`)
    .then((response) => {
      console.log(response.data)
      listaPeliculas()
      window.location.href = '/';
    })
    .catch((error) => {
      console.log('Error:', error);
      // Alert('Ha sucedido un problema', false)
    });
  }
  function cerrarSesion() {
    localStorage.removeItem("netflixnt");
    window.location.href = '/Log';
  }

  return <Contexto_Funciones.Provider value={{
    // Alert,
    iniciarCuenta,
    registrarCuenta,
    registrarPelicula,
    peli,
    activo,
    cerrarSesion,
    peliculaSelect,
    peliSelect,
    crearReview,
    eliminarPeli
    }}>
    {props.children}
  </Contexto_Funciones.Provider>;
}