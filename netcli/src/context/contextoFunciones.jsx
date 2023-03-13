import { createContext, useState, useEffect } from 'react';
import http from "../http-common";
export const Contexto_Funciones = createContext();

export function Contexto_DataProvider(props) {  
  function Alert(men, tipo) {
    if (tipo) {
      document.getElementById('notificacion').classList.add('color-success');
    } else {
      document.getElementById('notificacion').classList.add('color-error');
    }

    document.getElementById('notificacion').innerHTML = '';
    document.getElementById('notificacion').innerHTML +=
      `
    <i class="fa-solid fa-circle-check"></i>
    <p class="m-0 px-2">` +
      men +
      `</p>`;
    setTimeout(() => {
      if (tipo) {
        document.getElementById('notificacion').classList.remove('color-success');
      } else {
        document.getElementById('notificacion').classList.remove('color-error');
      }
      document.getElementById('notificacion').innerHTML = '';
    }, 5000);
  }

  function cerrarSesion() {
    localStorage.removeItem("netflixn't");
    window.location.href = '/LogIn';
  }

  return <Contexto_Funciones.Provider value={{
    Alert
    }}>
    {props.children}
  </Contexto_Funciones.Provider>;
}