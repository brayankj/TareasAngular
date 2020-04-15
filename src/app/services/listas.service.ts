import { Injectable } from '@angular/core';
import { Lista } from '../class/lista.model'

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  listas:Lista[]=[];
  constructor(){
    // const lista1 = new Lista('Prueba');
    // this.listas.push(lista1);
    this.cargarStorage();
  }

  getListas(){
    return this.listas.map(listaData => listaData);
  }

  crearLista(titulo:string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    return nuevaLista.id;
  }

  borrarLista(lista:Lista){
    this.listas = this.listas.filter(data => data.id !== lista.id );
    this.guardarStorage();
  }

  editarLista(lista:Lista){
    let edita = this.listas.find(data => data.id == lista.id );
    this.guardarStorage();
  }

  obteberLista(id:string|number){
    id = Number(id);
    return this.listas.find(listaData => listaData.id === id);
  }

  guardarStorage(){
    localStorage.setItem('listas', JSON.stringify(this.listas));
  }

  cargarStorage(){
    if(localStorage.getItem('listas')){
      this.listas = JSON.parse(localStorage.getItem('listas'));
    }else{
      this.listas = [];
    }

  }

}
