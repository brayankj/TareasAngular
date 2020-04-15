import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ListasService } from '../../services/listas.service';
import {DialogComponent} from '../dialog/dialog.component';
import { Lista } from '../../class/lista.model';

@Component({
  selector: 'app-listanotas',
  templateUrl: './listanotas.component.html',
  styleUrls: ['./listanotas.component.css']
})
export class ListanotasComponent implements OnInit {

  Lista;
  constructor( 
    private _listas : ListasService,
    public dialog: MatDialog )
  { }

  ngOnInit() {
    this.Lista = this._listas.getListas();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      data: {dialog :'nuevo'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.Lista = this._listas.getListas();
    });
  }

  editar(lista:Lista):void{
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '80%',
      data: {dialog :'editar', name: lista.titulo, Lista: lista}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.Lista = this._listas.getListas();
    });
  }

  eliminar(lista){
    this._listas.borrarLista(lista);
    this.Lista = this._listas.getListas();
  }

  verNota(id){
    console.log(id);
  }

}
