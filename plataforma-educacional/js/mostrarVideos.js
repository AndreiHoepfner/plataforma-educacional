
import { conectaApi } from "./conectaApi.js";
const lista = document.querySelector("[data-lista]");

function constroiCard(titulo, descricao, url){

    const video = document.createElement("li")
    video.className = "videos__item";
    video.innerHTML = ` class="videos__item">
    <iframe width="100%" height="72%" src="${url}" 
         title="${titulo}" frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowfullscreen></iframe>
     <div class="descricao-video">
         <h3>${titulo}</h3>
         <p>${descricao}</p>
     </div>`
     return video;

}

async function listaVideos(){
    
    const listaApi = await conectaApi.listaVideos()
    listaApi.forEach(elemento => lista.appendChild(
    constroiCard(elemento.titulo, elemento.descricao, elemento.url)))
    }       

    listaVideos()