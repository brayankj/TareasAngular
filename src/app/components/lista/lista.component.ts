import { Component, OnInit } from '@angular/core';
import { ListasService } from '../../services/listas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Lista } from '../../class/lista.model';
import {MatDialog} from '@angular/material/dialog';
import { DialogItemComponent } from '../dialog-item/dialog-item.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  id:string;
  lista : Lista
  pendientes;
  constructor(
    public _lista : ListasService,
    public _route : ActivatedRoute,
    public _router: Router,
    public dialog: MatDialog
  ){ 
    this.id = this._route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.lista = this._lista.obteberLista(this.id);
    if(this.lista===undefined){
      this._router.navigate(['/my-notes']);
    }
    if(this.lista.items.length>0){
      this.pendientes = this.lista.items;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogItemComponent, {
      width: '80%',
      data: {dialog :'nuevo', Lista: this.lista}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.lista = this._lista.obteberLista(this.id);
      if(this.lista.items.length>0){
        this.pendientes = this.lista.items;
      }
    });
  }


  cambioCheck(item){
    const pendientes = this.lista.items
      .filter(itemData => !itemData.completado)
      .length;
    if(pendientes<=1){
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    this.lista = this._lista.obteberLista(this.id);
    this._lista.guardarStorage();
  }

}
